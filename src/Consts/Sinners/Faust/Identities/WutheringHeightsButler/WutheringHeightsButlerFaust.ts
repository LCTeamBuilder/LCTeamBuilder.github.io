import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { WutheringHeightsButlerFaustSkill1 } from "./WutheringHeightsButlerFaustSkill1";
import { WutheringHeightsButlerFaustSkill2 } from "./WutheringHeightsButlerFaustSkill2";
import { WutheringHeightsButlerFaustSkill3 } from "./WutheringHeightsButlerFaustSkill3";
import { WutheringHeightsButlerFaustDefense } from "./WutheringHeightsButlerFaustDefense";

export class WutheringHeightsButlerFaust implements IdentityBase{
    readonly Id: number = 10209;
    readonly Name: string = "Wuthering Heights Butler";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.7;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WutheringHeightsButlerFaustSkill1, 
                                new WutheringHeightsButlerFaustSkill2, 
                                new WutheringHeightsButlerFaustSkill3, 
                                new WutheringHeightsButlerFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Butler Style Response",
            PassiveTypeEnum.Combat,
            "- Clash Win: inflict 1 [Sinking] on target (3 times per turn)<br>"+
            "- If the target has [Echoes of the Manor], inflict 3 [Sinking] instead",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Anticipatory Training",
            PassiveTypeEnum.Support,
            "When 1 ally with the least SP hits an enemy with 5+ [Sinking], the ally heals 3 SP On Hit (4 times per turn)",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/WutheringHeightsButler/10209gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/WutheringHeightsButler/10209gacksunginfo.png";
}