import React from 'react'
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function PagedTable(props) {
    const data = props.data;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [displayData, setDisplayData] = useState(data);


    //Setting number of items per page and number of pages
    const itemsPerPage = props.itemsPerPage ? props.itemsPerPage : 10;
    const numPages = Math.ceil(data.length / itemsPerPage);


    //Effect for paging data
    useEffect(() => {
        var a = (currentPage-1)*itemsPerPage;
        var b = currentPage*itemsPerPage;
        setDisplayData(data.slice(a, b));
    }, [currentPage, data, itemsPerPage])


    //Button Handlers
    const handleNext = (e)=>{
        if(currentPage + 1 > numPages) return;
        else{
            setCurrentPage(currentPage+1);
        }
    }

    const handlePrev = (e)=>{
        if(currentPage - 1 < 1) return;
        else{
            setCurrentPage(currentPage-1);
        }
    }

    //Handling excluded properties
    const exclusions = props.exclusions ? props.exclusions : [];
    var propertyNames = Object.getOwnPropertyNames(data[0]);
    propertyNames = propertyNames.map(item=>{
        if(!exclusions.includes(item)){
            return item;
        }else{
            return null
        }
    }).filter(item=>item!==null)


    //Table Header
    function Header(){
        return (
            <thead>
                <tr>
                    {propertyNames.map(name=>(<th key={name} style={{width: `${100/propertyNames.length}%`}} scope="col">{ name }</th>))}
                </tr>
            </thead>
        )
    }

    //Table Body
    function Body(){
        return(
            <tbody>
                {displayData.map(item=>{
                    return (
                        <tr key={item[props.uniqueKeyProperty]}>
                            {propertyNames.map(name=>{
                                return (
                                    <td key={name.concat(item[props.uniqueKeyProperty])}>
                                        {item[name]}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}    
            </tbody>
        )
    }

    //Table Form
    function Form(){
        return (
            <form>
                <input type="button" value="prev" onClick={(e)=>handlePrev(e)}/>
                    Page {currentPage} of {numPages}
                <input type="button" value="next" onClick={(e)=>handleNext(e)}/>
            </form>
        )
    }

    return (
        <div>
            <table style={{textAlign: 'center'}} className="table table-striped table-bordered">
                <Header />
                <Body />
            </table>
            <Form/>
        </div>
    )
}

PagedTable.propTypes = {
    data: PropTypes.array.isRequired,
    uniqueKeyProperty: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number,
    exclusions: PropTypes.array
}

export default PagedTable;
