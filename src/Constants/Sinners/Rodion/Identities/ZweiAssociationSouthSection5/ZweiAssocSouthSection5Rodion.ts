import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ZweiAssocSouthSection5RodionSkill1 } from "./ZweiAssocSouthSection5RodionSkill1";
import { ZweiAssocSouthSection5RodionSkill2 } from "./ZweiAssocSouthSection5RodionSkill2";
import { ZweiAssocSouthSection5RodionSkill3 } from "./ZweiAssocSouthSection5RodionSkill3";
import { ZweiAssocSouthSection5RodionDefense } from "./ZweiAssocSouthSection5RodionDefense";

export class ZweiAssocSouthSection5Rodion implements Identity{
    readonly Id: number = 10906;
    readonly Name: string = "Zwei Assoc. South Section 5";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 88;
    readonly HealthPerLevel: number = 3.05;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 4;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ZweiAssocSouthSection5RodionSkill1, 
                                new ZweiAssocSouthSection5RodionSkill2, 
                                new ZweiAssocSouthSection5RodionSkill3, 
                                new ZweiAssocSouthSection5RodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Defense Breathing",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain 2 Shield per 1 [Poise] Count. (Max 20)",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Designated Protection",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, 1 ally with the lowest HP percentage gains 1 Shield per 1 [Poise] Count next turn. (Max 10)",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/ZweiAssociationSouthSection5/10906gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/ZweiAssociationSouthSection5/10906gacksunginfo.png";
}