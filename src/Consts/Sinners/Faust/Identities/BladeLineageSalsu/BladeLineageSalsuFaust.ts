import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { BladeLineageSalsuFaustSkill1 } from "./BladeLineageSalsuFaustSkill1";
import { BladeLineageSalsuFaustSkill2 } from "./BladeLineageSalsuFaustSkill2";
import { BladeLineageSalsuFaustSkill3 } from "./BladeLineageSalsuFaustSkill3";
import { BladeLineageSalsuFaustDefense } from "./BladeLineageSalsuFaustDefense";

export class BladeLineageSalsuFaust implements IdentityBase{
    readonly Id: number = 10208;
    readonly Name: string = "Blade Lineage Salsu";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.5;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new BladeLineageSalsuFaustSkill1, 
                                new BladeLineageSalsuFaustSkill2, 
                                new BladeLineageSalsuFaustSkill3, 
                                new BladeLineageSalsuFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Sanguine Plum Blossoms",
            PassiveTypeEnum.Combat,
            "On Crit: Inflict 1 [Red Plum Blossom]. If the target has 10 [Red Plum Blossom], inflict 1 [Defense Level Down] instead (6 times max)",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Lingering Bladepoint",
            PassiveTypeEnum.Support,
            "When the ally first deployed in the pre-battle team setup Critically hits with a Slash type Skill, inflict 1 [Defense Level Down] (3 times max per 1 enemy per turn)",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/BladeLineageSalsu/10208gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/BladeLineageSalsu/10208gacksunginfo.png";
}