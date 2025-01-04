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

const DevyatAssocNorthSection3RodionDefense: Skill = {
    Name: "Courier Support & Control Sequence",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 15+ [Courier Trunk - Rodion], activate 'Just… a Strategic Time Off!' instead (once per turn)<br>"+
            "[Combat Start] If this Skill is to be activated, gain ([Courier Trunk - Rodion])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[On Use] Gain 2 [Courier Trunk - Rodion] (once per turn)<br>"+
            "- At less than 15 [Courier Trunk - Rodion], gain 1 additional [Courier Trunk - Rodion]")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierSupportControlSequence.png"
}

const DevyatAssocNorthSection3RodionDefense2: Skill = {
    Name: "Just… a Strategic Time Off!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this Skill is to be activated, gain ([Courier Trunk - Rodion])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[Turn End] Activate [Strategic R&R Mode]")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/JustAStrategicTimeOff.png"
}

const DevyatAssocNorthSection3RodionSkill1: Skill = {
    Name: "Courier Trunk - Decay Knife",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not consume target's [Rupture] Count On Hit, but does not inflict [Rupture] with this Skill's On Hit effects"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Rodion]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Rodion], gain 1 additional [Courier Trunk - Rodion]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierTrunkDecayKnife.png"
}

const DevyatAssocNorthSection3RodionSkill2: Skill = {
    Name: "Courier Trunk - Gadget Reveal",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +2% more damage for every [Courier Trunk - Rodion] on self (max 40%)<br>"+
            "Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not consume target's [Rupture] Count On Hit"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Rodion]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Rodion], gain 2 additional [Courier Trunk - Rodion]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain 1 [Haste] next turn (once per turn)<br>"+
            "- At 15+ [Courier Trunk - Rodion], gain 1 additional [Haste]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Defense Level Down] for every 5 [Courier Trunk - Rodion] on self or for every 5 [Rupture] on the target (max 6, once per turn)", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierTrunkGadgetReveal.png"
}

const DevyatAssocNorthSection3RodionSkill3: Skill = {
    Name: "I Trust Ya, Polu!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +4% more damage for every [Courier Trunk - Rodion] on self (max 80%)<br>"+
            "Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] Count with its On Hit effects, instead, Reuse its last Coin"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count (once per turn)<br>"+
            "- Inflict +1 more [Rupture] Count for every 10 [Courier Trunk - Rodion] (max 2)", 2),
        new SkillDescriptionPart(" [On Hit] At 15+ [Courier Trunk - Rodion], deal +25% more damage<br>"+
            "[After Attack] If the target is Staggered or defeated, gain 2 [Haste] next turn (once per turn)", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/ITrustYaPolu.png"
}

export const DevyatAssocNorthSection3Rodion: Identity = {
    Id: 10910,
    Name: "Devyat' Assoc. North Section 3",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 81,
    HealthPerLevel: 2.88,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DevyatAssocNorthSection3RodionSkill1, 
            DevyatAssocNorthSection3RodionSkill2, 
            DevyatAssocNorthSection3RodionSkill3, 
            DevyatAssocNorthSection3RodionDefense, 
            DevyatAssocNorthSection3RodionDefense2],
    Passives: [
        new Passive("Lemme go and I swear I'll make it in time!",
            PassiveTypeEnum.Combat,
            "&ltFor Chain Battles&gt When, after Retreating with '[Strategic R&R Mode]', if this unit rejoins the battle, halve the [Courier Trunk - Rodion] - Rodion value (once per Encounter, rounded up)"),

        new Passive("Speedy Delivery",
            PassiveTypeEnum.Combat,
            "Turn Start: At 6+ Speed, or if this unit has [Haste],<br>"+
            "gain ([Courier Trunk - Rodion])% of this unit's max HP as Shield (max 20%)<br><br>"+

            "Upon Retreat, apply 1 [Clash Power Up] to 2 allies next turn (prioritizes Substituted units first, then in Deployment order)<br>"+
            "- Lasts for 1 additional turn for every 15 [Courier Trunk - Rodion] on self (2 more turns max)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Outstanding Courier",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: Clash Power +1 to Skills that apply [Rupture] Potency or Count",
            [{ sin: SinEnum.Gluttony, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/DevyatAssocNorthSection3/10910gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/DevyatAssocNorthSection3/10910gacksunginfo.png"
}