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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const HeishouPackMaoBranchAdeptFaustDefense1: Skill = {
    Name: "It Shall be Done.",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "[Combat Start] Gain 1 [Assist Defense] (once per turn)<br>" +
            "[On Use] This Skill gains +1 Offense Level for every 10% HP this unit has cumulatively lost in this Encounter (max 6; based on max HP at the time of activation)<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[On Use] If this unit's Speed is faster than the target's by 2 or more, gain Base Power based on Speed difference (Base Power +1 for every 2 Speed difference; max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/HeishouPackMaoBranchAdept/1021204.png'
}

const HeishouPackMaoBranchAdeptFaustDefense2: Skill = {
    Name: "Swiftfeet Protection",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>" +
            "Exclusive Skill for [Assist Defense]<br>" +
            "[Before Use] At 10+ [Tianjiu Stars Blade], activates 'Ascendant Heishou - Mao Technique: Cloudsplitting Manifestation' instead<br>" +
            "[On Use] This Skill gains +1 Defense Level for every 10% HP this unit has cumulatively lost in this Encounter (max 6; based on max HP at the time of activation)<br>" +
            "[On Use] Cannot be Staggered by damage until this Skill ends<br>" +
            "[On Use] Gain 2 [Protection] (once per turn)"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/HeishouPackMaoBranchAdept/1021206.png'
}

const HeishouPackMaoBranchAdeptFaustSkill1: Skill = {
    Name: "Blinkstep",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1<br>" +
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/HeishouPackMaoBranchAdept/1021201.png'
}

const HeishouPackMaoBranchAdeptFaustSkill2: Skill = {
    Name: "Clearing the Path, My Lord.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +(Speed difference x [Tianjiu Stars Blade] on self)% damage (max 50%)<br>" +
            "If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1<br>" +
            "[On Use] Gain 2 [Haste] next turn (once per turn)<br>" +
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "If target has [Deathrite - Haste] or [Deathrite - Fissure], deal +50% damage", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/HeishouPackMaoBranchAdept/1021202.png'
}

const HeishouPackMaoBranchAdeptFaustSkill31: Skill = {
    Name: "Traceless to Sight and Sound Alike.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +(Speed difference x [Rupture] Potency on target)% damage (max 50%)<br>" +
            "If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>" +
            "[Combat Start] Gain 1 [Assist Defense] (once per turn)<br>" +
            "[Before Use] At 10+ [Tianjiu Stars Blade], activate 'Ascendant Heishou - Mao Technique: Cloudsplitting Manifestation' instead<br>" +
            "[On Use] If target has 15+ [Rupture], Coin Power +1<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] Inflict [Deathrite - Haste]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("At 10+ Speed, deal +30% damage<br>" +
            "[On Hit] Inflict 3 [Rupture]<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)<br>" +
            "[Reuse - On Hit] Inflict [Deathrite - Haste]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/HeishouPackMaoBranchAdept/1021203.png'
}

const HeishouPackMaoBranchAdeptFaustSkill32: Skill = {
    Name: "Ascendant Heishou - Mao Technique: Cloudsplitting Manifestation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +(Speed difference x [Rupture] Potency on target)% damage (max 50%)<br>" +
            "If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>" +
            "[On Use] Coin Power +1 for every 10 [Rupture] on target (max 2)<br>" +
            "[On Use] At 10+ Speed, gain 20 [Poise]; if this unit has less than 4 [Poise] Count, raise [Poise] Count up to 4<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[Clash Win] Inflict +2 [Rupture] Count<br>" +
            "[After Attack] Consume 10 [Tianjiu Stars Blade]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] Inflict [Deathrite - Fissure]<br>" +
            "[On Hit] Inflict [Deathrite - Haste]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("At 10+ Speed, deal +30% damage<br>" +
            "[On Hit] Inflict 3 [Rupture]<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)<br>" +
            "[Reuse - On Hit] Inflict [Deathrite - Fissure]<br>" +
            "[Reuse - On Hit] Inflict [Deathrite - Haste]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/HeishouPackMaoBranchAdept/1021205.png'
}

export const HeishouPackMaoBranchAdeptFaust: Identity = {
    Id: 10212,
    Name: "Heishou Pack - Mao Branch Adept",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 3.19,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +3,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [HeishouPackMaoBranchAdeptFaustSkill1, 
            HeishouPackMaoBranchAdeptFaustSkill2, 
            HeishouPackMaoBranchAdeptFaustSkill31, 
            HeishouPackMaoBranchAdeptFaustSkill32, 
            HeishouPackMaoBranchAdeptFaustDefense1, 
            HeishouPackMaoBranchAdeptFaustDefense2],
    Passives: [
        new Passive("Tianjiu Star",
            PassiveTypeEnum.Combat,
            "When [Deathrite - Fissure] Stack drops to 0 and expires, gain [Mark of Decay]"),

        new Passive("Heishou Mutation [Mao] / Mao Branch Adept",
            PassiveTypeEnum.Combat,
            "If this unit's Speed is faster than the target's, deal +2% more damage for every 1 Speed difference (max 10%)<br><br>" +

            "Gain 1 [Tianjiu Stars Blade] every time an ally triggers a Deathrite effect (5 times per turn)<br>" +
            "- If this unit triggered a Deathrite effect, gain 1 additional [Tianjiu Stars Blade]<br>" +
            "When activating the [Assist Defense] effect, gain 5 [Tianjiu Stars Blade]",
            [{ sin: SinEnum.Gluttony, amount: 5}],
            PassiveCostTypeEnum.Owned),

        new Passive("Blinkblade",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed inflicts [Rupture] damage, gain 1 [Offense Level Up] next turn (3 times per turn)",
            [{ sin: SinEnum.Gluttony, amount: 4}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Faust/Identities/HeishouPackMaoBranchAdept/10212gacksung.png',
    PortraitImageDir: './assets/Sinners/Faust/Identities/HeishouPackMaoBranchAdept/10212gacksunginfo.png'
}