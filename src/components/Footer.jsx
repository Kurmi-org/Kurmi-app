
import '../app/global.css';
export const Footer = () => {
  return (
    <div class="fixed bottom-0 w-full bg-green-400">
        <div class="px-4 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid row-gap-10 mb-4 lg:grid-cols-6">
                <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <p class="text-sm text-gray-900">© 2021 All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;