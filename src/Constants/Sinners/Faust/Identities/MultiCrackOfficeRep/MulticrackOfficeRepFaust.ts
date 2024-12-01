import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { MulticrackOfficeRepFaustDefense } from "./MulticrackOfficeRepFaustDefense";
import { MulticrackOfficeRepFaustSkill1 } from "./MulticrackOfficeRepFaustSkill1";
import { MulticrackOfficeRepFaustSkill2 } from "./MulticrackOfficeRepFaustSkill2";
import { MulticrackOfficeRepFaustSkill3 } from "./MulticrackOfficeRepFaustSkill3";

export const MulticrackOfficeRepFaust: Identity = {
    Id: 10210,
    Name: "MultiCrack Office Rep",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MulticrackOfficeRepFaustSkill1, 
            MulticrackOfficeRepFaustSkill2, 
            MulticrackOfficeRepFaustSkill3, 
            MulticrackOfficeRepFaustDefense],
    Passives: [
        new Passive("Electrocurrent Dismantling",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br>"+
            "At 2+ [Charge] , deal +([Charge] x 3)% more damage (max 15%)<br>"+
            "- If the target is at less than 50% HP, deal +([Charge] x 5)% additionally increased damage (max 25%)<br><br>"+
            
            "[On Kill] This unit and 2 allies with the least [Charge] Count gains [Charge] Count equal to ([Charge] + 2) (max 5, prioritizes allies that consume or gain [Charge])",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Auxiliary Dismantling Current",
            PassiveTypeEnum.Support,
            "When 1 ally with the least [Charge] Count kills an enemy, the ally gains +3 [Charge] Count (once per turn, prioritizes allies that consume or gain [Charge])",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/MultiCrackOfficeRep/10210gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/MultiCrackOfficeRep/10210gacksunginfo.png"
}