import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../src/components/navbar';
import Main from '../src/components/Main';
import Buutton from '../src/components/Buutton';
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
        <Buutton fetchData={fetchData}/>
        <br></br>
        <br></br>
            <Main data={data} fetchContent={fetchContent}/></>
    );
};

export default home;
