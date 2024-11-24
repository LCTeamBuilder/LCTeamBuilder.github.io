import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { CinqAssocWestSection3MeursaultSkill1 } from "./CinqAssocWestSection3MeursaultSkill1";
import { CinqAssocWestSection3MeursaultSkill2 } from "./CinqAssocWestSection3MeursaultSkill2";
import { CinqAssocWestSection3MeursaultSkill3 } from "./CinqAssocWestSection3MeursaultSkill3";
import { CinqAssocWestSection3MeursaultDefense } from "./CinqAssocWestSection3MeursaultDefense";

export class CinqAssocWestSection3Meursault implements Identity{
    readonly Id: number = 10511;
    readonly Name: string = "Cinq Assoc. West Section 3";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new CinqAssocWestSection3MeursaultSkill1, 
                                new CinqAssocWestSection3MeursaultSkill2, 
                                new CinqAssocWestSection3MeursaultSkill3, 
                                new CinqAssocWestSection3MeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Duel Livestream",
            PassiveTypeEnum.Combat,
            "Gain 1 [Haste] next turn for every 3 [Poise] Potency on self at Turn End (max 2)<br>"+
            "On Hit with base Attack Skills: on the Slot it hit last, inflict [Focused Attack] - Meursault next turn. (once per Skill)<br>"+
            "If this unit attacked the Slot with [Focused Attack] - Meursault and defeated its owner or broke the Part, heal 7 SP",
            [{sin: SinEnum.Pride, amount: 2 },
            {sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("One Step Ahead",
            PassiveTypeEnum.Support,
            "The fastest ally, on Clash Win, gains 1 [Haste] next turn (2 times per turn)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/CinqAssocWestSection3/10511gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/CinqAssocWestSection3/10511gacksunginfo.png";
}