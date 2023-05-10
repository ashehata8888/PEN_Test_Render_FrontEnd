/* eslint-disable */

// import "./styles.css"

import React, { useEffect ,useState } from 'react'
// import usersData from './users.json'
import hTabs from './hTabs.module.css'
import { UserContext } from '../../components/BLS/Home';





function Reports () {

const [activityData , setActivityData]= useState([])
// const [userData , setUserData] = useState({})

const downloadFile = ({ data, fileName, fileType ,charset }) => {
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), // UTF-8 BOM
    "Text",data,{ type: "text/plain;charset=utf-8" }], { type: fileType })
  
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }
  
  
  // const exportToJson = e => {
  //   e.preventDefault()
  //   downloadFile({
  //     data: JSON.stringify(usersData.users),
  //     fileName: 'users.json',
  //     fileType: 'text/json',
  //   })
  // }
  
  
  
  
  
  const exportToCsv =  e => {
    e.preventDefault()
  
    // Headers for each column
  //   let headers = ['Id,Name,Surname,Age']

  // ,product_call_id
  // ,call_contact_id
  
    let headers = ['activity_id,session_created_at ,user_name,user_mail,bl_name,bl_manager_name,bu_name,activity_date_from ,activity_date_to ,activity_type,account_type ,account_name ,account_area ,purchase_method,comment,supplier_name,product_family ,item_group ,item_name,item_stock ,objective_name ,status_name,contact_person ,mobile_number,authority_name ,speciality_name,position_name']
  
    // Convert users data to a csv
    let usersCsv =  activityData.reduce((acc, user) => {
      const { activity_id,session_created_at ,user_name,user_mail,bl_name,bl_manager_name,bu_name,activity_date_from ,activity_date_to ,activity_type,account_type ,account_name ,account_area ,purchase_method,comment,supplier_name,product_family ,item_group ,item_name,item_stock ,objective_name ,status_name,contact_person ,mobile_number,authority_name ,speciality_name,position_name} = user
      acc.push([activity_id,session_created_at ,user_name,user_mail,bl_name,bl_manager_name,bu_name,activity_date_from ,activity_date_to ,activity_type,account_type ,account_name ,account_area ,purchase_method,comment,supplier_name,product_family ,item_group ,item_name,item_stock ,objective_name ,status_name,contact_person ,mobile_number,authority_name ,speciality_name,position_name].join(','))
      return acc
    }, [])


  
    downloadFile({
      data: [...headers, ...usersCsv].join('\n'),
      fileName: 'Activities_Report.csv',
      fileType: 'text/csv',
      // charset: 'utf-8'
  
    })
  }

 

// const userData = localStorage.getItem('userData');


  const userData = React.useContext(UserContext)
  const newUserData = JSON.parse(userData)


  console.log("user data from Reports is ", newUserData.id)

  // const ud = {"nemo" : 'Ahmed',newUserData}

  // console.log("user data from Reports is ", ud.newUserData["id"])

 
  // console.log("Real Object user Data ",JSON.stringify(userData)),
  // console.log("Real Object user Data ",JSON.parse(JSON.stringify(userData)))



  const userId = userData.id
  const token = userData.token


  // console.log("token from Reports component غغغغغ :", token)


    useEffect(() => {

     

     

   
       const fetchActivityData = async()=> {
              const response = await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/activities/superuser' , {
                method: 'GET',
                headers: new Headers({
                  Authorization: 'bearer ' + newUserData.token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                })
              })
              
              const newData = await response.json()
              console.log("fetched Data from Activity Report Component are >.............:",newData)
              setActivityData(newData)
            }
            fetchActivityData()
        
        
        }, [])






  return (
    <div className={hTabs.activityReportTable}>
      <h1>Download activity report</h1>
      <div className='actionBtns'>
        {/* <button type='button' onClick={exportToJson}>
          Export to JSON
        </button> */}
        <button type='button' onClick={exportToCsv} className={hTabs.activitDataExportBtn}>
          Export All Activities Data
        </button>
      </div>
      {/* <table >
        <thead>
          <tr>
          <th>	activity_id        	</th>
<th>	session_created_at 	</th>
<th>	user_name          	</th>
<th>	user_mail          	</th>
<th>	bl_name            	</th>
<th>	bl_manager_name    	</th>
<th>	bu_name            	</th>
<th>	activity_date_from 	</th>
<th>	activity_date_to   	</th>
<th>	activity_type      	</th>
<th>	account_type       	</th>
<th>	account_name       	</th>
<th>	account_area       	</th>
<th>	purchase_method    	</th>
<th>	comment            	</th>
<th>	product_call_id    	</th>
<th>	supplier_name      	</th>
<th>	product_family     	</th>
<th>	item_group         	</th>
<th>	item_name          	</th>
<th>	item_stock         	</th>
<th>	objective_name     	</th>
<th>	status_name        	</th>
<th>	call_contact_id    	</th>
<th>	contact_person     	</th>
<th>	mobile_number      	</th>
<th>	authority_name     	</th>
<th>	speciality_name    	</th>
<th>	position_name      	</th>

          </tr>
        </thead>
        <tbody>
          {usersData.users.map(user => {
            const { activity_id,session_created_at ,user_name,user_mail,bl_name,bl_manager_name,bu_name,activity_date_from ,activity_date_to ,activity_type,account_type ,account_name ,account_area ,purchase_method,comment,product_call_id,supplier_name,product_family ,item_group ,item_name,item_stock ,objective_name ,status_name,call_contact_id,contact_person ,mobile_number,authority_name ,speciality_name,position_name} = user
            return (
              <tr key={activity_id}>
                <td>{activity_id}</td>
<td>{session_created_at}</td>
<td>{user_name}</td>
<td>{user_mail}</td>
<td>{bl_name}</td>
<td>{bl_manager_name}</td>
<td>{bu_name}</td>
<td>{activity_date_from}</td>
<td>{activity_date_to}</td>
<td>{activity_type}</td>
<td>{account_type}</td>
<td>{account_name}</td>
<td>{account_area}</td>
<td>{purchase_method}</td>
<td>{comment}</td>
<td>{product_call_id}</td>
<td>{supplier_name}</td>
<td>{product_family}</td>
<td>{item_group}</td>
<td>{item_name}</td>
<td>{item_stock}</td>
<td>{objective_name}</td>
<td>{status_name}</td>
<td>{call_contact_id}</td>
<td>{contact_person}</td>
<td>{mobile_number}</td>
<td>{authority_name}</td>
<td>{speciality_name}</td>
<td>{position_name}</td>

              </tr>
            )
          })}
        </tbody>
      </table> */}
     
    </div>
  )
}

export default Reports