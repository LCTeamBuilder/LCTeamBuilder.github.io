import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { MulticrackOfficeRepFaustSkill1 } from "./MulticrackOfficeRepFaustSkill1";
import { MulticrackOfficeRepFaustSkill2 } from "./MulticrackOfficeRepFaustSkill2";
import { MulticrackOfficeRepFaustSkill3 } from "./MulticrackOfficeRepFaustSkill3";
import { MulticrackOfficeRepFaustDefense } from "./MulticrackOfficeRepFaustDefense";

export class MulticrackOfficeRepFaust implements Identity{
    readonly Id: number = 10210;
    readonly Name: string = "MultiCrack Office Rep";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new MulticrackOfficeRepFaustSkill1, 
                                new MulticrackOfficeRepFaustSkill2, 
                                new MulticrackOfficeRepFaustSkill3, 
                                new MulticrackOfficeRepFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Electrocurrent Dismantling",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br>"+
            "At 2+ [Charge] , deal +([Charge] x 3)% more damage (max 15%)<br>"+
            "- If the target is at less than 50% HP, deal +([Charge] x 5)% additionally increased damage (max 25%)<br><br>"+
            
            "[On Kill] This unit and 2 allies with the least [Charge] Count gains [Charge] Count equal to ([Charge] + 2) (max 5, prioritizes allies that consume or gain [Charge])",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Auxiliary Dismantling Current",
            PassiveTypeEnum.Support,
            "When 1 ally with the least [Charge] Count kills an enemy, the ally gains +3 [Charge] Count (once per turn, prioritizes allies that consume or gain [Charge])",
            [{sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/MultiCrackOfficeRep/10210gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/MultiCrackOfficeRep/10210gacksunginfo.png";
}