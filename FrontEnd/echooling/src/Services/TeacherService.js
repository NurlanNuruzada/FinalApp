import { httpClient } from "../Utils/HttpClient";
export const getTeacherById = async (Id) => {
    return await httpClient.get(`/api/Teacher/id?id=${Id}`)
}  
export const ApprovedStaffId = async (StaffId,ApprovedUserId) => {
    try{
       await httpClient.put(`/api/Staff/approve/id?StaffId=${StaffId}&ApprovedUserId=${ApprovedUserId}`)
    }
    catch{
        await httpClient.put(`/api/Teacher/approveTeacher/id?teacherId=${StaffId}&ApprovePersonId=${ApprovedUserId}`);
    }
}