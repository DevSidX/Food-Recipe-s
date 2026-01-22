import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-gray-950 via-gray-900 to-gray-950 
                       border-t border-gray-800 mt-12">

            <div className="max-w-7xl mx-auto px-4 py-6 text-center">

                {/* Accent Line */}
                <div className="w-20 h-1 bg-green-400 mx-auto mb-4 rounded-full"></div>

                {/* Text */}
                <p className="text-gray-400 text-sm sm:text-base tracking-wide">
                    © {new Date().getFullYear()}
                    <span className="text-white font-semibold"> Recipes. </span>
                    All rights reserved.

                </p>

            </div>
        </footer>
    )
}

export default Footer