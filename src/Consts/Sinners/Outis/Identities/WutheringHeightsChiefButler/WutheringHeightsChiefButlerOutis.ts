import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { WutheringHeightsChiefButlerOutisSkill1 } from "./WutheringHeightsChiefButlerOutisSkill1";
import { WutheringHeightsChiefButlerOutisSkill2 } from "./WutheringHeightsChiefButlerOutisSkill2";
import { WutheringHeightsChiefButlerOutisSkill3 } from "./WutheringHeightsChiefButlerOutisSkill3";
import { WutheringHeightsChiefButlerOutisDefense } from "./WutheringHeightsChiefButlerOutisDefense";

export class WutheringHeightsChiefButlerOutis implements IdentityBase{
    readonly Id: number = 11108;
    readonly Name: string = "Wuthering Heights Chief Butler";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WutheringHeightsChiefButlerOutisSkill1, 
                                new WutheringHeightsChiefButlerOutisSkill2, 
                                new WutheringHeightsChiefButlerOutisSkill3, 
                                new WutheringHeightsChiefButlerOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("The Mistress' Voice...!",
            PassiveTypeEnum.Combat,
            "- When clashing against targets with less than 0 SP, Clash Power +1 and deal +20% more damage<br>"+
            "- Deal +30% more damage against targets with [Echoes of the Manor]<br>"+
            "- When winning a Clash without losing a single Coin, heal 10 SP. If this unit is already at max SP, gain 3 [Offense Level Up] next turn (2 times per turn)",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Butler Training",
            PassiveTypeEnum.Support,
            "Clash Power +1 to 1 ally with the most SP when clashing against targets with less than -25 SP",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/WutheringHeightsChiefButler/11108gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/WutheringHeightsChiefButler/11108gacksunginfo.png";
}