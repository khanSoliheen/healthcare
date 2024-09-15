import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
            {/* Logo */}
            <Image src="/images/TestLogo.svg" alt="logo" width={100} height={60} />

            {/* Navigation */}
            <nav>
                <ul className="flex gap-6">
                    <li className="flex items-center">
                        <Image
                            src="/images/home_FILL0_wght300_GRAD0_opsz24.svg"
                            alt="overview"
                            width={20}
                            height={20}
                            className="mx-auto mr-2"
                        />
                        <Link href="/" className="text-gray-800 font-semibold hover:underline">
                            Overview
                        </Link>
                    </li>
                    <li className="flex bg-button rounded-full w-[122px] h-[41px] justify-center items-center">
                        <Image
                            src="/images/group_FILL0_wght300_GRAD0_opsz24.svg"
                            alt="patients"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        <Link href="/patients" className="text-gray-800 font-semibold hover:underline">
                            Patients
                        </Link>
                    </li>
                    <li className="flex  items-center">
                        <Image
                            src="/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
                            alt="schedule"
                            width={20}
                            height={20}
                            className="mx-auto mr-2"
                        />
                        <Link href="/schedule" className="text-gray-800 font-semibold hover:underline">
                            Schedule
                        </Link>
                    </li>
                    <li className="flex  items-center">
                        <Image
                            src="/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
                            alt="messages"
                            width={20}
                            height={20}
                            className="mx-auto mr-2"
                        />
                        <Link href="/messages" className="text-gray-800 font-semibold hover:underline">
                            Messages
                        </Link>
                    </li>
                    <li className="flex  items-center">
                        <Image
                            src="/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
                            alt="transactions"
                            width={20}
                            height={20}
                            className="mx-auto mr-2"
                        />
                        <Link href="/transactions" className="text-gray-800 font-semibold hover:underline">
                            Transactions
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Profile and Settings */}
            <div className="flex items-center space-x-4">
                <Image
                    src="/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" // Add the actual profile picture path here
                    alt="Doctor Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div className="text-right">
                    <h4 className="text-gray-800 font-semibold">Dr. Jose Simmons</h4>
                    <p className="text-sm text-gray-600">General Practitioner</p>
                </div>
                {/* Ellipsis Icon */}
                <Image
                    src="/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
                    alt="Settings"
                    width={4}
                    height={4}
                    className="ml-4"
                />
            </div>
        </header>
    );
}
