import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { HookOfficeFixerHongLuSkill1 } from "./HookOfficeFixerHongLuSkill1";
import { HookOfficeFixerHongLuSkill2 } from "./HookOfficeFixerHongLuSkill2";
import { HookOfficeFixerHongLuSkill3 } from "./HookOfficeFixerHongLuSkill3";
import { HookOfficeFixerHongLuDefense } from "./HookOfficeFixerHongLuDefense";

export class HookOfficeFixerHongLu implements IdentityBase{
    readonly Id: number = 10607;
    readonly Name: string = "Hook Office Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.38;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new HookOfficeFixerHongLuSkill1, 
                                new HookOfficeFixerHongLuSkill2, 
                                new HookOfficeFixerHongLuSkill3, 
                                new HookOfficeFixerHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Hook",
            PassiveTypeEnum.Combat,
            "Upon defeating an enemy, gain 1 [Attack Power Up] next turn (Once per turn)",
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Mass-produced Bionic Gear",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed defeats an enemy inflicted with [Bleed], gain 1 [Attack Power Up] next turn (Once per turn)",
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/HookOfficeFixer/10607gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/HookOfficeFixer/10607gacksunginfo.png";
}