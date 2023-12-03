import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../src/components/navbar';
export async function getServerSideProps() {
    let initialData = [];

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        initialData = response.data;
    } catch (error) {
        console.error(error);
    }

    return { props: { initialData } };
}
const home = ({ initialData }) => {
    const [data, setData] = useState([]);
    const [fetchContent, setFetchContent] = useState(false);

    const fetchData = async () => {
        setData(initialData);
        setFetchContent(true);
    };
    return (
        <>
        <Navbar />
        <br></br>
        <button 
            className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={fetchData}
        >
            Fetch Content
        </button>
        <br></br>
        <br></br>
            <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Username</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Website</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Company</th>
                </tr>
            </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {fetchContent && data.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.website}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>
    );
};

export default home;
