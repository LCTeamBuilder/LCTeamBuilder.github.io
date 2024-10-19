import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { FanghuntOfficeFixerHongLuSkill1 } from "./FanghuntOfficeFixerHongLuSkill1";
import { FanghuntOfficeFixerHongLuSkill2 } from "./FanghuntOfficeFixerHongLuSkill2";
import { FanghuntOfficeFixerHongLuSkill3 } from "./FanghuntOfficeFixerHongLuSkill3";
import { FanghuntOfficeFixerHongLuDefense } from "./FanghuntOfficeFixerHongLuDefense";

export class FanghuntOfficeFixerHongLu implements IdentityBase{
    readonly Id: number = 10610;
    readonly Name: string = "Fanghunt Office Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.51;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new FanghuntOfficeFixerHongLuSkill1, 
                                new FanghuntOfficeFixerHongLuSkill2, 
                                new FanghuntOfficeFixerHongLuSkill3, 
                                new FanghuntOfficeFixerHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("How to Hunt Cheerfully",
            PassiveTypeEnum.Combat,
            "If the target is a &lt;Bloodfiend&gt;, &lt;Bloodbag&gt;, or if the target has 10+ [Rupture], deal +10% more damage<br>"+
            "On Skill Use, if this unit has [Bleed], inflict 3 [Rupture] On Hit (2 times per turn)",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Bloodfiend Hunting Manual - Styptics",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the highest sum of [Bleed] Potency and Count loses 2 [Bleed] Count<br>"+
            "When 1 ally with the fastest Speed hits an enemy with [Rupture], inflict 1 [Defense Level Down] (2 times per turn)",
            [{sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/FanghuntOfficeFixer/10610gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/FanghuntOfficeFixer/10610gacksunginfo.png";
}