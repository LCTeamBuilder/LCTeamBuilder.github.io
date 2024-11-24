import { Egos, Identities } from "../Constants/Equipables";
import { OverlayEnum, SinEnum, SinnerEnum } from "../Enums/Index";
import { UpdateTeamSinDisplay } from "../Handlers/UIHandler";
import { Sinner } from "../Models/Index";

export function InitDefaultData(): void {
    globalThis.TeamData = InitDefaultSinners();
    globalThis.TeamSins = {
        [SinEnum.Wrath]: { Generated: 0, Used: 0 },
        [SinEnum.Lust]: { Generated: 0, Used: 0 },
        [SinEnum.Sloth]: { Generated: 0, Used: 0 },
        [SinEnum.Gluttony]: { Generated: 0, Used: 0 },
        [SinEnum.Gloom]: { Generated: 0, Used: 0 },
        [SinEnum.Pride]: { Generated: 0, Used: 0 },
        [SinEnum.Envy]: { Generated: 0, Used: 0 },
    }
    globalThis.DeployedTeamSins = {
        [SinEnum.Wrath]: { Generated: 0, Used: 0 },
        [SinEnum.Lust]: { Generated: 0, Used: 0 },
        [SinEnum.Sloth]: { Generated: 0, Used: 0 },
        [SinEnum.Gluttony]: { Generated: 0, Used: 0 },
        [SinEnum.Gloom]: { Generated: 0, Used: 0 },
        [SinEnum.Pride]: { Generated: 0, Used: 0 },
        [SinEnum.Envy]: { Generated: 0, Used: 0 },
    }
    globalThis.TeamOverlay = OverlayEnum.None;
    globalThis.TeamLink = window.location.href;
    globalThis.DeployedAmount = 0;

    globalThis.TeamData.forEach(sinner => {
        for (let i = 0; i < 3; i++) {  //add new sins
            globalThis.TeamSins[sinner.EquipedIdentity.Skills[i]!.Affinity].Generated += (3 - i);
        }
        sinner.EquipedEgos[0]?.Cost.forEach((cost) => {
            globalThis.TeamSins[cost.sin].Used += cost.amount;
        });
    })
    UpdateTeamSinDisplay(false);
}

function InitDefaultSinners(): Array<Sinner> {
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