

interface mechanicTermInterface
{
    flyTermId: number;
    mechanicSurveyId: number;
   
}

export class mechanicTerm implements mechanicTermInterface
{
    flyTermId: number;
    mechanicSurveyId: number;



constructor(obj: mechanicTermInterface)
{
    this.flyTermId = obj.flyTermId;
    this.mechanicSurveyId  = obj.mechanicSurveyId;
}

}

