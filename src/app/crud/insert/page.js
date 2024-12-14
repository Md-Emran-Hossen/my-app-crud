import InsertDataForm from '@/components/crud/InsertDataForm';
import LoadData from '@/components/crud/LoadData';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div>
                 <InsertDataForm />
            </div>
            <div>
                 <LoadData />
            </div>   
        </div>
     
    );
};

export default Page;