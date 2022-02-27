import React from 'react';

export default function CheckPrimary(props) {
    return (
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary dark:bg-primary  text-white  dark:text-white rounded-full flex-shrink-0">
                                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                       strokeWidth="2.5"
                                       className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                  </svg>
                              </span>
    );
}

