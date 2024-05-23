import {
    Chart01,
    Chart02,
    Chart03,
    optionsChart01,
    optionsChart02,
    optionsChart03,
} from "@/data/dataCharts";
import { LastOrder } from "@/data/dataLastOrders";
import Chart from "react-google-charts";

export const Charts = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-2 w-full px-5'>
                    <Chart
                        chartType='LineChart'
                        width='100%'
                        height='400px'
                        data={Chart01}
                        options={optionsChart01}
                    />
                </div>
                <div className='px-5'>
                    <Chart
                        chartType='PieChart'
                        data={Chart02}
                        options={optionsChart02}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
                <div className='px-5'>
                    <Chart
                        chartType='AreaChart'
                        width='100%'
                        height='400px'
                        data={Chart03}
                        options={optionsChart03}
                    />
                </div>
                <div className='col-span-2 px-5'>
                    <table className='table bg-white text-black w-full text-center rounded-md'>
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className='w-4 py-2'>ID Pedido</th>
                                <th className='w-40'>Nome Cliente</th>
                                <th className='w-4'>Valor do Pedido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {LastOrder.map((item) => (
                                <tr className="border-b border-gray-500">
                                    <td key={item.id} className='py-2 px-4'>
                                        {item.id}
                                    </td>
                                    <td className='w-40'>{item.clientName}</td>
                                    <td className='w-4'>{item.valueOrder}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
