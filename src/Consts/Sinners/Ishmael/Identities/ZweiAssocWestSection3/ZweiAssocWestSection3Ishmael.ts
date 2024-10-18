import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { ZweiAssocWestSection3IshmaelSkill1 } from "./ZweiAssocWestSection3IshmaelSkill1";
import { ZweiAssocWestSection3IshmaelSkill2 } from "./ZweiAssocWestSection3IshmaelSkill2";
import { ZweiAssocWestSection3IshmaelSkill3 } from "./ZweiAssocWestSection3IshmaelSkill3";
import { ZweiAssocWestSection3IshmaelDefense } from "./ZweiAssocWestSection3IshmaelDefense";

export class ZweiAssocWestSection3Ishmael implements IdentityBase{
    readonly Id: number = 10810;
    readonly Name: string = "Zwei Assoc. West Section 3";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 93;
    readonly HealthPerLevel: number = 3.21;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [55];
    readonly DefenseLevel: number = +1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 2;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new ZweiAssocWestSection3IshmaelSkill1, 
                                new ZweiAssocWestSection3IshmaelSkill2, 
                                new ZweiAssocWestSection3IshmaelSkill3, 
                                new ZweiAssocWestSection3IshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Shock-nullifying Greatsword",
            PassiveTypeEnum.Combat,
            "At Combat Start, gain [Defense Level Up] equal to [Tremor] Count on self (max 5)<br>"+
            "- If this unit is in [Defensive Stance], double the amount of [Defense Level Up] gained from the above effect.",
            [{sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("mergency Protection",
            PassiveTypeEnum.Support,
            "At Combat Start, compare each Identity's current HP to their HP at the start of the previous turn. Then, apply 2 Defense Level Up to the Identity with the greatest disparity of HP values between turns.",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/ZweiAssocWestSection3/10810gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/ZweiAssocWestSection3/10810gacksunginfo.png";
}