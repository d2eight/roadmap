export function InfiniteProgress({ className }: { className?: string }) {
  return (
    <div className={`${className} flex items-center`}>
      <div className="h-1.5 w-full bg-muted overflow-hidden">
        <div className="progress w-full h-full bg-black left-right"></div>
      </div>
    </div>
  );
}
