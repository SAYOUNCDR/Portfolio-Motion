export default function BottomBlur() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 h-8 sm:h-10">
            {/* Layer 1: pure blur masked so it starts strong at the bottom and fades upward */}
            <div
                className="absolute inset-0 backdrop-blur-lg sm:backdrop-blur-xl"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)",
                    maskImage:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)",
                }}
            />
            {/* Layer 2: subtle black fade to reinforce the effect without a hard edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
        </div>
    );
}
