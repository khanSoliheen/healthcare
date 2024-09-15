import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Diagnosis, Diagnostic } from '../interfaces/Interface';
import Vitals from './Vitals';
import DiagnosticList from './DiagnosticList';
import { Fragment } from 'react';

interface DiagnosisHistoryProps {
    history: Diagnosis[];
    diagnostic_list: Diagnostic[];
}

export default function DiagnosisHistory({ history, diagnostic_list }: DiagnosisHistoryProps) {
    const data = history.map(({ month, year, blood_pressure }) => ({
        monthYear: `${month.substring(0, 3)}, ${year}`,
        systolic: blood_pressure.systolic.value,
        diastolic: blood_pressure.diastolic.value
    }));

    const CustomDot = (props: {fill: string, cx?: string, cy?: string}) => {
        const { cx, cy, fill } = props;
        return (
          <circle
            cx={cx}
            cy={cy}
            r={5}
            fill={fill}
            stroke="none"
            className="custom-dot"
          />
        );
      };

    return (
        <Fragment>
            <div className="p-6 bg-white rounded-lg shadow-lg  max-h-[1500px]">
                {/* Diagnosis Chart */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosis History</h3>
                <div className="bg-purple-50 p-6 rounded-lg shadow-md flex gap-6">
                    {/* Left Section: Line Chart */}
                    <div className="w-2/3">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-heading">Blood Pressure</h3>
                            <p className="text-sm text-gray-600">Last 6 months</p>
                        </div>
                        <LineChart width={500} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="monthYear" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="systolic" stroke="#E66FD2" strokeWidth={2.5} dot={<CustomDot fill="#E66FD2" />} />
                            <Line type="monotone" dataKey="diastolic" stroke="#8C6FE6" strokeWidth={2.5} dot={<CustomDot fill="#8C6FE6" />} />
                        </LineChart>
                    </div>

                    {/* Right Section: Systolic and Diastolic Information */}
                    <div className="w-1/3 flex flex-col justify-center ml-8">
                        <div className="mb-6">
                            <div className='flex items-center'>
                                <span className='rounded-full bg-systolic h-[14px] w-[14px]  mr-2'></span>
                                <h4 className="text-md font-semibold text-heading">Systolic</h4>
                            </div>
                            <p className="text-4xl font-bold text-heading">160</p>
                            <p className="text-sm text-gray-500">Higher than Average</p>
                        </div>
                        <hr className="my-4 border-gray-200" />
                        <div>
                            <div className='flex items-center'>
                                <span className='rounded-full bg-diastolic h-[14px] w-[14px]  mr-2'></span>
                                <h4 className="text-md font-semibold text-heading">Diastolic</h4>
                            </div>
                            <p className="text-4xl font-bold text-heading">78</p>
                            <p className="text-sm text-gray-500">Lower than Average</p>
                        </div>
                    </div>
                </div>
                {/* Vitals Section */}
                <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Current Vitals</h4>
                    <Vitals
                        vitals={{
                            respiratoryRate: history[0].respiratory_rate.value,
                            temperature: history[0].temperature.value,
                            heartRate: history[0].heart_rate.value,
                        }}
                    />
                </div>
                <div className="">
                    <DiagnosticList diagnostics={diagnostic_list} />
                </div>
            </div>
            {/* Diagnostic List Section */}
        </Fragment>
    );
}
