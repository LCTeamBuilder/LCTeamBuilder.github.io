import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { MolarBoatworksFixerSinclairSkill1 } from "./MolarBoatworksFixerSinclairSkill1";
import { MolarBoatworksFixerSinclairSkill2 } from "./MolarBoatworksFixerSinclairSkill2";
import { MolarBoatworksFixerSinclairSkill3 } from "./MolarBoatworksFixerSinclairSkill3";
import { MolarBoatworksFixerSinclairDefense } from "./MolarBoatworksFixerSinclairDefense";

export class MolarBoatworksFixerSinclair implements Identity{
    readonly Id: number = 11007;
    readonly Name: string = "Molar Boatworks Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new MolarBoatworksFixerSinclairSkill1, 
                                new MolarBoatworksFixerSinclairSkill2, 
                                new MolarBoatworksFixerSinclairSkill3, 
                                new MolarBoatworksFixerSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Unstable Power Output",
            PassiveTypeEnum.Combat,
            "On hit with Heads Coins at 10+ [Tremor] Count on self, Inflict +1 [Tremor] and [Tremor] Count with Coin effects.",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Modified Power Output",
            PassiveTypeEnum.Support,
            "1 ally with the most Max HP inflicts +1 [Tremor] with the effects of their attack Skills/Coins.",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/MolarBoatworksFixer/11007gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/MolarBoatworksFixer/11007gacksunginfo.png";
}