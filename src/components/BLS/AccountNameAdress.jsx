import React, { useState, useContext, useEffect, useRef } from "react";

import { UserContext } from "./Home";

import hTabs from "./hTabs.module.css";

import {useSelector,useDispatch} from "react-redux";
import 
{updateUser_Id	,
  updateBl_Id	,
  updateBu_Id	, 
  updateAccount_Type_Id	,
  updateAccount_Id,
  updateAccount_Name,
  updateAccount_Area
} from "../../store/index" 


export default function AccountNameAdress() {

  const globalState = useSelector((state)=> state)
  const dispatch = useDispatch()

  const [accountName, setAccountName] = useState([]);
 

  const [accountType, setAccountType] = useState(globalState.marketPotentials.account_type_id);
  const [accountId, setAccountId] = useState(globalState.marketPotentials.account_id);




  const [alret, setAlert] = useState("");
  const [errActivitySelectType, setErrActivitySelectType] = useState(false);
  const [activityTypeValue, setActivityTypeValue] = useState(0);
  const [errAccountType, setErrAccountType] = useState(false);
  const [errAccountName, setErrAccountName] = useState(false);

  const [accountNameValue, setAccountNameValue] = useState("");
  const [clickedAccountName, setclickedAccountName] = useState("");
  const [mainIndex, setMainIndex] = useState(0);


  // let defaultAccountArea = accountName[accountId]["account_area"]

  const [accountArea, setAccountArea] = useState("");

  
  const accountNameRef = useRef(null);

  const userData = JSON.parse(useContext(UserContext));
  const key = userData.id;
  console.log(userData);



  const testDispatch = ()=>dispatch(updateUser_Id(key))
  testDispatch()

  dispatch(updateBl_Id(userData.bl1_id))
  dispatch(updateBu_Id(userData.bu_id))
  updateBl_Id	,
  updateBu_Id	, 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://https://backend-ahmed-shehata-crm.onrender.com/api/accounts/names/" + key,
        {
          method: "GET",
          headers: new Headers({
            Authorization: "bearer " + userData.token,
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        }
      );
      const newData = await response.json();
      setAccountName(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  const onClickElementFun = (e, objAccountName, i, mapIndex, mainIndex) => {
    e.preventDefault();
    onSearch(objAccountName);

    const index = accountName.findIndex((obj) => obj.id == i);

    console.log("index of maping the :", index);

   

    // console.log('index of Map is ', mapIndex)
    // console.log("index of account name itself : ",i)
    // console.log("main Index is ",mainIndex)

    // console.log("account name index for area Test ", accountName[3].id)

    setAccountArea(accountName[index].account_area);
    dispatch(updateAccount_Area(accountName[index].account_area))

    setAccountId(accountName[index].id);

    dispatch(updateAccount_Id(accountName[index].id))

    setErrAccountName(false);
  };

  const onSearch = (searchTerm) => {
    setAccountNameValue(searchTerm);
    dispatch(updateAccount_Name(searchTerm))
    // setclickedAccountName(searchTerm)
    // our api to fetch the search result
    console.log("search ", searchTerm);

    // const index = accountName.findIndex(async (obj) => await obj.account_name == accountNameValue)

    // console.log('index is ', index)

    // setAccountArea(accountName[index].account_area)
  };

  const accountNameInputOnChange = (event) => {
    setAccountNameValue(event.target.value);


    // const index = accountName.findIndex((object) => {
    //   // console.log("account name from inside findIndex Method is :",accountNameValue)
    //   return object.id == accountNameValue

    //   // selectedValue
    // })

    // const normalIndex = (e) => e == 8;
  };

  const accountNamehandleChange = (event) => {
    // (event.target.value)
    // setAccountArea = (event){
      // setAccountNameValue(event.target.value);
    const selectedValue = event.target.value;
    // setAccountId(event.target.value);
    setErrAccountName(false);

    console.log("account name value selected",selectedValue)

    //
    //
    //
    //
    // }
    // const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

    const index = accountName.findIndex((object) => {
      // console.log("account name from inside findIndex Method is :",accountNameValue)
      return object.id == accountNameValue;

      // selectedValue
    });

    console.log("index is ", index);

    dispatch(updateAccount_Id(index))

    setAccountArea(accountName[index].account_area);
    const accountAreaVlue = accountName[globalState.account_id].account_area
    accountArea(accountAreaVlue)
    dispatch(updateAccount_Area(accountAreaVlue))
    console.log("accountAreaVlue is ");
  };

  


  const accountNameOnClick = (event) => {};

  const accountTypeOnChange = (event) => {
    setAccountType(event.target.value);
    dispatch(updateAccount_Type_Id(event.target.value))
    setErrAccountType(false);
  };
  return (
    <>
    {/* <div>User ID is : {globalState.marketPotentials.user_id}</div>
    <div>BL ID is : {globalState.marketPotentials.bl_id}</div>
    <div>BU ID is : {globalState.marketPotentials.bu_id}</div>
    <div>ِAccouin Type ID is : {globalState.marketPotentials.account_type_id}</div>
    <div>ِAccouin Name ID is : {globalState.marketPotentials.account_id}</div>
    <div>ِAccouin Name Vlaue is : {globalState.marketPotentials.account_name}</div>
    <div>ِAccouin Name Area is : {globalState.marketPotentials.account_area}</div>
    <div>Neuro_Surgery Number is : {globalState.marketPotentials.neuro_surgery}</div>
    <div> Gynecology No./Month is : {globalState.marketPotentials.gynecology}</div>
    <div> Urology  is : {globalState.marketPotentials.urology}</div>
      */}
     
      <br />

      <label className={`${hTabs.labels} `}>Account Type</label>
      <select
        // {...displayAccountsData === hTabs.displayActivityData ? "required" : console.log(displayAccountsData) }
        // ref={account_type_id}
        className={`${
          errAccountType ? hTabs.dropDownErr : hTabs.dropDownList
        } `}
        value={accountType}
        id="activityType"
        name="activityType"
        onChange={accountTypeOnChange}
      >
        <option value="0" disabled selected hidden>
          Select Type
        </option>
        <option value="1">Hospitals</option>
        <option value="2">Medical Shops</option>
        <option value="3">Pharmacy Chains</option>
        <option value="4">Pharmacy Individual</option>
        <option value="5">Private Customer</option>
        <option value="6">Distributor</option>
      </select>

      <label className={`${hTabs.labels}`}>Account Name</label>

      <input
        className={`${
          errAccountName ? hTabs.dropDownErr : hTabs.inputNameList
        } `}
        type="text"
        value={globalState.marketPotentials.account_name}
        // accountNameInputOnChange
        onChange={accountNameInputOnChange}
        onClick={accountNameOnClick}
        ref={accountNameRef}
      />

      <div className={`${hTabs.accountNamesdropDownList}`}>
        {accountName
          .filter((item, i) => {
            const searchTerm = accountNameValue.toLowerCase();

            const fullName = item.account_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          // .slice(0, 15)
          .map((obj, index) => {
            return (
              <div
                onClick={(e) =>
                  onClickElementFun(
                    e,
                    obj.account_name,
                    obj.id,
                    index,
                    mainIndex
                  )
                }
                className={hTabs.dropdownDiv}
                key={obj.id}
              >
                {obj.account_name}
              </div>
            );
          })}
      </div>

      <label className={`${hTabs.adressLabel} `}>
        Account Address / Branch
      </label>
      <input
        disabled
        className={`${hTabs.adress_text_Box}`}
        type="text"
        value={globalState.marketPotentials.account_area}
    
      ></input>
      <br />
    </>
  );
}
