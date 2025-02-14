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

const KurokumoClanWakashuHeathcliffDefense: Skill = {
    Name: "Rules of the Backstreets",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "If Kurokumo Clan Captain Ishmael is on the field, activate the following:<br>"+
            "- Convert all Coins in this Skill into [Unbreakable Coin]s"+
            "- Final Power +4 to this Skill upon Clash Lose<br>"+
            "Deal +10% more damage for every type of negative effect on the target (max 100%)<br>"+
            "[On Use] If this unit has [Cumulus Wall], unconditionally activate all Reuse effects on this Skill's Coins"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] If this unit has [Dark Cloud Blade], Reuse Coin once (once per Skill)<br>"+
            "[On Hit] If this unit has [Battle Ready], Reuse Coin once (once per Skill)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/KurokumoClanWakashu/RulesOfTheBackstreets.png'
}

const KurokumoClanWakashuHeathcliffSkill1: Skill = {
    Name: "Lenticular Rend",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 2 [Defense Power Up] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/KurokumoClanWakashu/LenticularSwirl.png'
}

const KurokumoClanWakashuHeathcliffSkill2: Skill = {
    Name: "Stormcloud",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 1 [Defense Power Up] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[Heads Hit] Inflict 1 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict 1 [Attack Power Down] (2 times per turn)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/KurokumoClanWakashu/Stormcloud.png'
}

const KurokumoClanWakashuHeathcliffSkill3: Skill = {
    Name: "Thundercleave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[Combat Start] Gain 1 [Cumulus Wall] next turn<br>"+
            "[On Use] Gain 1 [Defense Power Up] next turn (once per turn)<br>"+
            "[Clash Win] Gain 1 [Dark Cloud Blade] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Final Coin deals +10% more damage", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Slash Fragility]<br>"+
            "[On Hit] Final Coin deals +10% more damage", 2),
        new SkillDescriptionPart("Deal +10% more damage for every type of negative effect on the target (max 100%)<br>"+
            "[On Hit] Inflict 6 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/KurokumoClanWakashu/Thundercleave.png'
}

export const KurokumoClanWakashuHeathcliff: Identity = {
    Id: 10712,
    Name: "Kurokumo Clan Wakashu",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 3.19,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +3,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [KurokumoClanWakashuHeathcliffSkill1,
            KurokumoClanWakashuHeathcliffSkill2,
            KurokumoClanWakashuHeathcliffSkill3, 
            KurokumoClanWakashuHeathcliffDefense],
    Passives: [
        new Passive("Battle Ready",
            PassiveTypeEnum.Combat,
            "When a Kurokumo Clan ally is defeated, gain 1 [Slash Power Up] for this Encounter<br><br>"+

            "When 3+ Kurokumo Clan allies are defeated, gain [Battle Ready] for this Encounter"),

        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "When there are 2+ allied Kurokumo Clan Identities on the field, including this unit, gain 1 [Dark Cloud Blade] (max 1)<br><br>"+

            "Against enemies that, in this turn, used Defense Skills or were at max HP before attacking: deal +10% more damage<br><br>"+

            "If an enemy attacked an other ally with a Skill and dealt damage this turn: use an Unopposed Attack against the attacker with Skill 1 (once per turn)<br><br>"+

            "If the enemy killed an other ally, or if the said ally's HP is at less than 25% after the enemy's attack, use an Unopposed Attack against the attacker with <Rules of the Backstreets> instead (once per ally; 2 times per turn; the Skill activated with this effect counts as an Attack Skill)",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Impale",
            PassiveTypeEnum.Support,
            "1 ally with the fastest Speed: against enemies that used Defense Skills or were at max HP before attacking this turn: deal +10% more damage",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Heathcliff/Identities/KurokumoClanWakashu/10712gacksung.png',
    PortraitImageDir: './assets/Sinners/Heathcliff/Identities/KurokumoClanWakashu/10712gacksunginfo.png'
}