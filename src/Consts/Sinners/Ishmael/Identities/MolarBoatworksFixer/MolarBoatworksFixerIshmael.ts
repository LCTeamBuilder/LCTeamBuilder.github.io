import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { MolarBoatworksFixerIshmaelSkill1 } from "./MolarBoatworksFixerIshmaelSkill1";
import { MolarBoatworksFixerIshmaelSkill2 } from "./MolarBoatworksFixerIshmaelSkill2";
import { MolarBoatworksFixerIshmaelSkill3 } from "./MolarBoatworksFixerIshmaelSkill3";
import { MolarBoatworksFixerIshmaelDefense } from "./MolarBoatworksFixerIshmaelDefense";

export class MolarBoatworksFixerIshmael implements IdentityBase{
    readonly Id: number = 10807;
    readonly Name: string = "Molar Boatworks Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 70;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new MolarBoatworksFixerIshmaelSkill1, 
                                new MolarBoatworksFixerIshmaelSkill2, 
                                new MolarBoatworksFixerIshmaelSkill3, 
                                new MolarBoatworksFixerIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Crushin' Crabs",
            PassiveTypeEnum.Combat,
            "On hit against a target with [Tremor], inflict +1 [Sinking] Count",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Crab Driver",
            PassiveTypeEnum.Support,
            "When an ally with the lowest Max HP hits with Heads Coins, they inflict +1 [Sinking] Count when inflicting [Tremor] Count on their target with Coin effects.",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/MolarBoatworksFixer/10807gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/MolarBoatworksFixer/10807gacksunginfo.png";
}