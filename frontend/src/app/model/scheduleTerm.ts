

interface scheduleTermInterface
{
    flyTermId: number;
    pilotId: number;
    pilotSurveyId: number;
}

export class scheduleTerm implements scheduleTermInterface
{
    flyTermId: number;
    pilotId: number;
    pilotSurveyId: number;



constructor(obj: scheduleTermInterface)
{
    this.flyTermId = obj.flyTermId;
    this.pilotId = obj.pilotId;
    this.pilotSurveyId = obj.pilotSurveyId;
}

}

