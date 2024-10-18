import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { RosespannerWorkshopRepRodionSkill1 } from "./RosespannerWorkshopRepRodionSkill1";
import { RosespannerWorkshopRepRodionSkill2 } from "./RosespannerWorkshopRepRodionSkill2";
import { RosespannerWorkshopRepRodionSkill3 } from "./RosespannerWorkshopRepRodionSkill3";
import { RosespannerWorkshopRepRodionDefense } from "./RosespannerWorkshopRepRodionDefense";

export class RosespannerWorkshopRepRodion implements IdentityBase{
    readonly Id: number = 10905;
    readonly Name: string = "Rosespanner Workshop Rep";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.51;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RosespannerWorkshopRepRodionSkill1, 
                                new RosespannerWorkshopRepRodionSkill2, 
                                new RosespannerWorkshopRepRodionSkill3, 
                                new RosespannerWorkshopRepRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Here's to Getting Off Early~",
            PassiveTypeEnum.Combat,
            "When bursting [Tremor], spend 3 [Charge] Count to increase the Stagger Threshold raise by +40%., After bursting [Tremor], gain 1 [Haste] and 1 [Blunt DMG Up] next turn.",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Resonant Spanner",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Speed triggers [Tremor Burst], increase the Stagger Threshold raise by +20%.",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/RosespannerWorkshopRep/10905gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/RosespannerWorkshopRep/10905gacksunginfo.png";
}