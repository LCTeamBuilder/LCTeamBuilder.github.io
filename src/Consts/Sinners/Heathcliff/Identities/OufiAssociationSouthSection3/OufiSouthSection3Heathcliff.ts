import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { OufiSouthSection3HeathcliffSkill1 } from "./OufiSouthSection3HeathcliffSkill1";
import { OufiSouthSection3HeathcliffSkill2 } from "./OufiSouthSection3HeathcliffSkill2";
import { OufiSouthSection3HeathcliffSkill3 } from "./OufiSouthSection3HeathcliffSkill3";
import { OufiSouthSection3HeathcliffDefense } from "./OufiSouthSection3HeathcliffDefense";

export class OufiSouthSection3Heathcliff implements IdentityBase{
    readonly Id: number = 10708;
    readonly Name: string = "Öufi South Section 3";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.73;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new OufiSouthSection3HeathcliffSkill1, 
                                new OufiSouthSection3HeathcliffSkill2, 
                                new OufiSouthSection3HeathcliffSkill3, 
                                new OufiSouthSection3HeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Grave Attendance",
            PassiveTypeEnum.Combat,
            "Deal +10% more damage for every 6 [Tremor] Potency on target (Max 30%)<br>"+
            "When converting [Tremor] into [Tremor - Decay] with this unit's Skill effects, trigger [Tremor Burst] on target",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Verify Obligation Fulfillment",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: +1 Clash Power to Skills that apply [Tremor] Potency or Count",
            [{sin: SinEnum.Pride, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/OufiAssociationSouthSection3/10708gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/OufiAssociationSouthSection3/10708gacksunginfo.png";
}