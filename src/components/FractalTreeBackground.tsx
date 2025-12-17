import { useEffect, useRef, useCallback } from "react";

interface Branch {
  startX: number;
  startY: number;
  length: number;
  angle: number;
  depth: number;
  growthProgress: number;
  children: Branch[];
}

const FractalTreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const treeRef = useRef<Branch | null>(null);
  const growthStartTimeRef = useRef<number>(0);
  const isGrownRef = useRef<boolean>(false);
  const parallaxOffsetRef = useRef<number>(0);

  const TEAL_COLOR = "#20B2AA";
  const GLOBAL_ALPHA = 0.3;
  const GROWTH_DURATION = 5500; // ms - slower growth
  const MAX_DEPTH = 10;
  const BRANCH_ANGLE_SPREAD = Math.PI / 5;
  const LENGTH_DECAY = 0.72;
  const SWAY_AMPLITUDE = 0.02; // radians
  const SWAY_SPEED = 0.001;
  const PARALLAX_FACTOR = 0.3; // Tree moves at 30% of scroll speed

  const generateTree = useCallback((
    startX: number,
    startY: number,
    length: number,
    angle: number,
    depth: number
  ): Branch => {
    const branch: Branch = {
      startX,
      startY,
      length,
      angle,
      depth,
      growthProgress: 0,
      children: [],
    };

    if (depth < MAX_DEPTH) {
      const endX = startX + Math.sin(angle) * length;
      const endY = startY - Math.cos(angle) * length;
      const newLength = length * LENGTH_DECAY * (0.9 + Math.random() * 0.2);
      
      // Left branch
      const leftAngle = angle - BRANCH_ANGLE_SPREAD * (0.8 + Math.random() * 0.4);
      branch.children.push(generateTree(endX, endY, newLength, leftAngle, depth + 1));
      
      // Right branch
      const rightAngle = angle + BRANCH_ANGLE_SPREAD * (0.8 + Math.random() * 0.4);
      branch.children.push(generateTree(endX, endY, newLength, rightAngle, depth + 1));
      
      // Occasional middle branch for variety
      if (depth < 4 && Math.random() > 0.6) {
        const midAngle = angle + (Math.random() - 0.5) * 0.3;
        branch.children.push(generateTree(endX, endY, newLength * 0.8, midAngle, depth + 1));
      }
    }

    return branch;
  }, []);

  const updateGrowthProgress = useCallback((branch: Branch, globalProgress: number): void => {
    const depthDelay = branch.depth * 0.08;
    const adjustedProgress = Math.max(0, Math.min(1, (globalProgress - depthDelay) / (1 - depthDelay * 0.5)));
    branch.growthProgress = adjustedProgress;
    
    branch.children.forEach(child => updateGrowthProgress(child, globalProgress));
  }, []);

  const drawBranch = useCallback((
    ctx: CanvasRenderingContext2D,
    branch: Branch,
    time: number
  ): void => {
    if (branch.growthProgress <= 0) return;

    const swayOffset = isGrownRef.current
      ? Math.sin(time * SWAY_SPEED + branch.depth * 0.5) * SWAY_AMPLITUDE * (branch.depth / MAX_DEPTH)
      : 0;

    const currentAngle = branch.angle + swayOffset;
    const currentLength = branch.length * Math.min(1, branch.growthProgress);

    const endX = branch.startX + Math.sin(currentAngle) * currentLength;
    const endY = branch.startY - Math.cos(currentAngle) * currentLength;

    ctx.beginPath();
    ctx.moveTo(branch.startX, branch.startY);
    ctx.lineTo(endX, endY);
    
    // Line width decreases with depth
    ctx.lineWidth = Math.max(1, 2 - branch.depth * 0.15);
    ctx.stroke();

    // Update children start positions and draw them
    if (branch.growthProgress >= 0.8) {
      branch.children.forEach(child => {
        child.startX = endX;
        child.startY = endY;
        drawBranch(ctx, child, time);
      });
    }
  }, []);

  const animate = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const tree = treeRef.current;

    if (!canvas || !ctx || !tree) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply parallax transform
    ctx.save();
    ctx.translate(0, parallaxOffsetRef.current);

    // Set styling
    ctx.strokeStyle = TEAL_COLOR;
    ctx.globalAlpha = GLOBAL_ALPHA;
    ctx.lineCap = "round";

    // Calculate growth progress
    if (!growthStartTimeRef.current) {
      growthStartTimeRef.current = timestamp;
    }

    const elapsed = timestamp - growthStartTimeRef.current;
    const globalProgress = Math.min(1, elapsed / GROWTH_DURATION);

    if (globalProgress >= 1) {
      isGrownRef.current = true;
    }

    // Update growth and draw
    updateGrowthProgress(tree, globalProgress);
    drawBranch(ctx, tree, timestamp);

    ctx.restore();

    animationRef.current = requestAnimationFrame(animate);
  }, [drawBranch, updateGrowthProgress]);

  const initializeTree = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const startX = canvas.width / 2;
    const startY = canvas.height;
    const initialLength = canvas.height * 0.22;

    treeRef.current = generateTree(startX, startY, initialLength, 0, 0);
    growthStartTimeRef.current = 0;
    isGrownRef.current = false;
  }, [generateTree]);

  useEffect(() => {
    initializeTree();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      initializeTree();
    };

    const handleScroll = () => {
      parallaxOffsetRef.current = window.scrollY * PARALLAX_FACTOR;
    };

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(resizeTimeout);
    };
  }, [animate, initializeTree]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default FractalTreeBackground;
