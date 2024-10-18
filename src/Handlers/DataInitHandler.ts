import { Egos, Identities } from "../Consts/OtherConstants";
import { SinnerEnum } from "../Enums/SinnerEnum";
import { Sinner } from "../Models/Sinner";

export function InitDefaultSinners() : Array<Sinner>{
    return [new Sinner(SinnerEnum.YiSang, Identities.find(id => id.Id == 10101)!, [Egos.find(ego => ego.Id == 20101)!]),
            new Sinner(SinnerEnum.Faust, Identities.find(id => id.Id == 10201)!, [Egos.find(ego => ego.Id == 20201)!]),
            new Sinner(SinnerEnum.DonQuixote, Identities.find(id => id.Id == 10301)!, [Egos.find(ego => ego.Id == 20301)!]),
            new Sinner(SinnerEnum.Ryoshu, Identities.find(id => id.Id == 10401)!, [Egos.find(ego => ego.Id == 20401)!]),
            new Sinner(SinnerEnum.Meursault, Identities.find(id => id.Id == 10501)!, [Egos.find(ego => ego.Id == 20501)!]),
            new Sinner(SinnerEnum.HongLu, Identities.find(id => id.Id == 10601)!, [Egos.find(ego => ego.Id == 20601)!]),
            new Sinner(SinnerEnum.Heathcliff, Identities.find(id => id.Id == 10701)!, [Egos.find(ego => ego.Id == 20701)!]),
            new Sinner(SinnerEnum.Ishmael, Identities.find(id => id.Id == 10801)!, [Egos.find(ego => ego.Id == 20801)!]),
            new Sinner(SinnerEnum.Rodion, Identities.find(id => id.Id == 10901)!, [Egos.find(ego => ego.Id == 20901)!]),
            new Sinner(SinnerEnum.Sinclair, Identities.find(id => id.Id == 11001)!, [Egos.find(ego => ego.Id == 21001)!]),
            new Sinner(SinnerEnum.Outis, Identities.find(id => id.Id == 11101)!, [Egos.find(ego => ego.Id == 21101)!]),
            new Sinner(SinnerEnum.Gregor, Identities.find(id => id.Id == 11201)!, [Egos.find(ego => ego.Id == 21201)!])];
}