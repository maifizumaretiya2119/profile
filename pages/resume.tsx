import React from "react";

const Resume = () => {
    const openPdf = () => {
        const pdfUrl = '/Maifiz Umaretiya.pdf';
        window.open(pdfUrl, '_blank');
    };
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-between container mx-auto py-16 sm:py-24 px-4 sm:px-8 lg:px-12 relative">
            <section className="container mx-auto px-8 2xl:px-36 text-center pt-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    My <span className="highlight bg-clip-text">Resume</span>
                </h1>
                <p className="text-coolGray-400 font-semibold mt-6 leading-relaxed sm:text-lg">
                    Here’s a brief overview of my career journey. You can scroll through
                    or zoom into the PDF document below to view the full resume.
                </p>
            </section>

            {/* PDF Viewer */}
            <div className="w-full mt-5 flex justify-center items-center px-5">
                <div className="w-full max-w-4xl mt-5">
                    <object
                        data="/Maifiz Umaretiya.pdf"
                        type="application/pdf"
                        width="100%"
                        height="600"
                    >
                        <div className="text-center text-white mt-5">
                            <p>Your browser doesn’t support viewing PDFs. You can:</p>
                            <button
                                onClick={openPdf}
                                className="mt-5 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                            >
                                Click here to open the resume
                            </button>
                        </div>
                    </object>
                </div>
            </div>

            {/* Page Navigation */}
        </div>
    );
};

export default Resume;
