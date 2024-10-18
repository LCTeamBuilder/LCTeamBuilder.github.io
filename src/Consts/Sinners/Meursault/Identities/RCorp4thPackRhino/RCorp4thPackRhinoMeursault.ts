import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { RCorp4thPackRhinoMeursaultSkill1 } from "./RCorp4thPackRhinoMeursaultSkill1";
import { RCorp4thPackRhinoMeursaultSkill2 } from "./RCorp4thPackRhinoMeursaultSkill2";
import { RCorp4thPackRhinoMeursaultSkill3 } from "./RCorp4thPackRhinoMeursaultSkill3";
import { RCorp4thPackRhinoMeursaultDefense } from "./RCorp4thPackRhinoMeursaultDefense";

export class RCorp4thPackRhinoMeursault implements IdentityBase{
    readonly Id: number = 10506;
    readonly Name: string = "R Corp. 4th Pack Rhino";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 95;
    readonly HealthPerLevel: number = 3;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [40];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RCorp4thPackRhinoMeursaultSkill1, 
                                new RCorp4thPackRhinoMeursaultSkill2, 
                                new RCorp4thPackRhinoMeursaultSkill3, 
                                new RCorp4thPackRhinoMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Activate rrR-#4 Suit Pressurization",
            PassiveTypeEnum.Combat,
            "At the end of the turn, gain +2 Max Speed per 5 [Charge] Count next turn. (Max 6)<br>"+
            "At the start of the turn, if at 5+ [Charge] Count, gain 3 [Aggro] to this unit's rightmost slot.",
            [{sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Maneuver Training",
            PassiveTypeEnum.Support,
            "At the end of the turn, 1 ally with the highest [Charge] Count gains Max Speed +1 (Capped at 3) per 5 [Charge] Count next turn.",
            [{sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/RCorp4thPackRhino/10506gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/RCorp4thPackRhino/10506gacksunginfo.png";
}