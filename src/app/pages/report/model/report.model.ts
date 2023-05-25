import { UserDetail } from "../../user/model/user.model"

export interface Report{
    id : string,
    caseName : string,
    complaintDate : Date,
    reporter : UserDetail,
    victims : Victim[],
    suspects : Suspect[],
    summaryComplaint : string,
    kindOfViolence : string,
    violenceForm : string,
    locationOfIncident : string,
    caseHistory : string,
    chancellorId : UserDetail,
    caseNumber : string
    caseStatus : string
    timeOfIncident : Date,
    victimSupportDocument : File
}

export interface Victim {
    userDetail : UserDetail,
    reporterRelationship : string,
    suspectRelationship : string,
    reportId?: string
}

export interface Suspect{
    userDetail : UserDetail,
    victimRelationship : string,
    reportId: string
}