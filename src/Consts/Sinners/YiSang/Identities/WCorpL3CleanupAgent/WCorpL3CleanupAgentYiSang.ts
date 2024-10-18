import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL3CleanupAgentYiSangSkill1 } from "./WCorpL3CleanupAgentYiSangSkill1";
import { WCorpL3CleanupAgentYiSangSkill2 } from "./WCorpL3CleanupAgentYiSangSkill2";
import { WCorpL3CleanupAgentYiSangSkill3 } from "./WCorpL3CleanupAgentYiSangSkill3";
import { WCorpL3CleanupAgentYiSangDefense } from "./WCorpL3CleanupAgentYiSangDefense";

export class WCorpL3CleanupAgentYiSang implements IdentityBase{
    readonly Id: number = 10106;
    readonly Name: string = "W Corp. L3 Cleanup Agent";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.73;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL3CleanupAgentYiSangSkill1, 
                                new WCorpL3CleanupAgentYiSangSkill2, 
                                new WCorpL3CleanupAgentYiSangSkill3, 
                                new WCorpL3CleanupAgentYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Emptied Thought",
            PassiveTypeEnum.Combat,
            "- At Turn End, gain 1 [Haste] per 5 [Charge] Count on self next turn. (Max 3)<br>"+
            "- If this unit's Skill consumed [Charge] Count, apply 3 [Charge Barrier] to 1 ally with the lowest HP percentage",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleanup Demonstration",
            PassiveTypeEnum.Support,
            "1 Ally with the highest [Charge] Count deals more damage against targets with [Rupture] based on [Rupture] on target (+1.5% per [Rupture]. Max +15% damage)",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/WCorpL3CleanupAgent/10106gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/WCorpL3CleanupAgent/10106gacksunginfo.png";
}