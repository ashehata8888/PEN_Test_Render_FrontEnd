/* eslint-disable */

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import hTabs from '../../components/BLS/hTabs.module.css';
import { UserContext } from '../../components/BLS/Home.jsx';
import { Navigate, useNavigate } from 'react-router-dom';



const columns = [
  { id: 'ActivityDate', label: 'Activity Date', align: 'center', width:'15%', color: 'aqua' , fontSize: '30pt'},
  { id: 'AccountName', label: 'Account Name', align: 'center', width:'25%'},
  {
    id: 'ActivityType',
    label: 'Activity Type',
    // minWidth: 50,
    align: 'center',
    width:'22.5%',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'PurchaseMethod',
    label: 'Purchase Method',
    // minWidth: 50,
    align: 'center',
    width:'22.5%',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'Action',
    label: 'Action',
    align: 'center',
    // minWidth: 50,
    width:'5%'


  },
];

export default function ActivityTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [newDataLength,setNewDataLength]= React.useState(0)
  const [bool,setBool] = React.useState(true)
  const [deleteCount,setDeleteCount] = React.useState(0)
  let [rows, setRows] = React.useState([])
  let [rowsN, setRowsN] = React.useState([])
  const [activityType,setActivityType] = React.useState('')
  const [newNumber,setNewNumber]=React.useState(7)

  const [activityId,setActivityId]=React.useState(0)

  let [tableCount , setTableCount]=React.useState(0)

  const [updateCount , setUpdateCount] = React.useState(0)
  
  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setBool(false)
    setPage(newPage);
   
  };

  const handleChangeRowsPerPage = (event) => {

    setBool(false)
    setRowsPerPage(+event.target.value);
    setPage(0);

  };

  
  const userData = JSON.parse(React.useContext(UserContext))
  // const userData = React.useContext(UserContext)

  const userId = userData.id

  
React.useEffect(() => {


   
    const fetchData = async () => {
    
      const response = await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/activities/history/' + userId, {
        method: 'GET',
        headers: new Headers({
          Authorization: 'bearer ' + userData.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
      
      const newData = await response.json()
      console.log("fetched Data are >.............:",newData)
      console.log("obj value is : ",newData.length)
      setNewDataLength(newData.length)
       
        newData.map((obj,inx)=>{
          

          let myDate = new Date(`${obj.activity_date_from}`);
myDate.setDate(myDate.getDate() + parseInt(0));

let activityDateN = myDate.getFullYear( ) + '/' + (myDate.getMonth( ) + 1) + '/' + myDate.getDate( ) ;
console.log("my Date is ..........:", activityDateN);

      let templeteRow = {ActivityDate:`${activityDateN}` , AccountName:`${obj.account_name}`, ActivityType:`${obj.activity_type}` , PurchaseMethod:`${obj.purchase_method}`,Actions:obj.id}
     if(rows.length < newData.length){
      rows.unshift(templeteRow)

     }else if(rows.length < newData.length - 1){
      rows.unshift(templeteRow)
     } 
       
       
        })

      if (rows.length === newData.length){
        setBool(false)
      }

  }

  if(rows.length === 0 ){
  fetchData()
}

if(deleteCount > 0){
  fetchData() 
}

if(updateCount > 0){
  console.log("update count is ", updateCount)
  fetchData()
}
  
  }, [])


  React.useEffect(() => {


   
    const deleteActivity = async () => {
      console.log("delete UseEffect was called and actvity id is..",activityId)





      // if(activityType == "Field Visit" ||
      // activityType == "Joint Visit" ||
      // activityType == "Group Meeting" ||
      // activityType == "Workshop" ||
      // activityType == "Live Surgery" 
      // ){

      await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/call_contacts/'+ activityId, {
        method: 'DELETE',
        headers: new Headers({
          Authorization: 'bearer ' + userData.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
     }).then(async(response) => {
        const resC = await response.json()
        console.log("res of call_contacts are", resC)

           await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/call_products/'+ activityId, {
               method: 'DELETE',
        headers: new Headers({
          Authorization: 'bearer ' + userData.token,
          'Content-Type': 'application/x-www-form-urlencoded'
              })
            
           }).then(async (response) => {
              const resP = await response.json()
             
              console.log("res of call_products are", resP)

              const responseD = await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/activities/' + activityId, {
                method: 'DELETE',
                headers: new Headers({
                  Authorization: 'bearer ' + userData.token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                })
              })
              
              const newDataD = await responseD.json()
              console.log("response from Delete Request ...:",newDataD)
              
            }).then(()=>{
              updateActivityTable()
            })
       

        })



      // }else{

      //   const responseD = await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/activities/' + activityId, {
      //           method: 'DELETE',
      //           headers: new Headers({
      //             Authorization: 'bearer ' + userData.token,
      //             'Content-Type': 'application/x-www-form-urlencoded'
      //           })
      //         })
              
      //         const newDataA = await responseD.json()
      //         console.log("response from Delete Request ...:",newDataA)

      // }

     ///////////////////////////////////////////////////////////////////////////
    //  navigator('/')



    // window.location.reload(),{}
    

    // navigate("https://pen-test.onrender.com/")

    //  setRowsPerPage(14)
}


    if(deleteCount > 0){
      deleteActivity()
    
     

    }
   
  }, [deleteCount])


  const deleteActivityBtn =(event,ActId,ActType)=>{
    event.preventDefault()
    console.log("Delete Activity button for Activity id No "+ ActId + "was clicked")
    setActivityId(ActId)
    setActivityType(ActType)
  
    setDeleteCount(current=>current + 1)

     



  }
const updateActivityTable = ()=>{

  
  setUpdateCount(current=>current + 1)
  
}
  
console.log("rows after reordering are :",rows)
if(deleteCount >= 0 && rows.length > 0){
  return (
    <Paper sx={{ width: '94.5%', height: '170vh',  marginTop: '4%' }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table className={hTabs.activityTableContainer} >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , backgroundColor:'aqua' , fontSize:'15pt' , position: 'sticky' , top:'0'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={hTabs.ActivityTable}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                  style={{overflow: 'auto'}}
                  hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column ,indx) => {
                      const value = row[column.id];
                      return (
                        <TableCell   
                        style={{ fontSize:'14pt', width: column.width}}
                        key={column.id} align={column.align}>
                          {value} {column.id == 'Action' && <button className={hTabs.activityTableDeleteBtn} onClick={(event)=>deleteActivityBtn(event,row.Actions,row.ActivityType)}>Delete</button>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[7,14, 30, 90]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>




  )}
}