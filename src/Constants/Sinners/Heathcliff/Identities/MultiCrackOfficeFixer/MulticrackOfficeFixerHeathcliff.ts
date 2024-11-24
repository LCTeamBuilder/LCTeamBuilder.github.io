import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { MulticrackOfficeFixerHeathcliffSkill1 } from "./MulticrackOfficeFixerHeathcliffSkill1";
import { MulticrackOfficeFixerHeathcliffSkill2 } from "./MulticrackOfficeFixerHeathcliffSkill2";
import { MulticrackOfficeFixerHeathcliffSkill3 } from "./MulticrackOfficeFixerHeathcliffSkill3";
import { MulticrackOfficeFixerHeathcliffDefense } from "./MulticrackOfficeFixerHeathcliffDefense";

export class MulticrackOfficeFixerHeathcliff implements Identity{
    readonly Id: number = 10709;
    readonly Name: string = "MultiCrack Office Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 71;
    readonly HealthPerLevel: number = 2.55;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new MulticrackOfficeFixerHeathcliffSkill1, 
                                new MulticrackOfficeFixerHeathcliffSkill2, 
                                new MulticrackOfficeFixerHeathcliffSkill3, 
                                new MulticrackOfficeFixerHeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Charge Model L37",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br>"+
            "[Turn End] At 2+ [Charge], gain 1 [Haste] next turn<br>"+
            "[Turn End] At 3+ [Charge], gain 1 additional [Haste] and 1 [Clash Power Up] next turn",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Charging Module Installation",
            PassiveTypeEnum.Support,
            "#1 Deployed ally: Max [Charge] Count +5<br>"+
            "(When conditions are met, this effect will remain activated until the start of the next turn)",
            [{sin: SinEnum.Envy, amount: 7 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/MultiCrackOfficeFixer/10709gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/MultiCrackOfficeFixer/10709gacksunginfo.png";
}