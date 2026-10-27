const Footer = () => {
    return (
        <footer>
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">
                    New Generation High School
                </span>
                <span className="text-xs font-semibold text-slate-900">
                    Phone: <a href="tel:+16394364444" className="text-blue-600 hover:underline">+1 (639) 436-4444</a>
                    {/* Fun fact: 639 is an actual Saskatchewan area code. Entirely a coincidence, I just made up this number using the letters "NEWGENHIGH" */}
                </span>
                <span className="text-xs font-semibold text-slate-900">
                    Email: <a href="mailto:contact@newgenhigh.com" className="text-blue-600 hover:underline">contact@newgenhigh.com</a>
                </span>
            </div>
        </footer>
    )
}
export default Footer;