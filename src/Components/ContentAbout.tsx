const AboutContent = () => {
    return (
        <section className="w-full max-w-3xl mx-auto p-6 bg-black text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-white">About</h2>
            <p className="mb-4">
                <span className="text-gray-400 font-mono">tldr;</span> learnt by questioning my AI buddy and staying curious.
            </p>
            <p className="mb-4">
                I pick things up from people on the internet, keep experimenting, and build stuff that looks
                <span className="italic text-gray-400"> shitty at first </span>
                but gets cooler after enough iterations. Always breaking, fixing, and learning.
            </p>
            <p>
                When I’m not coding, I’m probably sleeping, doing hostel chores ( mostly wash cloths ) 🧺, or on the hunt for good food and hangouts with friends.
            </p>
        </section>
    );
};

export default AboutContent;
