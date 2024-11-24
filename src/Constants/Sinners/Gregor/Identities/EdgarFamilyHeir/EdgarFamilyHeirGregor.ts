import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { EdgarFamilyHeirGregorSkill1 } from "./EdgarFamilyHeirGregorSkill1";
import { EdgarFamilyHeirGregorSkill2 } from "./EdgarFamilyHeirGregorSkill2";
import { EdgarFamilyHeirGregorSkill3 } from "./EdgarFamilyHeirGregorSkill3";
import { EdgarFamilyHeirGregorDefense } from "./EdgarFamilyHeirGregorDefense";

export class EdgarFamilyHeirGregor implements Identity{
    readonly Id: number = 11209;
    readonly Name: string = "Edgar Family Heir";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new EdgarFamilyHeirGregorSkill1, 
                                new EdgarFamilyHeirGregorSkill2, 
                                new EdgarFamilyHeirGregorSkill3, 
                                new EdgarFamilyHeirGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Endless Nightmares",
            PassiveTypeEnum.Combat,
            "Combat Start: gain 1 [Damage Up] and 1 [Fragile] for every 5 SP difference between Combat Start and last Turn Start (max 5)<br>"+
            "- Deal +2% more damage for every [Sinking] Potency on target (max 40%)",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Suffering",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the least SP loses 5 SP, then gains 1 [Gloom DMG Up]",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/EdgarFamilyHeir/11209gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/EdgarFamilyHeir/11209gacksunginfo.png";
}