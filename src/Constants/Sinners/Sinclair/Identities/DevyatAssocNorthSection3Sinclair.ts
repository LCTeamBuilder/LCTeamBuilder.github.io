import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const DevyatAssocNorthSection3SinclairDefense: Skill = {
    Name: "Courier Assistance & Crisis Control System",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 15+ [Courier Trunk - Sinclair], activate 'W-wait, I need to do some maintenance…!' instead (once per turn)<br>"+
            "[Combat Start] If this Skill is to be activated, gain ([Courier Trunk - Sinclair])% of this unit's max HP as Shield (max 25%, once per turn)")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierAssistanceAndCrisisControlSystem.png"
}

const DevyatAssocNorthSection3SinclairDefense2: Skill = {
    Name: "W-wait, I need to do some maintenance…!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this Skill is to be activated, gain ([Courier Trunk])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[Turn End] Activate [Strategic R&R Mode]")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/WWaitINeedToDoSomeMaintenance.png"
}

const DevyatAssocNorthSection3SinclairSkill1: Skill = {
    Name: "Courier Trunk - Decay Hammer",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Count with its On Hit effects, instead, it inflicts 2 [Defense Level Down] (once per Coin)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Sinclair]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Sinclair], gain 1 additional [Courier Trunk - Sinclair]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +1 additional [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierTrunkDecayHammer.png"
}

const DevyatAssocNorthSection3SinclairSkill2: Skill = {
    Name: "Courier Trunk - Demolition Gadget",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its On Hit effects, instead, it inflicts 2 [Defense Level Down] (once per Coin)<br>"+
            "[On Use] At 30- [Courier Trunk - Sinclair], gain 1 [Haste] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Sinclair]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Sinclair], gain 2 additional [Courier Trunk - Sinclair]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +2 [Rupture] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierTrunkDemolitionGadget.png"
}

const DevyatAssocNorthSection3SinclairSkill3: Skill = {
    Name: "Poludnitsa… I trust you!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2) <br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its On Hit effects, instead, the final Coin gains +4 Coin Power<br>"+
            "On Use] If the target has 15+ [Rupture], deal +4% more damage for every [Courier Trunk - Sinclair] (max 120%)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "- Inflict +1 additional [Rupture] Count for every 10 [Courier Trunk - Sinclair] (max 3)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "- Inflict +1 additional [Rupture] for every 8 [Courier Trunk - Sinclair] (max 4)", 2),
        new SkillDescriptionPart("[On Hit] If this Skill's effect to raise its final Coin Power did not activate, gain 2 [Haste] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/PoludnitsaITrustYou.png"
}

export const DevyatAssocNorthSection3Sinclair: Identity = {
    Id: 11011,
    Name: "Devyat' Assoc. North Section 3",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [DevyatAssocNorthSection3SinclairSkill1, 
            DevyatAssocNorthSection3SinclairSkill2, 
            DevyatAssocNorthSection3SinclairSkill3, 
            DevyatAssocNorthSection3SinclairDefense, 
            DevyatAssocNorthSection3SinclairDefense2],
    Passives: [
        new Passive("I'll do better next time…",
            PassiveTypeEnum.Combat,
            "&ltFor Chain Battles&gt When, after Retreating with '[Strategic R&R Mode]', if this unit rejoins the battle, halve the [Courier Trunk - Sinclair] value (once per Encounter, rounded up)"),

        new Passive("A moment, please…",
            PassiveTypeEnum.Combat,
            "Turn Start: At 6+ Speed, or if this unit has [Haste], gain ([Courier Trunk - Sinclair])% of this unit's max HP as Shield (max 20%)<br>"+
            "Upon Retreat, apply 1 [Clash Power Up] to 2 allies next turn (prioritizes Substituted units first, then in Deployment order)<br>"+
            "- Lasts for 1 additional turn for every 15 [Courier Trunk - Sinclair] (2 more turns max)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Outstanding Courier",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed hits and enemy with [Rupture], inflict 1 [Defense Level Down] (3 times per enemy per turn)",
            [{ sin: SinEnum.Gluttony, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/DevyatAssocNorthSection3/11011gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/DevyatAssocNorthSection3/11011gacksunginfo.png"
}