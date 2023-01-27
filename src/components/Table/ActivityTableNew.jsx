/* eslint-disable */

import { Component , React } from 'react';
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
import { withRouter} from './withRouter'


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




// useContext(UserContext)
  
//   const userData = JSON.parse(uContext)

  // const userData = React.useContext(UserContext)

  // const userId = userData.id

  // console.log()



class ActivityTableNew extends Component {
  // static contextType = UserContext
  // userData = JSON.stringify(this.context)
  // console.log(this.props.uContext())
  constructor(props) {
    super(props);
    this.state={
      userData: JSON.parse(this.props.uContext),
      delBtnPressed:false,
      activityId: 0,
      selectedRow:{},
      token : "userData.token",
      activityType:'',
      rowsPerPage:7,
      page : 0,
      rows:[]
    }
  }
    
  //  uContext=React.useContext(UserContext)
  
  //  userData = JSON.parse(uContext)



  fetchData = async () => {
    
    const response = await fetch('http://localhost:7000/api/activities/history/' + this.state.userData.id, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'bearer ' + this.state.userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
    
    const newData = await response.json()
    console.log("fetched Data are >.............:",newData)
    console.log("obj value is : ",newData.length)

     
      newData.map((obj,inx)=>{
        // clone
        // let newRows = [...this.state.rows]
        
        // edit
        let myDate = new Date(`${obj.activity_date_from}`);
myDate.setDate(myDate.getDate() + parseInt(0));

let activityDateN = myDate.getFullYear( ) + '/' + (myDate.getMonth( ) + 1) + '/' + myDate.getDate( ) ;
console.log("my Date is ..........:", activityDateN);

    let templeteRow = {ActivityDate:`${activityDateN}` , AccountName:`${obj.account_name}`, ActivityType:`${obj.activity_type}` , PurchaseMethod:`${obj.purchase_method}`,Actions:obj.id}
   if(this.state.rows.length < newData.length){
     
    //  newRows = [newRows , this.state.rows.unshift(templeteRow)]

    // update
    // this.setState({rows:newRows})

    this.setState({rows:[templeteRow,...this.state.rows,this.state.rows.unshift(templeteRow)]})


   }
  //  else if(this.state.rows.length < newData.length ){
  //   // rows.unshift(templeteRow)
  //  } 
     
     
      })

      // if(this.state.rows.length + 1 < newData.length ){
      // this.setState({rows:this.state.rows.filter( p => p !== this.state.rows[this.state.rows.length -1] )})
      // }
}




  componentDidMount(){
//     // this.fetchData()
//     // console.log(this.userData)
//     console.log("user data from this context prop .........: ",this.state.userData
//     )
//     const fetchData = async () => {
    
//       const response = await fetch('http://localhost:7000/api/activities/history/' + this.state.userData.id, {
//         method: 'GET',
//         headers: new Headers({
//           Authorization: 'bearer ' + this.state.userData.token,
//           'Content-Type': 'application/x-www-form-urlencoded'
//         })
//       })
      
//       const newData = await response.json()
//       console.log("fetched Data are >.............:",newData)
//       console.log("obj value is : ",newData.length)
  
       
//         newData.map((obj,inx)=>{
          

//           let myDate = new Date(`${obj.activity_date_from}`);
// myDate.setDate(myDate.getDate() + parseInt(0));

// let activityDateN = myDate.getFullYear( ) + '/' + (myDate.getMonth( ) + 1) + '/' + myDate.getDate( ) ;
// console.log("my Date is ..........:", activityDateN);

//       let templeteRow = {ActivityDate:`${activityDateN}` , AccountName:`${obj.account_name}`, ActivityType:`${obj.activity_type}` , PurchaseMethod:`${obj.purchase_method}`,Actions:obj.id}
//      if(this.state.rows.length < newData.length){
//       this.setState({rows:[...this.state.rows,this.state.rows.unshift(templeteRow)]})

//      }else if(this.state.rows.length < newData.length - 1){
//       rows.unshift(templeteRow)
//      } 
       
       
//         })

    

//   }

  if(this.state.rows.length === 0 ){
  this.fetchData()
  
}



  

  }


  componentDidUpdate(prevProps, prevState) {
    console.log("prev state is ",prevState.rows)
    console.log("this state is ",this.state.rows)
    // check whether person has changed
    if (prevState.rows !== this.state.rows) {
    // fetch if the person has changed
      this.fetchData();
      
    }
    if (this.state.rows.length - prevState.rows.length == 1 ) {
      // fetch if the person has changed
      // this.setState({rows:this.state.rows.filter( p => p !== this.state.rows[this.state.rows.length -1] )})
        this.setState({rows:this.state.rows.slice(0 , this.state.rows.length - 1)})
      }

      // if(this.state.delBtnPressed != prevState.delBtnPressed && this.state.activityId > 0){
      //   console.log("delBtnPressed condition and activity id is ,",this.state.activityId)
      //   console.log("select row afte deleted button pressed",this.state.selectedRow)
      
        // const rowsAfterDel = this.state.rows.filter( p => p.id !== this.state.activityId )

        // const index = this.state.rows.indexOf(this.state.selectedRow)
        // const rowsAfterDel = this.state.rows.splice(index, 1)
        // this.setState({rows:rowsAfterDel})


        // this.setState({rows:this.state.rows.slice(0 , this.state.rows.length - 1)})
        // this.deleteActivityBtn()
        // this.setState({delBtnPressed:false})
        // this.fetchData();
        // .splice(2, 1);


      // }


    
  }

  componentWillUnmount(){
    if (this.state.delBtnPressed){
    const index = this.state.rows.indexOf(this.state.selectedRow)
    const rowsAfterDel = this.state.rows.splice(index, 1)
    this.setState({rows:rowsAfterDel})
  }
  }

   handleChangePage = (event, newPage) => {

   this.setState({page : newPage})
  };

   handleChangeRowsPerPage = (event) => {




    this.setState({
      rowsPerPage: +event.target.value,
      page : 0
    })

  };


    deleteActivityBtn =(event,ActId,ActType,row)=>{
    event.preventDefault()
    console.log("Delete Activity button for Activity id No "+ ActId + "was clicked")
    this.setState({activityId :ActId ,
      activityType : ActType,
      delBtnPressed:true,
      selectedRow: row
    })


    // const deleteActivity = async () => {
    //   console.log("delete UseEffect was called and actvity id is..",this.state.activityId)
    const deleteActivity = async () => {

  await fetch('http://localhost:7000/api/call_contacts/'+ ActId, {
        method: 'DELETE',
        headers: new Headers({
          Authorization: 'bearer ' + this.state.userData.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
     }).then(async(response) => {
        const resC = await response.json()
        console.log("res of call_contacts are", resC)

           await fetch('http://localhost:7000/api/call_products/'+ ActId, {
               method: 'DELETE',
        headers: new Headers({
          Authorization: 'bearer ' + this.state.userData.token,
          'Content-Type': 'application/x-www-form-urlencoded'
              })
            
           }).then(async (response) => {
              const resP = await response.json()
             
              console.log("res of call_products are", resP)

              const responseD = await fetch('http://localhost:7000/api/activities/' + ActId, {
                method: 'DELETE',
                headers: new Headers({
                  Authorization: 'bearer ' + this.state.userData.token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                })
              })
              
              const newDataD = await responseD.json()
              console.log("response from Delete Request ...:",newDataD)
              
            }).then(()=>{
    
            console.log("the activity deleted successfully")

              
        
            
            })
       
              
            })
          }
          deleteActivity()
            
  }


  render() { 

 
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
                {this.state.rows
                  .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
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
                              {value} {column.id == 'Action' && <button className={hTabs.activityTableDeleteBtn} onClick={(event)=>this.deleteActivityBtn(event,row.Actions,row.ActivityType,row)}>Delete</button>}
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
            count={this.state.rows.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onPageChange={this.handleChangePage}
            onRowsPerPageChange={this.handleChangeRowsPerPage}
          />
        </Paper>
    
    
    
    
      )
     
  }
}
 
export default withRouter(ActivityTableNew);