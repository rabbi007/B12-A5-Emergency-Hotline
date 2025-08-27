

                          Readme File


১. getElementById, getElementsByClassName, ও querySelector / querySelectorAll এর পার্থক্য:

- getElementById: একটি নির্দিষ্ট id যুক্ত একক HTML element কে return করে। (single element)
- getElementsByClassName: একটি নির্দিষ্ট class নামযুক্ত সকল element এর collection (HTMLCollection) return করে। (multiple elements)
- querySelector: CSS selector দিয়ে প্রথম matching element return করে।
- querySelectorAll: CSS selector দিয়ে সব matching element এর NodeList return করে।

২. DOM এ নতুন element তৈরি ও ইনসার্টের পদ্ধতি:

- createElement(tagName) দিয়ে নতুন element তৈরি করা হয়।
- element এর content or attribute সেট করা হয়।
- parentNode এর method যেমন appendChild বা insertBefore দিয়ে DOM এ element insert করা হয়।

৩. Event Bubbling কী ও কীভাবে কাজ করে?

- Event Bubbling হল event propagation পদ্ধতি যেখানে event প্রথমে লক্ষ্য element এ ঘটে, তারপর তার parent element গুলোতে ক্রমান্বয়ে উঠে চলে যায় যতক্ষণ root element এ পৌঁছে না।

৪. JavaScript এ Event Delegation কী? এটি কেন দরকার?

- Event Delegation হল একটি parent element এ event listener attach করে child element এর events handle করার পদ্ধতি।
- এটি ক্ষেত্রে performance বাড়ায় এবং নতুন dynamically added elements নিয়ন্ত্রণ সহজ হয়।

৫. preventDefault() ও stopPropagation() পদ্ধতির পার্থক্য:

- preventDefault(): event এর default browser action (যেমন link এ click করলে navigate হওয়া) বন্ধ করে।
- stopPropagation(): event এর propagation বন্ধ করে, অর্থাৎ event আর parent element এ bubble বা capture হয় না।