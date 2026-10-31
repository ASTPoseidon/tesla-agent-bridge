import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace UniversalMessage. */
export namespace UniversalMessage {

    /** Domain enum. */
    enum Domain {

        /** DOMAIN_BROADCAST value */
        DOMAIN_BROADCAST = 0,

        /** DOMAIN_VEHICLE_SECURITY value */
        DOMAIN_VEHICLE_SECURITY = 2,

        /** DOMAIN_INFOTAINMENT value */
        DOMAIN_INFOTAINMENT = 3
    }

    /**
     * Properties of a Destination.
     * @deprecated Use UniversalMessage.Destination.$Properties instead.
     */
    interface IDestination extends UniversalMessage.Destination.$Properties {
    }

    /** Represents a Destination. */
    class Destination {

        /**
         * Constructs a new Destination.
         * @param [p] Properties to set
         */
        constructor(p?: UniversalMessage.Destination.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Destination domain. */
        domain?: (UniversalMessage.Domain|null);

        /** Destination routing_address. */
        routing_address?: (Uint8Array|null);

        /** Destination sub_destination. */
        sub_destination?: ("domain"|"routing_address");

        /**
         * Encodes the specified Destination message. Does not implicitly {@link UniversalMessage.Destination.verify|verify} messages.
         * @param m Destination message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: UniversalMessage.Destination.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Destination message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {UniversalMessage.Destination & UniversalMessage.Destination.$Shape} Destination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UniversalMessage.Destination & UniversalMessage.Destination.$Shape;

        /**
         * Gets the type url for Destination
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Destination {

        /** Properties of a Destination. */
        interface $Properties {

            /** Destination domain */
            domain?: (UniversalMessage.Domain|null);

            /** Destination routing_address */
            routing_address?: (Uint8Array|null);

            /** Destination sub_destination */
            sub_destination?: ("domain"|"routing_address");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Destination. */
        type $Shape = {
          domain?: UniversalMessage.Domain|null;
          routing_address?: Uint8Array|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sub_destination?: undefined; domain?: null; routing_address?: null }|{ sub_destination?: "domain"; domain: UniversalMessage.Domain; routing_address?: null }|{ sub_destination?: "routing_address"; domain?: null; routing_address: Uint8Array })
        );
    }

    /** OperationStatus_E enum. */
    enum OperationStatus_E {

        /** OPERATIONSTATUS_OK value */
        OPERATIONSTATUS_OK = 0,

        /** OPERATIONSTATUS_WAIT value */
        OPERATIONSTATUS_WAIT = 1,

        /** OPERATIONSTATUS_ERROR value */
        OPERATIONSTATUS_ERROR = 2
    }

    /** MessageFault_E enum. */
    enum MessageFault_E {

        /** MESSAGEFAULT_ERROR_NONE value */
        MESSAGEFAULT_ERROR_NONE = 0,

        /** MESSAGEFAULT_ERROR_BUSY value */
        MESSAGEFAULT_ERROR_BUSY = 1,

        /** MESSAGEFAULT_ERROR_TIMEOUT value */
        MESSAGEFAULT_ERROR_TIMEOUT = 2,

        /** MESSAGEFAULT_ERROR_UNKNOWN_KEY_ID value */
        MESSAGEFAULT_ERROR_UNKNOWN_KEY_ID = 3,

        /** MESSAGEFAULT_ERROR_INACTIVE_KEY value */
        MESSAGEFAULT_ERROR_INACTIVE_KEY = 4,

        /** MESSAGEFAULT_ERROR_INVALID_SIGNATURE value */
        MESSAGEFAULT_ERROR_INVALID_SIGNATURE = 5,

        /** MESSAGEFAULT_ERROR_INVALID_TOKEN_OR_COUNTER value */
        MESSAGEFAULT_ERROR_INVALID_TOKEN_OR_COUNTER = 6,

        /** MESSAGEFAULT_ERROR_INSUFFICIENT_PRIVILEGES value */
        MESSAGEFAULT_ERROR_INSUFFICIENT_PRIVILEGES = 7,

        /** MESSAGEFAULT_ERROR_INVALID_DOMAINS value */
        MESSAGEFAULT_ERROR_INVALID_DOMAINS = 8,

        /** MESSAGEFAULT_ERROR_INVALID_COMMAND value */
        MESSAGEFAULT_ERROR_INVALID_COMMAND = 9,

        /** MESSAGEFAULT_ERROR_DECODING value */
        MESSAGEFAULT_ERROR_DECODING = 10,

        /** MESSAGEFAULT_ERROR_INTERNAL value */
        MESSAGEFAULT_ERROR_INTERNAL = 11,

        /** MESSAGEFAULT_ERROR_WRONG_PERSONALIZATION value */
        MESSAGEFAULT_ERROR_WRONG_PERSONALIZATION = 12,

        /** MESSAGEFAULT_ERROR_BAD_PARAMETER value */
        MESSAGEFAULT_ERROR_BAD_PARAMETER = 13,

        /** MESSAGEFAULT_ERROR_KEYCHAIN_IS_FULL value */
        MESSAGEFAULT_ERROR_KEYCHAIN_IS_FULL = 14,

        /** MESSAGEFAULT_ERROR_INCORRECT_EPOCH value */
        MESSAGEFAULT_ERROR_INCORRECT_EPOCH = 15,

        /** MESSAGEFAULT_ERROR_IV_INCORRECT_LENGTH value */
        MESSAGEFAULT_ERROR_IV_INCORRECT_LENGTH = 16,

        /** MESSAGEFAULT_ERROR_TIME_EXPIRED value */
        MESSAGEFAULT_ERROR_TIME_EXPIRED = 17,

        /** MESSAGEFAULT_ERROR_NOT_PROVISIONED_WITH_IDENTITY value */
        MESSAGEFAULT_ERROR_NOT_PROVISIONED_WITH_IDENTITY = 18,

        /** MESSAGEFAULT_ERROR_COULD_NOT_HASH_METADATA value */
        MESSAGEFAULT_ERROR_COULD_NOT_HASH_METADATA = 19,

        /** MESSAGEFAULT_ERROR_TIME_TO_LIVE_TOO_LONG value */
        MESSAGEFAULT_ERROR_TIME_TO_LIVE_TOO_LONG = 20,

        /** MESSAGEFAULT_ERROR_REMOTE_ACCESS_DISABLED value */
        MESSAGEFAULT_ERROR_REMOTE_ACCESS_DISABLED = 21,

        /** MESSAGEFAULT_ERROR_REMOTE_SERVICE_ACCESS_DISABLED value */
        MESSAGEFAULT_ERROR_REMOTE_SERVICE_ACCESS_DISABLED = 22,

        /** MESSAGEFAULT_ERROR_COMMAND_REQUIRES_ACCOUNT_CREDENTIALS value */
        MESSAGEFAULT_ERROR_COMMAND_REQUIRES_ACCOUNT_CREDENTIALS = 23,

        /** MESSAGEFAULT_ERROR_REQUEST_MTU_EXCEEDED value */
        MESSAGEFAULT_ERROR_REQUEST_MTU_EXCEEDED = 24,

        /** MESSAGEFAULT_ERROR_RESPONSE_MTU_EXCEEDED value */
        MESSAGEFAULT_ERROR_RESPONSE_MTU_EXCEEDED = 25,

        /** MESSAGEFAULT_ERROR_REPEATED_COUNTER value */
        MESSAGEFAULT_ERROR_REPEATED_COUNTER = 26,

        /** MESSAGEFAULT_ERROR_INVALID_KEY_HANDLE value */
        MESSAGEFAULT_ERROR_INVALID_KEY_HANDLE = 27,

        /** MESSAGEFAULT_ERROR_REQUIRES_RESPONSE_ENCRYPTION value */
        MESSAGEFAULT_ERROR_REQUIRES_RESPONSE_ENCRYPTION = 28
    }

    /**
     * Properties of a MessageStatus.
     * @deprecated Use UniversalMessage.MessageStatus.$Properties instead.
     */
    interface IMessageStatus extends UniversalMessage.MessageStatus.$Properties {
    }

    /** Represents a MessageStatus. */
    class MessageStatus {

        /**
         * Constructs a new MessageStatus.
         * @param [p] Properties to set
         */
        constructor(p?: UniversalMessage.MessageStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MessageStatus operation_status. */
        operation_status: UniversalMessage.OperationStatus_E;

        /** MessageStatus signed_message_fault. */
        signed_message_fault: UniversalMessage.MessageFault_E;

        /**
         * Encodes the specified MessageStatus message. Does not implicitly {@link UniversalMessage.MessageStatus.verify|verify} messages.
         * @param m MessageStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: UniversalMessage.MessageStatus.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {UniversalMessage.MessageStatus & UniversalMessage.MessageStatus.$Shape} MessageStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UniversalMessage.MessageStatus & UniversalMessage.MessageStatus.$Shape;

        /**
         * Gets the type url for MessageStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MessageStatus {

        /** Properties of a MessageStatus. */
        interface $Properties {

            /** MessageStatus operation_status */
            operation_status?: (UniversalMessage.OperationStatus_E|null);

            /** MessageStatus signed_message_fault */
            signed_message_fault?: (UniversalMessage.MessageFault_E|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MessageStatus. */
        type $Shape = UniversalMessage.MessageStatus.$Properties;
    }

    /**
     * Properties of a SessionInfoRequest.
     * @deprecated Use UniversalMessage.SessionInfoRequest.$Properties instead.
     */
    interface ISessionInfoRequest extends UniversalMessage.SessionInfoRequest.$Properties {
    }

    /** Represents a SessionInfoRequest. */
    class SessionInfoRequest {

        /**
         * Constructs a new SessionInfoRequest.
         * @param [p] Properties to set
         */
        constructor(p?: UniversalMessage.SessionInfoRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SessionInfoRequest public_key. */
        public_key: Uint8Array;

        /** SessionInfoRequest challenge. */
        challenge: Uint8Array;

        /**
         * Encodes the specified SessionInfoRequest message. Does not implicitly {@link UniversalMessage.SessionInfoRequest.verify|verify} messages.
         * @param m SessionInfoRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: UniversalMessage.SessionInfoRequest.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionInfoRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {UniversalMessage.SessionInfoRequest & UniversalMessage.SessionInfoRequest.$Shape} SessionInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UniversalMessage.SessionInfoRequest & UniversalMessage.SessionInfoRequest.$Shape;

        /**
         * Gets the type url for SessionInfoRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SessionInfoRequest {

        /** Properties of a SessionInfoRequest. */
        interface $Properties {

            /** SessionInfoRequest public_key */
            public_key?: (Uint8Array|null);

            /** SessionInfoRequest challenge */
            challenge?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SessionInfoRequest. */
        type $Shape = UniversalMessage.SessionInfoRequest.$Properties;
    }

    /** Flags enum. */
    enum Flags {

        /** FLAG_USER_COMMAND value */
        FLAG_USER_COMMAND = 0,

        /** FLAG_ENCRYPT_RESPONSE value */
        FLAG_ENCRYPT_RESPONSE = 1
    }

    /**
     * Properties of a RoutableMessage.
     * @deprecated Use UniversalMessage.RoutableMessage.$Properties instead.
     */
    interface IRoutableMessage extends UniversalMessage.RoutableMessage.$Properties {
    }

    /** Represents a RoutableMessage. */
    class RoutableMessage {

        /**
         * Constructs a new RoutableMessage.
         * @param [p] Properties to set
         */
        constructor(p?: UniversalMessage.RoutableMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RoutableMessage to_destination. */
        to_destination?: (UniversalMessage.Destination.$Properties|null);

        /** RoutableMessage from_destination. */
        from_destination?: (UniversalMessage.Destination.$Properties|null);

        /** RoutableMessage protobuf_message_as_bytes. */
        protobuf_message_as_bytes?: (Uint8Array|null);

        /** RoutableMessage session_info_request. */
        session_info_request?: (UniversalMessage.SessionInfoRequest.$Properties|null);

        /** RoutableMessage session_info. */
        session_info?: (Uint8Array|null);

        /** RoutableMessage signature_data. */
        signature_data?: (Signatures.SignatureData.$Properties|null);

        /** RoutableMessage signedMessageStatus. */
        signedMessageStatus?: (UniversalMessage.MessageStatus.$Properties|null);

        /** RoutableMessage request_uuid. */
        request_uuid: Uint8Array;

        /** RoutableMessage uuid. */
        uuid: Uint8Array;

        /** RoutableMessage flags. */
        flags: number;

        /** RoutableMessage payload. */
        payload?: ("protobuf_message_as_bytes"|"session_info_request"|"session_info");

        /** RoutableMessage sub_sigData. */
        sub_sigData?: "signature_data";

        /**
         * Encodes the specified RoutableMessage message. Does not implicitly {@link UniversalMessage.RoutableMessage.verify|verify} messages.
         * @param m RoutableMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: UniversalMessage.RoutableMessage.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoutableMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {UniversalMessage.RoutableMessage & UniversalMessage.RoutableMessage.$Shape} RoutableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UniversalMessage.RoutableMessage & UniversalMessage.RoutableMessage.$Shape;

        /**
         * Gets the type url for RoutableMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RoutableMessage {

        /** Properties of a RoutableMessage. */
        interface $Properties {

            /** RoutableMessage to_destination */
            to_destination?: (UniversalMessage.Destination.$Properties|null);

            /** RoutableMessage from_destination */
            from_destination?: (UniversalMessage.Destination.$Properties|null);

            /** RoutableMessage protobuf_message_as_bytes */
            protobuf_message_as_bytes?: (Uint8Array|null);

            /** RoutableMessage session_info_request */
            session_info_request?: (UniversalMessage.SessionInfoRequest.$Properties|null);

            /** RoutableMessage session_info */
            session_info?: (Uint8Array|null);

            /** RoutableMessage signature_data */
            signature_data?: (Signatures.SignatureData.$Properties|null);

            /** RoutableMessage signedMessageStatus */
            signedMessageStatus?: (UniversalMessage.MessageStatus.$Properties|null);

            /** RoutableMessage request_uuid */
            request_uuid?: (Uint8Array|null);

            /** RoutableMessage uuid */
            uuid?: (Uint8Array|null);

            /** RoutableMessage flags */
            flags?: (number|null);

            /** RoutableMessage payload */
            payload?: ("protobuf_message_as_bytes"|"session_info_request"|"session_info");

            /** RoutableMessage sub_sigData */
            sub_sigData?: "signature_data";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a RoutableMessage. */
        type $Shape = {
          to_destination?: UniversalMessage.Destination.$Shape|null;
          from_destination?: UniversalMessage.Destination.$Shape|null;
          protobuf_message_as_bytes?: Uint8Array|null;
          session_info_request?: UniversalMessage.SessionInfoRequest.$Shape|null;
          session_info?: Uint8Array|null;
          signature_data?: Signatures.SignatureData.$Shape|null;
          signedMessageStatus?: UniversalMessage.MessageStatus.$Shape|null;
          request_uuid?: Uint8Array|null;
          uuid?: Uint8Array|null;
          flags?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ payload?: undefined; protobuf_message_as_bytes?: null; session_info_request?: null; session_info?: null }|{ payload?: "protobuf_message_as_bytes"; protobuf_message_as_bytes: Uint8Array; session_info_request?: null; session_info?: null }|{ payload?: "session_info_request"; protobuf_message_as_bytes?: null; session_info_request: UniversalMessage.SessionInfoRequest.$Shape; session_info?: null }|{ payload?: "session_info"; protobuf_message_as_bytes?: null; session_info_request?: null; session_info: Uint8Array })
        ) & (
          ({ sub_sigData?: undefined; signature_data?: null }|{ sub_sigData?: "signature_data"; signature_data: Signatures.SignatureData.$Shape })
        );
    }
}

/** Namespace Signatures. */
export namespace Signatures {

    /** Tag enum. */
    enum Tag {

        /** TAG_SIGNATURE_TYPE value */
        TAG_SIGNATURE_TYPE = 0,

        /** TAG_DOMAIN value */
        TAG_DOMAIN = 1,

        /** TAG_PERSONALIZATION value */
        TAG_PERSONALIZATION = 2,

        /** TAG_EPOCH value */
        TAG_EPOCH = 3,

        /** TAG_EXPIRES_AT value */
        TAG_EXPIRES_AT = 4,

        /** TAG_COUNTER value */
        TAG_COUNTER = 5,

        /** TAG_CHALLENGE value */
        TAG_CHALLENGE = 6,

        /** TAG_FLAGS value */
        TAG_FLAGS = 7,

        /** TAG_REQUEST_HASH value */
        TAG_REQUEST_HASH = 8,

        /** TAG_FAULT value */
        TAG_FAULT = 9,

        /** TAG_END value */
        TAG_END = 255
    }

    /** SignatureType enum. */
    enum SignatureType {

        /** SIGNATURE_TYPE_AES_GCM value */
        SIGNATURE_TYPE_AES_GCM = 0,

        /** SIGNATURE_TYPE_AES_GCM_PERSONALIZED value */
        SIGNATURE_TYPE_AES_GCM_PERSONALIZED = 5,

        /** SIGNATURE_TYPE_HMAC value */
        SIGNATURE_TYPE_HMAC = 6,

        /** SIGNATURE_TYPE_HMAC_PERSONALIZED value */
        SIGNATURE_TYPE_HMAC_PERSONALIZED = 8,

        /** SIGNATURE_TYPE_AES_GCM_RESPONSE value */
        SIGNATURE_TYPE_AES_GCM_RESPONSE = 9
    }

    /**
     * Properties of a KeyIdentity.
     * @deprecated Use Signatures.KeyIdentity.$Properties instead.
     */
    interface IKeyIdentity extends Signatures.KeyIdentity.$Properties {
    }

    /** Represents a KeyIdentity. */
    class KeyIdentity {

        /**
         * Constructs a new KeyIdentity.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.KeyIdentity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyIdentity public_key. */
        public_key?: (Uint8Array|null);

        /** KeyIdentity handle. */
        handle?: (number|null);

        /** KeyIdentity identity_type. */
        identity_type?: ("public_key"|"handle");

        /**
         * Encodes the specified KeyIdentity message. Does not implicitly {@link Signatures.KeyIdentity.verify|verify} messages.
         * @param m KeyIdentity message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.KeyIdentity.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyIdentity message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.KeyIdentity & Signatures.KeyIdentity.$Shape} KeyIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.KeyIdentity & Signatures.KeyIdentity.$Shape;

        /**
         * Gets the type url for KeyIdentity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyIdentity {

        /** Properties of a KeyIdentity. */
        interface $Properties {

            /** KeyIdentity public_key */
            public_key?: (Uint8Array|null);

            /** KeyIdentity handle */
            handle?: (number|null);

            /** KeyIdentity identity_type */
            identity_type?: ("public_key"|"handle");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a KeyIdentity. */
        type $Shape = {
          public_key?: Uint8Array|null;
          handle?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ identity_type?: undefined; public_key?: null; handle?: null }|{ identity_type?: "public_key"; public_key: Uint8Array; handle?: null }|{ identity_type?: "handle"; public_key?: null; handle: number })
        );
    }

    /**
     * Properties of a AES_GCM_Personalized_Signature_Data.
     * @deprecated Use Signatures.AES_GCM_Personalized_Signature_Data.$Properties instead.
     */
    interface IAES_GCM_Personalized_Signature_Data extends Signatures.AES_GCM_Personalized_Signature_Data.$Properties {
    }

    /** Represents a AES_GCM_Personalized_Signature_Data. */
    class AES_GCM_Personalized_Signature_Data {

        /**
         * Constructs a new AES_GCM_Personalized_Signature_Data.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.AES_GCM_Personalized_Signature_Data.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AES_GCM_Personalized_Signature_Data epoch. */
        epoch: Uint8Array;

        /** AES_GCM_Personalized_Signature_Data nonce. */
        nonce: Uint8Array;

        /** AES_GCM_Personalized_Signature_Data counter. */
        counter: number;

        /** AES_GCM_Personalized_Signature_Data expires_at. */
        expires_at: number;

        /** AES_GCM_Personalized_Signature_Data tag. */
        tag: Uint8Array;

        /**
         * Encodes the specified AES_GCM_Personalized_Signature_Data message. Does not implicitly {@link Signatures.AES_GCM_Personalized_Signature_Data.verify|verify} messages.
         * @param m AES_GCM_Personalized_Signature_Data message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.AES_GCM_Personalized_Signature_Data.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AES_GCM_Personalized_Signature_Data message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.AES_GCM_Personalized_Signature_Data & Signatures.AES_GCM_Personalized_Signature_Data.$Shape} AES_GCM_Personalized_Signature_Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.AES_GCM_Personalized_Signature_Data & Signatures.AES_GCM_Personalized_Signature_Data.$Shape;

        /**
         * Gets the type url for AES_GCM_Personalized_Signature_Data
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AES_GCM_Personalized_Signature_Data {

        /** Properties of a AES_GCM_Personalized_Signature_Data. */
        interface $Properties {

            /** AES_GCM_Personalized_Signature_Data epoch */
            epoch?: (Uint8Array|null);

            /** AES_GCM_Personalized_Signature_Data nonce */
            nonce?: (Uint8Array|null);

            /** AES_GCM_Personalized_Signature_Data counter */
            counter?: (number|null);

            /** AES_GCM_Personalized_Signature_Data expires_at */
            expires_at?: (number|null);

            /** AES_GCM_Personalized_Signature_Data tag */
            tag?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AES_GCM_Personalized_Signature_Data. */
        type $Shape = Signatures.AES_GCM_Personalized_Signature_Data.$Properties;
    }

    /**
     * Properties of a AES_GCM_Response_Signature_Data.
     * @deprecated Use Signatures.AES_GCM_Response_Signature_Data.$Properties instead.
     */
    interface IAES_GCM_Response_Signature_Data extends Signatures.AES_GCM_Response_Signature_Data.$Properties {
    }

    /** Represents a AES_GCM_Response_Signature_Data. */
    class AES_GCM_Response_Signature_Data {

        /**
         * Constructs a new AES_GCM_Response_Signature_Data.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.AES_GCM_Response_Signature_Data.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AES_GCM_Response_Signature_Data nonce. */
        nonce: Uint8Array;

        /** AES_GCM_Response_Signature_Data counter. */
        counter: number;

        /** AES_GCM_Response_Signature_Data tag. */
        tag: Uint8Array;

        /**
         * Encodes the specified AES_GCM_Response_Signature_Data message. Does not implicitly {@link Signatures.AES_GCM_Response_Signature_Data.verify|verify} messages.
         * @param m AES_GCM_Response_Signature_Data message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.AES_GCM_Response_Signature_Data.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AES_GCM_Response_Signature_Data message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.AES_GCM_Response_Signature_Data & Signatures.AES_GCM_Response_Signature_Data.$Shape} AES_GCM_Response_Signature_Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.AES_GCM_Response_Signature_Data & Signatures.AES_GCM_Response_Signature_Data.$Shape;

        /**
         * Gets the type url for AES_GCM_Response_Signature_Data
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AES_GCM_Response_Signature_Data {

        /** Properties of a AES_GCM_Response_Signature_Data. */
        interface $Properties {

            /** AES_GCM_Response_Signature_Data nonce */
            nonce?: (Uint8Array|null);

            /** AES_GCM_Response_Signature_Data counter */
            counter?: (number|null);

            /** AES_GCM_Response_Signature_Data tag */
            tag?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a AES_GCM_Response_Signature_Data. */
        type $Shape = Signatures.AES_GCM_Response_Signature_Data.$Properties;
    }

    /**
     * Properties of a HMAC_Signature_Data.
     * @deprecated Use Signatures.HMAC_Signature_Data.$Properties instead.
     */
    interface IHMAC_Signature_Data extends Signatures.HMAC_Signature_Data.$Properties {
    }

    /** Represents a HMAC_Signature_Data. */
    class HMAC_Signature_Data {

        /**
         * Constructs a new HMAC_Signature_Data.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.HMAC_Signature_Data.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HMAC_Signature_Data tag. */
        tag: Uint8Array;

        /**
         * Encodes the specified HMAC_Signature_Data message. Does not implicitly {@link Signatures.HMAC_Signature_Data.verify|verify} messages.
         * @param m HMAC_Signature_Data message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.HMAC_Signature_Data.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HMAC_Signature_Data message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.HMAC_Signature_Data & Signatures.HMAC_Signature_Data.$Shape} HMAC_Signature_Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.HMAC_Signature_Data & Signatures.HMAC_Signature_Data.$Shape;

        /**
         * Gets the type url for HMAC_Signature_Data
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HMAC_Signature_Data {

        /** Properties of a HMAC_Signature_Data. */
        interface $Properties {

            /** HMAC_Signature_Data tag */
            tag?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HMAC_Signature_Data. */
        type $Shape = Signatures.HMAC_Signature_Data.$Properties;
    }

    /**
     * Properties of a HMAC_Personalized_Signature_Data.
     * @deprecated Use Signatures.HMAC_Personalized_Signature_Data.$Properties instead.
     */
    interface IHMAC_Personalized_Signature_Data extends Signatures.HMAC_Personalized_Signature_Data.$Properties {
    }

    /** Represents a HMAC_Personalized_Signature_Data. */
    class HMAC_Personalized_Signature_Data {

        /**
         * Constructs a new HMAC_Personalized_Signature_Data.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.HMAC_Personalized_Signature_Data.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HMAC_Personalized_Signature_Data epoch. */
        epoch: Uint8Array;

        /** HMAC_Personalized_Signature_Data counter. */
        counter: number;

        /** HMAC_Personalized_Signature_Data expires_at. */
        expires_at: number;

        /** HMAC_Personalized_Signature_Data tag. */
        tag: Uint8Array;

        /**
         * Encodes the specified HMAC_Personalized_Signature_Data message. Does not implicitly {@link Signatures.HMAC_Personalized_Signature_Data.verify|verify} messages.
         * @param m HMAC_Personalized_Signature_Data message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.HMAC_Personalized_Signature_Data.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HMAC_Personalized_Signature_Data message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.HMAC_Personalized_Signature_Data & Signatures.HMAC_Personalized_Signature_Data.$Shape} HMAC_Personalized_Signature_Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.HMAC_Personalized_Signature_Data & Signatures.HMAC_Personalized_Signature_Data.$Shape;

        /**
         * Gets the type url for HMAC_Personalized_Signature_Data
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HMAC_Personalized_Signature_Data {

        /** Properties of a HMAC_Personalized_Signature_Data. */
        interface $Properties {

            /** HMAC_Personalized_Signature_Data epoch */
            epoch?: (Uint8Array|null);

            /** HMAC_Personalized_Signature_Data counter */
            counter?: (number|null);

            /** HMAC_Personalized_Signature_Data expires_at */
            expires_at?: (number|null);

            /** HMAC_Personalized_Signature_Data tag */
            tag?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HMAC_Personalized_Signature_Data. */
        type $Shape = Signatures.HMAC_Personalized_Signature_Data.$Properties;
    }

    /**
     * Properties of a SignatureData.
     * @deprecated Use Signatures.SignatureData.$Properties instead.
     */
    interface ISignatureData extends Signatures.SignatureData.$Properties {
    }

    /** Represents a SignatureData. */
    class SignatureData {

        /**
         * Constructs a new SignatureData.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.SignatureData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SignatureData signer_identity. */
        signer_identity?: (Signatures.KeyIdentity.$Properties|null);

        /** SignatureData AES_GCM_Personalized_data. */
        AES_GCM_Personalized_data?: (Signatures.AES_GCM_Personalized_Signature_Data.$Properties|null);

        /** SignatureData session_info_tag. */
        session_info_tag?: (Signatures.HMAC_Signature_Data.$Properties|null);

        /** SignatureData HMAC_Personalized_data. */
        HMAC_Personalized_data?: (Signatures.HMAC_Personalized_Signature_Data.$Properties|null);

        /** SignatureData AES_GCM_Response_data. */
        AES_GCM_Response_data?: (Signatures.AES_GCM_Response_Signature_Data.$Properties|null);

        /** SignatureData sig_type. */
        sig_type?: ("AES_GCM_Personalized_data"|"session_info_tag"|"HMAC_Personalized_data"|"AES_GCM_Response_data");

        /**
         * Encodes the specified SignatureData message. Does not implicitly {@link Signatures.SignatureData.verify|verify} messages.
         * @param m SignatureData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.SignatureData.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignatureData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.SignatureData & Signatures.SignatureData.$Shape} SignatureData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.SignatureData & Signatures.SignatureData.$Shape;

        /**
         * Gets the type url for SignatureData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SignatureData {

        /** Properties of a SignatureData. */
        interface $Properties {

            /** SignatureData signer_identity */
            signer_identity?: (Signatures.KeyIdentity.$Properties|null);

            /** SignatureData AES_GCM_Personalized_data */
            AES_GCM_Personalized_data?: (Signatures.AES_GCM_Personalized_Signature_Data.$Properties|null);

            /** SignatureData session_info_tag */
            session_info_tag?: (Signatures.HMAC_Signature_Data.$Properties|null);

            /** SignatureData HMAC_Personalized_data */
            HMAC_Personalized_data?: (Signatures.HMAC_Personalized_Signature_Data.$Properties|null);

            /** SignatureData AES_GCM_Response_data */
            AES_GCM_Response_data?: (Signatures.AES_GCM_Response_Signature_Data.$Properties|null);

            /** SignatureData sig_type */
            sig_type?: ("AES_GCM_Personalized_data"|"session_info_tag"|"HMAC_Personalized_data"|"AES_GCM_Response_data");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a SignatureData. */
        type $Shape = {
          signer_identity?: Signatures.KeyIdentity.$Shape|null;
          AES_GCM_Personalized_data?: Signatures.AES_GCM_Personalized_Signature_Data.$Shape|null;
          session_info_tag?: Signatures.HMAC_Signature_Data.$Shape|null;
          HMAC_Personalized_data?: Signatures.HMAC_Personalized_Signature_Data.$Shape|null;
          AES_GCM_Response_data?: Signatures.AES_GCM_Response_Signature_Data.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sig_type?: undefined; AES_GCM_Personalized_data?: null; session_info_tag?: null; HMAC_Personalized_data?: null; AES_GCM_Response_data?: null }|{ sig_type?: "AES_GCM_Personalized_data"; AES_GCM_Personalized_data: Signatures.AES_GCM_Personalized_Signature_Data.$Shape; session_info_tag?: null; HMAC_Personalized_data?: null; AES_GCM_Response_data?: null }|{ sig_type?: "session_info_tag"; AES_GCM_Personalized_data?: null; session_info_tag: Signatures.HMAC_Signature_Data.$Shape; HMAC_Personalized_data?: null; AES_GCM_Response_data?: null }|{ sig_type?: "HMAC_Personalized_data"; AES_GCM_Personalized_data?: null; session_info_tag?: null; HMAC_Personalized_data: Signatures.HMAC_Personalized_Signature_Data.$Shape; AES_GCM_Response_data?: null }|{ sig_type?: "AES_GCM_Response_data"; AES_GCM_Personalized_data?: null; session_info_tag?: null; HMAC_Personalized_data?: null; AES_GCM_Response_data: Signatures.AES_GCM_Response_Signature_Data.$Shape })
        );
    }

    /**
     * Properties of a GetSessionInfoRequest.
     * @deprecated Use Signatures.GetSessionInfoRequest.$Properties instead.
     */
    interface IGetSessionInfoRequest extends Signatures.GetSessionInfoRequest.$Properties {
    }

    /** Represents a GetSessionInfoRequest. */
    class GetSessionInfoRequest {

        /**
         * Constructs a new GetSessionInfoRequest.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.GetSessionInfoRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetSessionInfoRequest key_identity. */
        key_identity?: (Signatures.KeyIdentity.$Properties|null);

        /**
         * Encodes the specified GetSessionInfoRequest message. Does not implicitly {@link Signatures.GetSessionInfoRequest.verify|verify} messages.
         * @param m GetSessionInfoRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.GetSessionInfoRequest.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSessionInfoRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.GetSessionInfoRequest & Signatures.GetSessionInfoRequest.$Shape} GetSessionInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.GetSessionInfoRequest & Signatures.GetSessionInfoRequest.$Shape;

        /**
         * Gets the type url for GetSessionInfoRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetSessionInfoRequest {

        /** Properties of a GetSessionInfoRequest. */
        interface $Properties {

            /** GetSessionInfoRequest key_identity */
            key_identity?: (Signatures.KeyIdentity.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetSessionInfoRequest. */
        type $Shape = {
          key_identity?: Signatures.KeyIdentity.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /** Session_Info_Status enum. */
    enum Session_Info_Status {

        /** SESSION_INFO_STATUS_OK value */
        SESSION_INFO_STATUS_OK = 0,

        /** SESSION_INFO_STATUS_KEY_NOT_ON_WHITELIST value */
        SESSION_INFO_STATUS_KEY_NOT_ON_WHITELIST = 1
    }

    /**
     * Properties of a SessionInfo.
     * @deprecated Use Signatures.SessionInfo.$Properties instead.
     */
    interface ISessionInfo extends Signatures.SessionInfo.$Properties {
    }

    /** Represents a SessionInfo. */
    class SessionInfo {

        /**
         * Constructs a new SessionInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Signatures.SessionInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SessionInfo counter. */
        counter: number;

        /** SessionInfo publicKey. */
        publicKey: Uint8Array;

        /** SessionInfo epoch. */
        epoch: Uint8Array;

        /** SessionInfo clock_time. */
        clock_time: number;

        /** SessionInfo status. */
        status: Signatures.Session_Info_Status;

        /** SessionInfo handle. */
        handle: number;

        /**
         * Encodes the specified SessionInfo message. Does not implicitly {@link Signatures.SessionInfo.verify|verify} messages.
         * @param m SessionInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Signatures.SessionInfo.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Signatures.SessionInfo & Signatures.SessionInfo.$Shape} SessionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Signatures.SessionInfo & Signatures.SessionInfo.$Shape;

        /**
         * Gets the type url for SessionInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SessionInfo {

        /** Properties of a SessionInfo. */
        interface $Properties {

            /** SessionInfo counter */
            counter?: (number|null);

            /** SessionInfo publicKey */
            publicKey?: (Uint8Array|null);

            /** SessionInfo epoch */
            epoch?: (Uint8Array|null);

            /** SessionInfo clock_time */
            clock_time?: (number|null);

            /** SessionInfo status */
            status?: (Signatures.Session_Info_Status|null);

            /** SessionInfo handle */
            handle?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SessionInfo. */
        type $Shape = Signatures.SessionInfo.$Properties;
    }
}

/** Namespace CarServer. */
export namespace CarServer {

    /**
     * Properties of an Action.
     * @deprecated Use CarServer.Action.$Properties instead.
     */
    interface IAction extends CarServer.Action.$Properties {
    }

    /** Represents an Action. */
    class Action {

        /**
         * Constructs a new Action.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.Action.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Action vehicleAction. */
        vehicleAction?: (CarServer.VehicleAction.$Properties|null);

        /** Action action_msg. */
        action_msg?: "vehicleAction";

        /**
         * Encodes the specified Action message. Does not implicitly {@link CarServer.Action.verify|verify} messages.
         * @param m Action message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.Action.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.Action & CarServer.Action.$Shape} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.Action & CarServer.Action.$Shape;

        /**
         * Gets the type url for Action
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Action {

        /** Properties of an Action. */
        interface $Properties {

            /** Action vehicleAction */
            vehicleAction?: (CarServer.VehicleAction.$Properties|null);

            /** Action action_msg */
            action_msg?: "vehicleAction";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an Action. */
        type $Shape = {
          vehicleAction?: CarServer.VehicleAction.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ action_msg?: undefined; vehicleAction?: null }|{ action_msg?: "vehicleAction"; vehicleAction: CarServer.VehicleAction.$Shape })
        );
    }

    /**
     * Properties of a VehicleAction.
     * @deprecated Use CarServer.VehicleAction.$Properties instead.
     */
    interface IVehicleAction extends CarServer.VehicleAction.$Properties {
    }

    /** Represents a VehicleAction. */
    class VehicleAction {

        /**
         * Constructs a new VehicleAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleAction getVehicleData. */
        getVehicleData?: (CarServer.GetVehicleData.$Properties|null);

        /** VehicleAction chargingSetLimitAction. */
        chargingSetLimitAction?: (CarServer.ChargingSetLimitAction.$Properties|null);

        /** VehicleAction chargingStartStopAction. */
        chargingStartStopAction?: (CarServer.ChargingStartStopAction.$Properties|null);

        /** VehicleAction drivingClearSpeedLimitPinAction. */
        drivingClearSpeedLimitPinAction?: (CarServer.DrivingClearSpeedLimitPinAction.$Properties|null);

        /** VehicleAction drivingSetSpeedLimitAction. */
        drivingSetSpeedLimitAction?: (CarServer.DrivingSetSpeedLimitAction.$Properties|null);

        /** VehicleAction drivingSpeedLimitAction. */
        drivingSpeedLimitAction?: (CarServer.DrivingSpeedLimitAction.$Properties|null);

        /** VehicleAction hvacAutoAction. */
        hvacAutoAction?: (CarServer.HvacAutoAction.$Properties|null);

        /** VehicleAction hvacSetPreconditioningMaxAction. */
        hvacSetPreconditioningMaxAction?: (CarServer.HvacSetPreconditioningMaxAction.$Properties|null);

        /** VehicleAction hvacSteeringWheelHeaterAction. */
        hvacSteeringWheelHeaterAction?: (CarServer.HvacSteeringWheelHeaterAction.$Properties|null);

        /** VehicleAction hvacTemperatureAdjustmentAction. */
        hvacTemperatureAdjustmentAction?: (CarServer.HvacTemperatureAdjustmentAction.$Properties|null);

        /** VehicleAction mediaPlayAction. */
        mediaPlayAction?: (CarServer.MediaPlayAction.$Properties|null);

        /** VehicleAction mediaUpdateVolume. */
        mediaUpdateVolume?: (CarServer.MediaUpdateVolume.$Properties|null);

        /** VehicleAction mediaNextFavorite. */
        mediaNextFavorite?: (CarServer.MediaNextFavorite.$Properties|null);

        /** VehicleAction mediaPreviousFavorite. */
        mediaPreviousFavorite?: (CarServer.MediaPreviousFavorite.$Properties|null);

        /** VehicleAction mediaNextTrack. */
        mediaNextTrack?: (CarServer.MediaNextTrack.$Properties|null);

        /** VehicleAction mediaPreviousTrack. */
        mediaPreviousTrack?: (CarServer.MediaPreviousTrack.$Properties|null);

        /** VehicleAction getNearbyChargingSites. */
        getNearbyChargingSites?: (CarServer.GetNearbyChargingSites.$Properties|null);

        /** VehicleAction vehicleControlCancelSoftwareUpdateAction. */
        vehicleControlCancelSoftwareUpdateAction?: (CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties|null);

        /** VehicleAction vehicleControlFlashLightsAction. */
        vehicleControlFlashLightsAction?: (CarServer.VehicleControlFlashLightsAction.$Properties|null);

        /** VehicleAction vehicleControlHonkHornAction. */
        vehicleControlHonkHornAction?: (CarServer.VehicleControlHonkHornAction.$Properties|null);

        /** VehicleAction vehicleControlResetValetPinAction. */
        vehicleControlResetValetPinAction?: (CarServer.VehicleControlResetValetPinAction.$Properties|null);

        /** VehicleAction vehicleControlScheduleSoftwareUpdateAction. */
        vehicleControlScheduleSoftwareUpdateAction?: (CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties|null);

        /** VehicleAction vehicleControlSetSentryModeAction. */
        vehicleControlSetSentryModeAction?: (CarServer.VehicleControlSetSentryModeAction.$Properties|null);

        /** VehicleAction vehicleControlSetValetModeAction. */
        vehicleControlSetValetModeAction?: (CarServer.VehicleControlSetValetModeAction.$Properties|null);

        /** VehicleAction vehicleControlSunroofOpenCloseAction. */
        vehicleControlSunroofOpenCloseAction?: (CarServer.VehicleControlSunroofOpenCloseAction.$Properties|null);

        /** VehicleAction vehicleControlTriggerHomelinkAction. */
        vehicleControlTriggerHomelinkAction?: (CarServer.VehicleControlTriggerHomelinkAction.$Properties|null);

        /** VehicleAction vehicleControlWindowAction. */
        vehicleControlWindowAction?: (CarServer.VehicleControlWindowAction.$Properties|null);

        /** VehicleAction hvacBioweaponModeAction. */
        hvacBioweaponModeAction?: (CarServer.HvacBioweaponModeAction.$Properties|null);

        /** VehicleAction hvacSeatHeaterActions. */
        hvacSeatHeaterActions?: (CarServer.HvacSeatHeaterActions.$Properties|null);

        /** VehicleAction scheduledChargingAction. */
        scheduledChargingAction?: (CarServer.ScheduledChargingAction.$Properties|null);

        /** VehicleAction scheduledDepartureAction. */
        scheduledDepartureAction?: (CarServer.ScheduledDepartureAction.$Properties|null);

        /** VehicleAction setChargingAmpsAction. */
        setChargingAmpsAction?: (CarServer.SetChargingAmpsAction.$Properties|null);

        /** VehicleAction hvacClimateKeeperAction. */
        hvacClimateKeeperAction?: (CarServer.HvacClimateKeeperAction.$Properties|null);

        /** VehicleAction ping. */
        ping?: (CarServer.Ping.$Properties|null);

        /** VehicleAction autoSeatClimateAction. */
        autoSeatClimateAction?: (CarServer.AutoSeatClimateAction.$Properties|null);

        /** VehicleAction hvacSeatCoolerActions. */
        hvacSeatCoolerActions?: (CarServer.HvacSeatCoolerActions.$Properties|null);

        /** VehicleAction setCabinOverheatProtectionAction. */
        setCabinOverheatProtectionAction?: (CarServer.SetCabinOverheatProtectionAction.$Properties|null);

        /** VehicleAction setVehicleNameAction. */
        setVehicleNameAction?: (CarServer.SetVehicleNameAction.$Properties|null);

        /** VehicleAction chargePortDoorClose. */
        chargePortDoorClose?: (CarServer.ChargePortDoorClose.$Properties|null);

        /** VehicleAction chargePortDoorOpen. */
        chargePortDoorOpen?: (CarServer.ChargePortDoorOpen.$Properties|null);

        /** VehicleAction guestModeAction. */
        guestModeAction?: (CarServer.VehicleState.GuestMode.$Properties|null);

        /** VehicleAction setCopTempAction. */
        setCopTempAction?: (CarServer.SetCopTempAction.$Properties|null);

        /** VehicleAction eraseUserDataAction. */
        eraseUserDataAction?: (CarServer.EraseUserDataAction.$Properties|null);

        /** VehicleAction vehicleControlSetPinToDriveAction. */
        vehicleControlSetPinToDriveAction?: (CarServer.VehicleControlSetPinToDriveAction.$Properties|null);

        /** VehicleAction vehicleControlResetPinToDriveAction. */
        vehicleControlResetPinToDriveAction?: (CarServer.VehicleControlResetPinToDriveAction.$Properties|null);

        /** VehicleAction drivingClearSpeedLimitPinAdminAction. */
        drivingClearSpeedLimitPinAdminAction?: (CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties|null);

        /** VehicleAction vehicleControlResetPinToDriveAdminAction. */
        vehicleControlResetPinToDriveAdminAction?: (CarServer.VehicleControlResetPinToDriveAdminAction.$Properties|null);

        /** VehicleAction addChargeScheduleAction. */
        addChargeScheduleAction?: (CarServer.ChargeSchedule.$Properties|null);

        /** VehicleAction removeChargeScheduleAction. */
        removeChargeScheduleAction?: (CarServer.RemoveChargeScheduleAction.$Properties|null);

        /** VehicleAction addPreconditionScheduleAction. */
        addPreconditionScheduleAction?: (CarServer.PreconditionSchedule.$Properties|null);

        /** VehicleAction removePreconditionScheduleAction. */
        removePreconditionScheduleAction?: (CarServer.RemovePreconditionScheduleAction.$Properties|null);

        /** VehicleAction batchRemovePreconditionSchedulesAction. */
        batchRemovePreconditionSchedulesAction?: (CarServer.BatchRemovePreconditionSchedulesAction.$Properties|null);

        /** VehicleAction batchRemoveChargeSchedulesAction. */
        batchRemoveChargeSchedulesAction?: (CarServer.BatchRemoveChargeSchedulesAction.$Properties|null);

        /** VehicleAction parentalControlsClearPinAction. */
        parentalControlsClearPinAction?: (CarServer.ParentalControlsClearPinAction.$Properties|null);

        /** VehicleAction parentalControlsClearPinAdminAction. */
        parentalControlsClearPinAdminAction?: (CarServer.ParentalControlsClearPinAdminAction.$Properties|null);

        /** VehicleAction parentalControlsAction. */
        parentalControlsAction?: (CarServer.ParentalControlsAction.$Properties|null);

        /** VehicleAction parentalControlsEnableSettingsAction. */
        parentalControlsEnableSettingsAction?: (CarServer.ParentalControlsEnableSettingsAction.$Properties|null);

        /** VehicleAction parentalControlsSetSpeedLimitAction. */
        parentalControlsSetSpeedLimitAction?: (CarServer.ParentalControlsSetSpeedLimitAction.$Properties|null);

        /** VehicleAction setLowPowerModeAction. */
        setLowPowerModeAction?: (CarServer.SetLowPowerModeAction.$Properties|null);

        /** VehicleAction setKeepAccessoryPowerModeAction. */
        setKeepAccessoryPowerModeAction?: (CarServer.SetKeepAccessoryPowerModeAction.$Properties|null);

        /** VehicleAction vehicle_action_msg. */
        vehicle_action_msg?: ("getVehicleData"|"chargingSetLimitAction"|"chargingStartStopAction"|"drivingClearSpeedLimitPinAction"|"drivingSetSpeedLimitAction"|"drivingSpeedLimitAction"|"hvacAutoAction"|"hvacSetPreconditioningMaxAction"|"hvacSteeringWheelHeaterAction"|"hvacTemperatureAdjustmentAction"|"mediaPlayAction"|"mediaUpdateVolume"|"mediaNextFavorite"|"mediaPreviousFavorite"|"mediaNextTrack"|"mediaPreviousTrack"|"getNearbyChargingSites"|"vehicleControlCancelSoftwareUpdateAction"|"vehicleControlFlashLightsAction"|"vehicleControlHonkHornAction"|"vehicleControlResetValetPinAction"|"vehicleControlScheduleSoftwareUpdateAction"|"vehicleControlSetSentryModeAction"|"vehicleControlSetValetModeAction"|"vehicleControlSunroofOpenCloseAction"|"vehicleControlTriggerHomelinkAction"|"vehicleControlWindowAction"|"hvacBioweaponModeAction"|"hvacSeatHeaterActions"|"scheduledChargingAction"|"scheduledDepartureAction"|"setChargingAmpsAction"|"hvacClimateKeeperAction"|"ping"|"autoSeatClimateAction"|"hvacSeatCoolerActions"|"setCabinOverheatProtectionAction"|"setVehicleNameAction"|"chargePortDoorClose"|"chargePortDoorOpen"|"guestModeAction"|"setCopTempAction"|"eraseUserDataAction"|"vehicleControlSetPinToDriveAction"|"vehicleControlResetPinToDriveAction"|"drivingClearSpeedLimitPinAdminAction"|"vehicleControlResetPinToDriveAdminAction"|"addChargeScheduleAction"|"removeChargeScheduleAction"|"addPreconditionScheduleAction"|"removePreconditionScheduleAction"|"batchRemovePreconditionSchedulesAction"|"batchRemoveChargeSchedulesAction"|"parentalControlsClearPinAction"|"parentalControlsClearPinAdminAction"|"parentalControlsAction"|"parentalControlsEnableSettingsAction"|"parentalControlsSetSpeedLimitAction"|"setLowPowerModeAction"|"setKeepAccessoryPowerModeAction");

        /**
         * Encodes the specified VehicleAction message. Does not implicitly {@link CarServer.VehicleAction.verify|verify} messages.
         * @param m VehicleAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleAction & CarServer.VehicleAction.$Shape} VehicleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleAction & CarServer.VehicleAction.$Shape;

        /**
         * Gets the type url for VehicleAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleAction {

        /** Properties of a VehicleAction. */
        interface $Properties {

            /** VehicleAction getVehicleData */
            getVehicleData?: (CarServer.GetVehicleData.$Properties|null);

            /** VehicleAction chargingSetLimitAction */
            chargingSetLimitAction?: (CarServer.ChargingSetLimitAction.$Properties|null);

            /** VehicleAction chargingStartStopAction */
            chargingStartStopAction?: (CarServer.ChargingStartStopAction.$Properties|null);

            /** VehicleAction drivingClearSpeedLimitPinAction */
            drivingClearSpeedLimitPinAction?: (CarServer.DrivingClearSpeedLimitPinAction.$Properties|null);

            /** VehicleAction drivingSetSpeedLimitAction */
            drivingSetSpeedLimitAction?: (CarServer.DrivingSetSpeedLimitAction.$Properties|null);

            /** VehicleAction drivingSpeedLimitAction */
            drivingSpeedLimitAction?: (CarServer.DrivingSpeedLimitAction.$Properties|null);

            /** VehicleAction hvacAutoAction */
            hvacAutoAction?: (CarServer.HvacAutoAction.$Properties|null);

            /** VehicleAction hvacSetPreconditioningMaxAction */
            hvacSetPreconditioningMaxAction?: (CarServer.HvacSetPreconditioningMaxAction.$Properties|null);

            /** VehicleAction hvacSteeringWheelHeaterAction */
            hvacSteeringWheelHeaterAction?: (CarServer.HvacSteeringWheelHeaterAction.$Properties|null);

            /** VehicleAction hvacTemperatureAdjustmentAction */
            hvacTemperatureAdjustmentAction?: (CarServer.HvacTemperatureAdjustmentAction.$Properties|null);

            /** VehicleAction mediaPlayAction */
            mediaPlayAction?: (CarServer.MediaPlayAction.$Properties|null);

            /** VehicleAction mediaUpdateVolume */
            mediaUpdateVolume?: (CarServer.MediaUpdateVolume.$Properties|null);

            /** VehicleAction mediaNextFavorite */
            mediaNextFavorite?: (CarServer.MediaNextFavorite.$Properties|null);

            /** VehicleAction mediaPreviousFavorite */
            mediaPreviousFavorite?: (CarServer.MediaPreviousFavorite.$Properties|null);

            /** VehicleAction mediaNextTrack */
            mediaNextTrack?: (CarServer.MediaNextTrack.$Properties|null);

            /** VehicleAction mediaPreviousTrack */
            mediaPreviousTrack?: (CarServer.MediaPreviousTrack.$Properties|null);

            /** VehicleAction getNearbyChargingSites */
            getNearbyChargingSites?: (CarServer.GetNearbyChargingSites.$Properties|null);

            /** VehicleAction vehicleControlCancelSoftwareUpdateAction */
            vehicleControlCancelSoftwareUpdateAction?: (CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties|null);

            /** VehicleAction vehicleControlFlashLightsAction */
            vehicleControlFlashLightsAction?: (CarServer.VehicleControlFlashLightsAction.$Properties|null);

            /** VehicleAction vehicleControlHonkHornAction */
            vehicleControlHonkHornAction?: (CarServer.VehicleControlHonkHornAction.$Properties|null);

            /** VehicleAction vehicleControlResetValetPinAction */
            vehicleControlResetValetPinAction?: (CarServer.VehicleControlResetValetPinAction.$Properties|null);

            /** VehicleAction vehicleControlScheduleSoftwareUpdateAction */
            vehicleControlScheduleSoftwareUpdateAction?: (CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties|null);

            /** VehicleAction vehicleControlSetSentryModeAction */
            vehicleControlSetSentryModeAction?: (CarServer.VehicleControlSetSentryModeAction.$Properties|null);

            /** VehicleAction vehicleControlSetValetModeAction */
            vehicleControlSetValetModeAction?: (CarServer.VehicleControlSetValetModeAction.$Properties|null);

            /** VehicleAction vehicleControlSunroofOpenCloseAction */
            vehicleControlSunroofOpenCloseAction?: (CarServer.VehicleControlSunroofOpenCloseAction.$Properties|null);

            /** VehicleAction vehicleControlTriggerHomelinkAction */
            vehicleControlTriggerHomelinkAction?: (CarServer.VehicleControlTriggerHomelinkAction.$Properties|null);

            /** VehicleAction vehicleControlWindowAction */
            vehicleControlWindowAction?: (CarServer.VehicleControlWindowAction.$Properties|null);

            /** VehicleAction hvacBioweaponModeAction */
            hvacBioweaponModeAction?: (CarServer.HvacBioweaponModeAction.$Properties|null);

            /** VehicleAction hvacSeatHeaterActions */
            hvacSeatHeaterActions?: (CarServer.HvacSeatHeaterActions.$Properties|null);

            /** VehicleAction scheduledChargingAction */
            scheduledChargingAction?: (CarServer.ScheduledChargingAction.$Properties|null);

            /** VehicleAction scheduledDepartureAction */
            scheduledDepartureAction?: (CarServer.ScheduledDepartureAction.$Properties|null);

            /** VehicleAction setChargingAmpsAction */
            setChargingAmpsAction?: (CarServer.SetChargingAmpsAction.$Properties|null);

            /** VehicleAction hvacClimateKeeperAction */
            hvacClimateKeeperAction?: (CarServer.HvacClimateKeeperAction.$Properties|null);

            /** VehicleAction ping */
            ping?: (CarServer.Ping.$Properties|null);

            /** VehicleAction autoSeatClimateAction */
            autoSeatClimateAction?: (CarServer.AutoSeatClimateAction.$Properties|null);

            /** VehicleAction hvacSeatCoolerActions */
            hvacSeatCoolerActions?: (CarServer.HvacSeatCoolerActions.$Properties|null);

            /** VehicleAction setCabinOverheatProtectionAction */
            setCabinOverheatProtectionAction?: (CarServer.SetCabinOverheatProtectionAction.$Properties|null);

            /** VehicleAction setVehicleNameAction */
            setVehicleNameAction?: (CarServer.SetVehicleNameAction.$Properties|null);

            /** VehicleAction chargePortDoorClose */
            chargePortDoorClose?: (CarServer.ChargePortDoorClose.$Properties|null);

            /** VehicleAction chargePortDoorOpen */
            chargePortDoorOpen?: (CarServer.ChargePortDoorOpen.$Properties|null);

            /** VehicleAction guestModeAction */
            guestModeAction?: (CarServer.VehicleState.GuestMode.$Properties|null);

            /** VehicleAction setCopTempAction */
            setCopTempAction?: (CarServer.SetCopTempAction.$Properties|null);

            /** VehicleAction eraseUserDataAction */
            eraseUserDataAction?: (CarServer.EraseUserDataAction.$Properties|null);

            /** VehicleAction vehicleControlSetPinToDriveAction */
            vehicleControlSetPinToDriveAction?: (CarServer.VehicleControlSetPinToDriveAction.$Properties|null);

            /** VehicleAction vehicleControlResetPinToDriveAction */
            vehicleControlResetPinToDriveAction?: (CarServer.VehicleControlResetPinToDriveAction.$Properties|null);

            /** VehicleAction drivingClearSpeedLimitPinAdminAction */
            drivingClearSpeedLimitPinAdminAction?: (CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties|null);

            /** VehicleAction vehicleControlResetPinToDriveAdminAction */
            vehicleControlResetPinToDriveAdminAction?: (CarServer.VehicleControlResetPinToDriveAdminAction.$Properties|null);

            /** VehicleAction addChargeScheduleAction */
            addChargeScheduleAction?: (CarServer.ChargeSchedule.$Properties|null);

            /** VehicleAction removeChargeScheduleAction */
            removeChargeScheduleAction?: (CarServer.RemoveChargeScheduleAction.$Properties|null);

            /** VehicleAction addPreconditionScheduleAction */
            addPreconditionScheduleAction?: (CarServer.PreconditionSchedule.$Properties|null);

            /** VehicleAction removePreconditionScheduleAction */
            removePreconditionScheduleAction?: (CarServer.RemovePreconditionScheduleAction.$Properties|null);

            /** VehicleAction batchRemovePreconditionSchedulesAction */
            batchRemovePreconditionSchedulesAction?: (CarServer.BatchRemovePreconditionSchedulesAction.$Properties|null);

            /** VehicleAction batchRemoveChargeSchedulesAction */
            batchRemoveChargeSchedulesAction?: (CarServer.BatchRemoveChargeSchedulesAction.$Properties|null);

            /** VehicleAction parentalControlsClearPinAction */
            parentalControlsClearPinAction?: (CarServer.ParentalControlsClearPinAction.$Properties|null);

            /** VehicleAction parentalControlsClearPinAdminAction */
            parentalControlsClearPinAdminAction?: (CarServer.ParentalControlsClearPinAdminAction.$Properties|null);

            /** VehicleAction parentalControlsAction */
            parentalControlsAction?: (CarServer.ParentalControlsAction.$Properties|null);

            /** VehicleAction parentalControlsEnableSettingsAction */
            parentalControlsEnableSettingsAction?: (CarServer.ParentalControlsEnableSettingsAction.$Properties|null);

            /** VehicleAction parentalControlsSetSpeedLimitAction */
            parentalControlsSetSpeedLimitAction?: (CarServer.ParentalControlsSetSpeedLimitAction.$Properties|null);

            /** VehicleAction setLowPowerModeAction */
            setLowPowerModeAction?: (CarServer.SetLowPowerModeAction.$Properties|null);

            /** VehicleAction setKeepAccessoryPowerModeAction */
            setKeepAccessoryPowerModeAction?: (CarServer.SetKeepAccessoryPowerModeAction.$Properties|null);

            /** VehicleAction vehicle_action_msg */
            vehicle_action_msg?: ("getVehicleData"|"chargingSetLimitAction"|"chargingStartStopAction"|"drivingClearSpeedLimitPinAction"|"drivingSetSpeedLimitAction"|"drivingSpeedLimitAction"|"hvacAutoAction"|"hvacSetPreconditioningMaxAction"|"hvacSteeringWheelHeaterAction"|"hvacTemperatureAdjustmentAction"|"mediaPlayAction"|"mediaUpdateVolume"|"mediaNextFavorite"|"mediaPreviousFavorite"|"mediaNextTrack"|"mediaPreviousTrack"|"getNearbyChargingSites"|"vehicleControlCancelSoftwareUpdateAction"|"vehicleControlFlashLightsAction"|"vehicleControlHonkHornAction"|"vehicleControlResetValetPinAction"|"vehicleControlScheduleSoftwareUpdateAction"|"vehicleControlSetSentryModeAction"|"vehicleControlSetValetModeAction"|"vehicleControlSunroofOpenCloseAction"|"vehicleControlTriggerHomelinkAction"|"vehicleControlWindowAction"|"hvacBioweaponModeAction"|"hvacSeatHeaterActions"|"scheduledChargingAction"|"scheduledDepartureAction"|"setChargingAmpsAction"|"hvacClimateKeeperAction"|"ping"|"autoSeatClimateAction"|"hvacSeatCoolerActions"|"setCabinOverheatProtectionAction"|"setVehicleNameAction"|"chargePortDoorClose"|"chargePortDoorOpen"|"guestModeAction"|"setCopTempAction"|"eraseUserDataAction"|"vehicleControlSetPinToDriveAction"|"vehicleControlResetPinToDriveAction"|"drivingClearSpeedLimitPinAdminAction"|"vehicleControlResetPinToDriveAdminAction"|"addChargeScheduleAction"|"removeChargeScheduleAction"|"addPreconditionScheduleAction"|"removePreconditionScheduleAction"|"batchRemovePreconditionSchedulesAction"|"batchRemoveChargeSchedulesAction"|"parentalControlsClearPinAction"|"parentalControlsClearPinAdminAction"|"parentalControlsAction"|"parentalControlsEnableSettingsAction"|"parentalControlsSetSpeedLimitAction"|"setLowPowerModeAction"|"setKeepAccessoryPowerModeAction");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a VehicleAction. */
        type $Shape = {
          getVehicleData?: CarServer.GetVehicleData.$Shape|null;
          chargingSetLimitAction?: CarServer.ChargingSetLimitAction.$Shape|null;
          chargingStartStopAction?: CarServer.ChargingStartStopAction.$Shape|null;
          drivingClearSpeedLimitPinAction?: CarServer.DrivingClearSpeedLimitPinAction.$Shape|null;
          drivingSetSpeedLimitAction?: CarServer.DrivingSetSpeedLimitAction.$Shape|null;
          drivingSpeedLimitAction?: CarServer.DrivingSpeedLimitAction.$Shape|null;
          hvacAutoAction?: CarServer.HvacAutoAction.$Shape|null;
          hvacSetPreconditioningMaxAction?: CarServer.HvacSetPreconditioningMaxAction.$Shape|null;
          hvacSteeringWheelHeaterAction?: CarServer.HvacSteeringWheelHeaterAction.$Shape|null;
          hvacTemperatureAdjustmentAction?: CarServer.HvacTemperatureAdjustmentAction.$Shape|null;
          mediaPlayAction?: CarServer.MediaPlayAction.$Shape|null;
          mediaUpdateVolume?: CarServer.MediaUpdateVolume.$Shape|null;
          mediaNextFavorite?: CarServer.MediaNextFavorite.$Shape|null;
          mediaPreviousFavorite?: CarServer.MediaPreviousFavorite.$Shape|null;
          mediaNextTrack?: CarServer.MediaNextTrack.$Shape|null;
          mediaPreviousTrack?: CarServer.MediaPreviousTrack.$Shape|null;
          getNearbyChargingSites?: CarServer.GetNearbyChargingSites.$Shape|null;
          vehicleControlCancelSoftwareUpdateAction?: CarServer.VehicleControlCancelSoftwareUpdateAction.$Shape|null;
          vehicleControlFlashLightsAction?: CarServer.VehicleControlFlashLightsAction.$Shape|null;
          vehicleControlHonkHornAction?: CarServer.VehicleControlHonkHornAction.$Shape|null;
          vehicleControlResetValetPinAction?: CarServer.VehicleControlResetValetPinAction.$Shape|null;
          vehicleControlScheduleSoftwareUpdateAction?: CarServer.VehicleControlScheduleSoftwareUpdateAction.$Shape|null;
          vehicleControlSetSentryModeAction?: CarServer.VehicleControlSetSentryModeAction.$Shape|null;
          vehicleControlSetValetModeAction?: CarServer.VehicleControlSetValetModeAction.$Shape|null;
          vehicleControlSunroofOpenCloseAction?: CarServer.VehicleControlSunroofOpenCloseAction.$Shape|null;
          vehicleControlTriggerHomelinkAction?: CarServer.VehicleControlTriggerHomelinkAction.$Shape|null;
          vehicleControlWindowAction?: CarServer.VehicleControlWindowAction.$Shape|null;
          hvacBioweaponModeAction?: CarServer.HvacBioweaponModeAction.$Shape|null;
          hvacSeatHeaterActions?: CarServer.HvacSeatHeaterActions.$Shape|null;
          scheduledChargingAction?: CarServer.ScheduledChargingAction.$Shape|null;
          scheduledDepartureAction?: CarServer.ScheduledDepartureAction.$Shape|null;
          setChargingAmpsAction?: CarServer.SetChargingAmpsAction.$Shape|null;
          hvacClimateKeeperAction?: CarServer.HvacClimateKeeperAction.$Shape|null;
          ping?: CarServer.Ping.$Shape|null;
          autoSeatClimateAction?: CarServer.AutoSeatClimateAction.$Shape|null;
          hvacSeatCoolerActions?: CarServer.HvacSeatCoolerActions.$Shape|null;
          setCabinOverheatProtectionAction?: CarServer.SetCabinOverheatProtectionAction.$Shape|null;
          setVehicleNameAction?: CarServer.SetVehicleNameAction.$Shape|null;
          chargePortDoorClose?: CarServer.ChargePortDoorClose.$Shape|null;
          chargePortDoorOpen?: CarServer.ChargePortDoorOpen.$Shape|null;
          guestModeAction?: CarServer.VehicleState.GuestMode.$Shape|null;
          setCopTempAction?: CarServer.SetCopTempAction.$Shape|null;
          eraseUserDataAction?: CarServer.EraseUserDataAction.$Shape|null;
          vehicleControlSetPinToDriveAction?: CarServer.VehicleControlSetPinToDriveAction.$Shape|null;
          vehicleControlResetPinToDriveAction?: CarServer.VehicleControlResetPinToDriveAction.$Shape|null;
          drivingClearSpeedLimitPinAdminAction?: CarServer.DrivingClearSpeedLimitPinAdminAction.$Shape|null;
          vehicleControlResetPinToDriveAdminAction?: CarServer.VehicleControlResetPinToDriveAdminAction.$Shape|null;
          addChargeScheduleAction?: CarServer.ChargeSchedule.$Shape|null;
          removeChargeScheduleAction?: CarServer.RemoveChargeScheduleAction.$Shape|null;
          addPreconditionScheduleAction?: CarServer.PreconditionSchedule.$Shape|null;
          removePreconditionScheduleAction?: CarServer.RemovePreconditionScheduleAction.$Shape|null;
          batchRemovePreconditionSchedulesAction?: CarServer.BatchRemovePreconditionSchedulesAction.$Shape|null;
          batchRemoveChargeSchedulesAction?: CarServer.BatchRemoveChargeSchedulesAction.$Shape|null;
          parentalControlsClearPinAction?: CarServer.ParentalControlsClearPinAction.$Shape|null;
          parentalControlsClearPinAdminAction?: CarServer.ParentalControlsClearPinAdminAction.$Shape|null;
          parentalControlsAction?: CarServer.ParentalControlsAction.$Shape|null;
          parentalControlsEnableSettingsAction?: CarServer.ParentalControlsEnableSettingsAction.$Shape|null;
          parentalControlsSetSpeedLimitAction?: CarServer.ParentalControlsSetSpeedLimitAction.$Shape|null;
          setLowPowerModeAction?: CarServer.SetLowPowerModeAction.$Shape|null;
          setKeepAccessoryPowerModeAction?: CarServer.SetKeepAccessoryPowerModeAction.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ vehicle_action_msg?: undefined; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "getVehicleData"; getVehicleData: CarServer.GetVehicleData.$Shape; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "chargingSetLimitAction"; getVehicleData?: null; chargingSetLimitAction: CarServer.ChargingSetLimitAction.$Shape; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "chargingStartStopAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction: CarServer.ChargingStartStopAction.$Shape; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "drivingClearSpeedLimitPinAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction: CarServer.DrivingClearSpeedLimitPinAction.$Shape; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "drivingSetSpeedLimitAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction: CarServer.DrivingSetSpeedLimitAction.$Shape; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "drivingSpeedLimitAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction: CarServer.DrivingSpeedLimitAction.$Shape; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacAutoAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction: CarServer.HvacAutoAction.$Shape; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacSetPreconditioningMaxAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction: CarServer.HvacSetPreconditioningMaxAction.$Shape; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacSteeringWheelHeaterAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction: CarServer.HvacSteeringWheelHeaterAction.$Shape; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacTemperatureAdjustmentAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction: CarServer.HvacTemperatureAdjustmentAction.$Shape; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "mediaPlayAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction: CarServer.MediaPlayAction.$Shape; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "mediaUpdateVolume"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume: CarServer.MediaUpdateVolume.$Shape; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "mediaNextFavorite"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite: CarServer.MediaNextFavorite.$Shape; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "mediaPreviousFavorite"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite: CarServer.MediaPreviousFavorite.$Shape; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "mediaNextTrack"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack: CarServer.MediaNextTrack.$Shape; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "mediaPreviousTrack"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack: CarServer.MediaPreviousTrack.$Shape; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "getNearbyChargingSites"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites: CarServer.GetNearbyChargingSites.$Shape; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlCancelSoftwareUpdateAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction: CarServer.VehicleControlCancelSoftwareUpdateAction.$Shape; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlFlashLightsAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction: CarServer.VehicleControlFlashLightsAction.$Shape; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlHonkHornAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction: CarServer.VehicleControlHonkHornAction.$Shape; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlResetValetPinAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction: CarServer.VehicleControlResetValetPinAction.$Shape; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlScheduleSoftwareUpdateAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction: CarServer.VehicleControlScheduleSoftwareUpdateAction.$Shape; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlSetSentryModeAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction: CarServer.VehicleControlSetSentryModeAction.$Shape; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlSetValetModeAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction: CarServer.VehicleControlSetValetModeAction.$Shape; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlSunroofOpenCloseAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction: CarServer.VehicleControlSunroofOpenCloseAction.$Shape; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlTriggerHomelinkAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction: CarServer.VehicleControlTriggerHomelinkAction.$Shape; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlWindowAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction: CarServer.VehicleControlWindowAction.$Shape; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacBioweaponModeAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction: CarServer.HvacBioweaponModeAction.$Shape; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacSeatHeaterActions"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions: CarServer.HvacSeatHeaterActions.$Shape; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "scheduledChargingAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction: CarServer.ScheduledChargingAction.$Shape; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "scheduledDepartureAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction: CarServer.ScheduledDepartureAction.$Shape; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "setChargingAmpsAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction: CarServer.SetChargingAmpsAction.$Shape; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacClimateKeeperAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction: CarServer.HvacClimateKeeperAction.$Shape; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "ping"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping: CarServer.Ping.$Shape; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "autoSeatClimateAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction: CarServer.AutoSeatClimateAction.$Shape; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "hvacSeatCoolerActions"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions: CarServer.HvacSeatCoolerActions.$Shape; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "setCabinOverheatProtectionAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction: CarServer.SetCabinOverheatProtectionAction.$Shape; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "setVehicleNameAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction: CarServer.SetVehicleNameAction.$Shape; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "chargePortDoorClose"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose: CarServer.ChargePortDoorClose.$Shape; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "chargePortDoorOpen"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen: CarServer.ChargePortDoorOpen.$Shape; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "guestModeAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction: CarServer.VehicleState.GuestMode.$Shape; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "setCopTempAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction: CarServer.SetCopTempAction.$Shape; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "eraseUserDataAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction: CarServer.EraseUserDataAction.$Shape; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlSetPinToDriveAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction: CarServer.VehicleControlSetPinToDriveAction.$Shape; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlResetPinToDriveAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction: CarServer.VehicleControlResetPinToDriveAction.$Shape; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "drivingClearSpeedLimitPinAdminAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction: CarServer.DrivingClearSpeedLimitPinAdminAction.$Shape; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "vehicleControlResetPinToDriveAdminAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction: CarServer.VehicleControlResetPinToDriveAdminAction.$Shape; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "addChargeScheduleAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction: CarServer.ChargeSchedule.$Shape; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "removeChargeScheduleAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction: CarServer.RemoveChargeScheduleAction.$Shape; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "addPreconditionScheduleAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction: CarServer.PreconditionSchedule.$Shape; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "removePreconditionScheduleAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction: CarServer.RemovePreconditionScheduleAction.$Shape; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "batchRemovePreconditionSchedulesAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction: CarServer.BatchRemovePreconditionSchedulesAction.$Shape; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "batchRemoveChargeSchedulesAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction: CarServer.BatchRemoveChargeSchedulesAction.$Shape; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "parentalControlsClearPinAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction: CarServer.ParentalControlsClearPinAction.$Shape; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "parentalControlsClearPinAdminAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction: CarServer.ParentalControlsClearPinAdminAction.$Shape; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "parentalControlsAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction: CarServer.ParentalControlsAction.$Shape; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "parentalControlsEnableSettingsAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction: CarServer.ParentalControlsEnableSettingsAction.$Shape; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "parentalControlsSetSpeedLimitAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction: CarServer.ParentalControlsSetSpeedLimitAction.$Shape; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "setLowPowerModeAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction: CarServer.SetLowPowerModeAction.$Shape; setKeepAccessoryPowerModeAction?: null }|{ vehicle_action_msg?: "setKeepAccessoryPowerModeAction"; getVehicleData?: null; chargingSetLimitAction?: null; chargingStartStopAction?: null; drivingClearSpeedLimitPinAction?: null; drivingSetSpeedLimitAction?: null; drivingSpeedLimitAction?: null; hvacAutoAction?: null; hvacSetPreconditioningMaxAction?: null; hvacSteeringWheelHeaterAction?: null; hvacTemperatureAdjustmentAction?: null; mediaPlayAction?: null; mediaUpdateVolume?: null; mediaNextFavorite?: null; mediaPreviousFavorite?: null; mediaNextTrack?: null; mediaPreviousTrack?: null; getNearbyChargingSites?: null; vehicleControlCancelSoftwareUpdateAction?: null; vehicleControlFlashLightsAction?: null; vehicleControlHonkHornAction?: null; vehicleControlResetValetPinAction?: null; vehicleControlScheduleSoftwareUpdateAction?: null; vehicleControlSetSentryModeAction?: null; vehicleControlSetValetModeAction?: null; vehicleControlSunroofOpenCloseAction?: null; vehicleControlTriggerHomelinkAction?: null; vehicleControlWindowAction?: null; hvacBioweaponModeAction?: null; hvacSeatHeaterActions?: null; scheduledChargingAction?: null; scheduledDepartureAction?: null; setChargingAmpsAction?: null; hvacClimateKeeperAction?: null; ping?: null; autoSeatClimateAction?: null; hvacSeatCoolerActions?: null; setCabinOverheatProtectionAction?: null; setVehicleNameAction?: null; chargePortDoorClose?: null; chargePortDoorOpen?: null; guestModeAction?: null; setCopTempAction?: null; eraseUserDataAction?: null; vehicleControlSetPinToDriveAction?: null; vehicleControlResetPinToDriveAction?: null; drivingClearSpeedLimitPinAdminAction?: null; vehicleControlResetPinToDriveAdminAction?: null; addChargeScheduleAction?: null; removeChargeScheduleAction?: null; addPreconditionScheduleAction?: null; removePreconditionScheduleAction?: null; batchRemovePreconditionSchedulesAction?: null; batchRemoveChargeSchedulesAction?: null; parentalControlsClearPinAction?: null; parentalControlsClearPinAdminAction?: null; parentalControlsAction?: null; parentalControlsEnableSettingsAction?: null; parentalControlsSetSpeedLimitAction?: null; setLowPowerModeAction?: null; setKeepAccessoryPowerModeAction: CarServer.SetKeepAccessoryPowerModeAction.$Shape })
        );
    }

    /**
     * Properties of a GetVehicleData.
     * @deprecated Use CarServer.GetVehicleData.$Properties instead.
     */
    interface IGetVehicleData extends CarServer.GetVehicleData.$Properties {
    }

    /** Represents a GetVehicleData. */
    class GetVehicleData {

        /**
         * Constructs a new GetVehicleData.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetVehicleData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetVehicleData getChargeState. */
        getChargeState?: (CarServer.GetChargeState.$Properties|null);

        /** GetVehicleData getClimateState. */
        getClimateState?: (CarServer.GetClimateState.$Properties|null);

        /** GetVehicleData getDriveState. */
        getDriveState?: (CarServer.GetDriveState.$Properties|null);

        /** GetVehicleData getLocationState. */
        getLocationState?: (CarServer.GetLocationState.$Properties|null);

        /** GetVehicleData getClosuresState. */
        getClosuresState?: (CarServer.GetClosuresState.$Properties|null);

        /** GetVehicleData getChargeScheduleState. */
        getChargeScheduleState?: (CarServer.GetChargeScheduleState.$Properties|null);

        /** GetVehicleData getPreconditioningScheduleState. */
        getPreconditioningScheduleState?: (CarServer.GetPreconditioningScheduleState.$Properties|null);

        /** GetVehicleData getTirePressureState. */
        getTirePressureState?: (CarServer.GetTirePressureState.$Properties|null);

        /** GetVehicleData getMediaState. */
        getMediaState?: (CarServer.GetMediaState.$Properties|null);

        /** GetVehicleData getMediaDetailState. */
        getMediaDetailState?: (CarServer.GetMediaDetailState.$Properties|null);

        /** GetVehicleData getSoftwareUpdateState. */
        getSoftwareUpdateState?: (CarServer.GetSoftwareUpdateState.$Properties|null);

        /** GetVehicleData getParentalControlsState. */
        getParentalControlsState?: (CarServer.GetParentalControlsState.$Properties|null);

        /**
         * Encodes the specified GetVehicleData message. Does not implicitly {@link CarServer.GetVehicleData.verify|verify} messages.
         * @param m GetVehicleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetVehicleData.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVehicleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetVehicleData & CarServer.GetVehicleData.$Shape} GetVehicleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetVehicleData & CarServer.GetVehicleData.$Shape;

        /**
         * Gets the type url for GetVehicleData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetVehicleData {

        /** Properties of a GetVehicleData. */
        interface $Properties {

            /** GetVehicleData getChargeState */
            getChargeState?: (CarServer.GetChargeState.$Properties|null);

            /** GetVehicleData getClimateState */
            getClimateState?: (CarServer.GetClimateState.$Properties|null);

            /** GetVehicleData getDriveState */
            getDriveState?: (CarServer.GetDriveState.$Properties|null);

            /** GetVehicleData getLocationState */
            getLocationState?: (CarServer.GetLocationState.$Properties|null);

            /** GetVehicleData getClosuresState */
            getClosuresState?: (CarServer.GetClosuresState.$Properties|null);

            /** GetVehicleData getChargeScheduleState */
            getChargeScheduleState?: (CarServer.GetChargeScheduleState.$Properties|null);

            /** GetVehicleData getPreconditioningScheduleState */
            getPreconditioningScheduleState?: (CarServer.GetPreconditioningScheduleState.$Properties|null);

            /** GetVehicleData getTirePressureState */
            getTirePressureState?: (CarServer.GetTirePressureState.$Properties|null);

            /** GetVehicleData getMediaState */
            getMediaState?: (CarServer.GetMediaState.$Properties|null);

            /** GetVehicleData getMediaDetailState */
            getMediaDetailState?: (CarServer.GetMediaDetailState.$Properties|null);

            /** GetVehicleData getSoftwareUpdateState */
            getSoftwareUpdateState?: (CarServer.GetSoftwareUpdateState.$Properties|null);

            /** GetVehicleData getParentalControlsState */
            getParentalControlsState?: (CarServer.GetParentalControlsState.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetVehicleData. */
        type $Shape = CarServer.GetVehicleData.$Properties;
    }

    /**
     * Properties of a GetTirePressureState.
     * @deprecated Use CarServer.GetTirePressureState.$Properties instead.
     */
    interface IGetTirePressureState extends CarServer.GetTirePressureState.$Properties {
    }

    /** Represents a GetTirePressureState. */
    class GetTirePressureState {

        /**
         * Constructs a new GetTirePressureState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetTirePressureState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetTirePressureState message. Does not implicitly {@link CarServer.GetTirePressureState.verify|verify} messages.
         * @param m GetTirePressureState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetTirePressureState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTirePressureState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetTirePressureState & CarServer.GetTirePressureState.$Shape} GetTirePressureState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetTirePressureState & CarServer.GetTirePressureState.$Shape;

        /**
         * Gets the type url for GetTirePressureState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetTirePressureState {

        /** Properties of a GetTirePressureState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetTirePressureState. */
        type $Shape = CarServer.GetTirePressureState.$Properties;
    }

    /**
     * Properties of a GetMediaState.
     * @deprecated Use CarServer.GetMediaState.$Properties instead.
     */
    interface IGetMediaState extends CarServer.GetMediaState.$Properties {
    }

    /** Represents a GetMediaState. */
    class GetMediaState {

        /**
         * Constructs a new GetMediaState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetMediaState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetMediaState message. Does not implicitly {@link CarServer.GetMediaState.verify|verify} messages.
         * @param m GetMediaState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetMediaState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMediaState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetMediaState & CarServer.GetMediaState.$Shape} GetMediaState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetMediaState & CarServer.GetMediaState.$Shape;

        /**
         * Gets the type url for GetMediaState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetMediaState {

        /** Properties of a GetMediaState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetMediaState. */
        type $Shape = CarServer.GetMediaState.$Properties;
    }

    /**
     * Properties of a GetMediaDetailState.
     * @deprecated Use CarServer.GetMediaDetailState.$Properties instead.
     */
    interface IGetMediaDetailState extends CarServer.GetMediaDetailState.$Properties {
    }

    /** Represents a GetMediaDetailState. */
    class GetMediaDetailState {

        /**
         * Constructs a new GetMediaDetailState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetMediaDetailState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetMediaDetailState message. Does not implicitly {@link CarServer.GetMediaDetailState.verify|verify} messages.
         * @param m GetMediaDetailState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetMediaDetailState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMediaDetailState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetMediaDetailState & CarServer.GetMediaDetailState.$Shape} GetMediaDetailState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetMediaDetailState & CarServer.GetMediaDetailState.$Shape;

        /**
         * Gets the type url for GetMediaDetailState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetMediaDetailState {

        /** Properties of a GetMediaDetailState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetMediaDetailState. */
        type $Shape = CarServer.GetMediaDetailState.$Properties;
    }

    /**
     * Properties of a GetSoftwareUpdateState.
     * @deprecated Use CarServer.GetSoftwareUpdateState.$Properties instead.
     */
    interface IGetSoftwareUpdateState extends CarServer.GetSoftwareUpdateState.$Properties {
    }

    /** Represents a GetSoftwareUpdateState. */
    class GetSoftwareUpdateState {

        /**
         * Constructs a new GetSoftwareUpdateState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetSoftwareUpdateState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetSoftwareUpdateState message. Does not implicitly {@link CarServer.GetSoftwareUpdateState.verify|verify} messages.
         * @param m GetSoftwareUpdateState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetSoftwareUpdateState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSoftwareUpdateState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetSoftwareUpdateState & CarServer.GetSoftwareUpdateState.$Shape} GetSoftwareUpdateState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetSoftwareUpdateState & CarServer.GetSoftwareUpdateState.$Shape;

        /**
         * Gets the type url for GetSoftwareUpdateState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetSoftwareUpdateState {

        /** Properties of a GetSoftwareUpdateState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetSoftwareUpdateState. */
        type $Shape = CarServer.GetSoftwareUpdateState.$Properties;
    }

    /**
     * Properties of a GetChargeState.
     * @deprecated Use CarServer.GetChargeState.$Properties instead.
     */
    interface IGetChargeState extends CarServer.GetChargeState.$Properties {
    }

    /** Represents a GetChargeState. */
    class GetChargeState {

        /**
         * Constructs a new GetChargeState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetChargeState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetChargeState message. Does not implicitly {@link CarServer.GetChargeState.verify|verify} messages.
         * @param m GetChargeState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetChargeState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChargeState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetChargeState & CarServer.GetChargeState.$Shape} GetChargeState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetChargeState & CarServer.GetChargeState.$Shape;

        /**
         * Gets the type url for GetChargeState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetChargeState {

        /** Properties of a GetChargeState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetChargeState. */
        type $Shape = CarServer.GetChargeState.$Properties;
    }

    /**
     * Properties of a GetClimateState.
     * @deprecated Use CarServer.GetClimateState.$Properties instead.
     */
    interface IGetClimateState extends CarServer.GetClimateState.$Properties {
    }

    /** Represents a GetClimateState. */
    class GetClimateState {

        /**
         * Constructs a new GetClimateState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetClimateState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetClimateState message. Does not implicitly {@link CarServer.GetClimateState.verify|verify} messages.
         * @param m GetClimateState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetClimateState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetClimateState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetClimateState & CarServer.GetClimateState.$Shape} GetClimateState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetClimateState & CarServer.GetClimateState.$Shape;

        /**
         * Gets the type url for GetClimateState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetClimateState {

        /** Properties of a GetClimateState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetClimateState. */
        type $Shape = CarServer.GetClimateState.$Properties;
    }

    /**
     * Properties of a GetDriveState.
     * @deprecated Use CarServer.GetDriveState.$Properties instead.
     */
    interface IGetDriveState extends CarServer.GetDriveState.$Properties {
    }

    /** Represents a GetDriveState. */
    class GetDriveState {

        /**
         * Constructs a new GetDriveState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetDriveState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetDriveState message. Does not implicitly {@link CarServer.GetDriveState.verify|verify} messages.
         * @param m GetDriveState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetDriveState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDriveState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetDriveState & CarServer.GetDriveState.$Shape} GetDriveState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetDriveState & CarServer.GetDriveState.$Shape;

        /**
         * Gets the type url for GetDriveState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetDriveState {

        /** Properties of a GetDriveState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetDriveState. */
        type $Shape = CarServer.GetDriveState.$Properties;
    }

    /**
     * Properties of a GetLocationState.
     * @deprecated Use CarServer.GetLocationState.$Properties instead.
     */
    interface IGetLocationState extends CarServer.GetLocationState.$Properties {
    }

    /** Represents a GetLocationState. */
    class GetLocationState {

        /**
         * Constructs a new GetLocationState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetLocationState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetLocationState message. Does not implicitly {@link CarServer.GetLocationState.verify|verify} messages.
         * @param m GetLocationState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetLocationState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLocationState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetLocationState & CarServer.GetLocationState.$Shape} GetLocationState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetLocationState & CarServer.GetLocationState.$Shape;

        /**
         * Gets the type url for GetLocationState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetLocationState {

        /** Properties of a GetLocationState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetLocationState. */
        type $Shape = CarServer.GetLocationState.$Properties;
    }

    /**
     * Properties of a GetClosuresState.
     * @deprecated Use CarServer.GetClosuresState.$Properties instead.
     */
    interface IGetClosuresState extends CarServer.GetClosuresState.$Properties {
    }

    /** Represents a GetClosuresState. */
    class GetClosuresState {

        /**
         * Constructs a new GetClosuresState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetClosuresState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetClosuresState message. Does not implicitly {@link CarServer.GetClosuresState.verify|verify} messages.
         * @param m GetClosuresState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetClosuresState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetClosuresState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetClosuresState & CarServer.GetClosuresState.$Shape} GetClosuresState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetClosuresState & CarServer.GetClosuresState.$Shape;

        /**
         * Gets the type url for GetClosuresState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetClosuresState {

        /** Properties of a GetClosuresState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetClosuresState. */
        type $Shape = CarServer.GetClosuresState.$Properties;
    }

    /**
     * Properties of a GetChargeScheduleState.
     * @deprecated Use CarServer.GetChargeScheduleState.$Properties instead.
     */
    interface IGetChargeScheduleState extends CarServer.GetChargeScheduleState.$Properties {
    }

    /** Represents a GetChargeScheduleState. */
    class GetChargeScheduleState {

        /**
         * Constructs a new GetChargeScheduleState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetChargeScheduleState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetChargeScheduleState message. Does not implicitly {@link CarServer.GetChargeScheduleState.verify|verify} messages.
         * @param m GetChargeScheduleState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetChargeScheduleState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChargeScheduleState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetChargeScheduleState & CarServer.GetChargeScheduleState.$Shape} GetChargeScheduleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetChargeScheduleState & CarServer.GetChargeScheduleState.$Shape;

        /**
         * Gets the type url for GetChargeScheduleState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetChargeScheduleState {

        /** Properties of a GetChargeScheduleState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetChargeScheduleState. */
        type $Shape = CarServer.GetChargeScheduleState.$Properties;
    }

    /**
     * Properties of a GetPreconditioningScheduleState.
     * @deprecated Use CarServer.GetPreconditioningScheduleState.$Properties instead.
     */
    interface IGetPreconditioningScheduleState extends CarServer.GetPreconditioningScheduleState.$Properties {
    }

    /** Represents a GetPreconditioningScheduleState. */
    class GetPreconditioningScheduleState {

        /**
         * Constructs a new GetPreconditioningScheduleState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetPreconditioningScheduleState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetPreconditioningScheduleState message. Does not implicitly {@link CarServer.GetPreconditioningScheduleState.verify|verify} messages.
         * @param m GetPreconditioningScheduleState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetPreconditioningScheduleState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPreconditioningScheduleState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetPreconditioningScheduleState & CarServer.GetPreconditioningScheduleState.$Shape} GetPreconditioningScheduleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetPreconditioningScheduleState & CarServer.GetPreconditioningScheduleState.$Shape;

        /**
         * Gets the type url for GetPreconditioningScheduleState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetPreconditioningScheduleState {

        /** Properties of a GetPreconditioningScheduleState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetPreconditioningScheduleState. */
        type $Shape = CarServer.GetPreconditioningScheduleState.$Properties;
    }

    /**
     * Properties of a GetParentalControlsState.
     * @deprecated Use CarServer.GetParentalControlsState.$Properties instead.
     */
    interface IGetParentalControlsState extends CarServer.GetParentalControlsState.$Properties {
    }

    /** Represents a GetParentalControlsState. */
    class GetParentalControlsState {

        /**
         * Constructs a new GetParentalControlsState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetParentalControlsState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetParentalControlsState message. Does not implicitly {@link CarServer.GetParentalControlsState.verify|verify} messages.
         * @param m GetParentalControlsState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetParentalControlsState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParentalControlsState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetParentalControlsState & CarServer.GetParentalControlsState.$Shape} GetParentalControlsState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetParentalControlsState & CarServer.GetParentalControlsState.$Shape;

        /**
         * Gets the type url for GetParentalControlsState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetParentalControlsState {

        /** Properties of a GetParentalControlsState. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetParentalControlsState. */
        type $Shape = CarServer.GetParentalControlsState.$Properties;
    }

    /**
     * Properties of an EraseUserDataAction.
     * @deprecated Use CarServer.EraseUserDataAction.$Properties instead.
     */
    interface IEraseUserDataAction extends CarServer.EraseUserDataAction.$Properties {
    }

    /** Represents an EraseUserDataAction. */
    class EraseUserDataAction {

        /**
         * Constructs a new EraseUserDataAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.EraseUserDataAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EraseUserDataAction reason. */
        reason: string;

        /**
         * Encodes the specified EraseUserDataAction message. Does not implicitly {@link CarServer.EraseUserDataAction.verify|verify} messages.
         * @param m EraseUserDataAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.EraseUserDataAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EraseUserDataAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.EraseUserDataAction & CarServer.EraseUserDataAction.$Shape} EraseUserDataAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.EraseUserDataAction & CarServer.EraseUserDataAction.$Shape;

        /**
         * Gets the type url for EraseUserDataAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EraseUserDataAction {

        /** Properties of an EraseUserDataAction. */
        interface $Properties {

            /** EraseUserDataAction reason */
            reason?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EraseUserDataAction. */
        type $Shape = CarServer.EraseUserDataAction.$Properties;
    }

    /**
     * Properties of a Response.
     * @deprecated Use CarServer.Response.$Properties instead.
     */
    interface IResponse extends CarServer.Response.$Properties {
    }

    /** Represents a Response. */
    class Response {

        /**
         * Constructs a new Response.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.Response.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Response actionStatus. */
        actionStatus?: (CarServer.ActionStatus.$Properties|null);

        /** Response vehicleData. */
        vehicleData?: (CarServer.VehicleData.$Properties|null);

        /** Response getSessionInfoResponse. */
        getSessionInfoResponse?: (Signatures.SessionInfo.$Properties|null);

        /** Response getNearbyChargingSites. */
        getNearbyChargingSites?: (CarServer.NearbyChargingSites.$Properties|null);

        /** Response ping. */
        ping?: (CarServer.Ping.$Properties|null);

        /** Response response_msg. */
        response_msg?: ("vehicleData"|"getSessionInfoResponse"|"getNearbyChargingSites"|"ping");

        /**
         * Encodes the specified Response message. Does not implicitly {@link CarServer.Response.verify|verify} messages.
         * @param m Response message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.Response.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.Response & CarServer.Response.$Shape} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.Response & CarServer.Response.$Shape;

        /**
         * Gets the type url for Response
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Response {

        /** Properties of a Response. */
        interface $Properties {

            /** Response actionStatus */
            actionStatus?: (CarServer.ActionStatus.$Properties|null);

            /** Response vehicleData */
            vehicleData?: (CarServer.VehicleData.$Properties|null);

            /** Response getSessionInfoResponse */
            getSessionInfoResponse?: (Signatures.SessionInfo.$Properties|null);

            /** Response getNearbyChargingSites */
            getNearbyChargingSites?: (CarServer.NearbyChargingSites.$Properties|null);

            /** Response ping */
            ping?: (CarServer.Ping.$Properties|null);

            /** Response response_msg */
            response_msg?: ("vehicleData"|"getSessionInfoResponse"|"getNearbyChargingSites"|"ping");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Response. */
        type $Shape = {
          actionStatus?: CarServer.ActionStatus.$Shape|null;
          vehicleData?: CarServer.VehicleData.$Shape|null;
          getSessionInfoResponse?: Signatures.SessionInfo.$Shape|null;
          getNearbyChargingSites?: CarServer.NearbyChargingSites.$Shape|null;
          ping?: CarServer.Ping.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ response_msg?: undefined; vehicleData?: null; getSessionInfoResponse?: null; getNearbyChargingSites?: null; ping?: null }|{ response_msg?: "vehicleData"; vehicleData: CarServer.VehicleData.$Shape; getSessionInfoResponse?: null; getNearbyChargingSites?: null; ping?: null }|{ response_msg?: "getSessionInfoResponse"; vehicleData?: null; getSessionInfoResponse: Signatures.SessionInfo.$Shape; getNearbyChargingSites?: null; ping?: null }|{ response_msg?: "getNearbyChargingSites"; vehicleData?: null; getSessionInfoResponse?: null; getNearbyChargingSites: CarServer.NearbyChargingSites.$Shape; ping?: null }|{ response_msg?: "ping"; vehicleData?: null; getSessionInfoResponse?: null; getNearbyChargingSites?: null; ping: CarServer.Ping.$Shape })
        );
    }

    /**
     * Properties of an ActionStatus.
     * @deprecated Use CarServer.ActionStatus.$Properties instead.
     */
    interface IActionStatus extends CarServer.ActionStatus.$Properties {
    }

    /** Represents an ActionStatus. */
    class ActionStatus {

        /**
         * Constructs a new ActionStatus.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ActionStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ActionStatus result. */
        result: CarServer.OperationStatus_E;

        /** ActionStatus result_reason. */
        result_reason?: (CarServer.ResultReason.$Properties|null);

        /**
         * Encodes the specified ActionStatus message. Does not implicitly {@link CarServer.ActionStatus.verify|verify} messages.
         * @param m ActionStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ActionStatus.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ActionStatus & CarServer.ActionStatus.$Shape} ActionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ActionStatus & CarServer.ActionStatus.$Shape;

        /**
         * Gets the type url for ActionStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ActionStatus {

        /** Properties of an ActionStatus. */
        interface $Properties {

            /** ActionStatus result */
            result?: (CarServer.OperationStatus_E|null);

            /** ActionStatus result_reason */
            result_reason?: (CarServer.ResultReason.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an ActionStatus. */
        type $Shape = {
          result?: CarServer.OperationStatus_E|null;
          result_reason?: CarServer.ResultReason.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /** OperationStatus_E enum. */
    enum OperationStatus_E {

        /** OPERATIONSTATUS_OK value */
        OPERATIONSTATUS_OK = 0,

        /** OPERATIONSTATUS_ERROR value */
        OPERATIONSTATUS_ERROR = 1
    }

    /**
     * Properties of a ResultReason.
     * @deprecated Use CarServer.ResultReason.$Properties instead.
     */
    interface IResultReason extends CarServer.ResultReason.$Properties {
    }

    /** Represents a ResultReason. */
    class ResultReason {

        /**
         * Constructs a new ResultReason.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ResultReason.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ResultReason plain_text. */
        plain_text?: (string|null);

        /** ResultReason reason. */
        reason?: "plain_text";

        /**
         * Encodes the specified ResultReason message. Does not implicitly {@link CarServer.ResultReason.verify|verify} messages.
         * @param m ResultReason message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ResultReason.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultReason message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ResultReason & CarServer.ResultReason.$Shape} ResultReason
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ResultReason & CarServer.ResultReason.$Shape;

        /**
         * Gets the type url for ResultReason
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ResultReason {

        /** Properties of a ResultReason. */
        interface $Properties {

            /** ResultReason plain_text */
            plain_text?: (string|null);

            /** ResultReason reason */
            reason?: "plain_text";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ResultReason. */
        type $Shape = {
          plain_text?: string|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ reason?: undefined; plain_text?: null }|{ reason?: "plain_text"; plain_text: string })
        );
    }

    /**
     * Properties of an EncryptedData.
     * @deprecated Use CarServer.EncryptedData.$Properties instead.
     */
    interface IEncryptedData extends CarServer.EncryptedData.$Properties {
    }

    /** Represents an EncryptedData. */
    class EncryptedData {

        /**
         * Constructs a new EncryptedData.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.EncryptedData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EncryptedData field_number. */
        field_number: number;

        /** EncryptedData ciphertext. */
        ciphertext: Uint8Array;

        /** EncryptedData tag. */
        tag: Uint8Array;

        /**
         * Encodes the specified EncryptedData message. Does not implicitly {@link CarServer.EncryptedData.verify|verify} messages.
         * @param m EncryptedData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.EncryptedData.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.EncryptedData & CarServer.EncryptedData.$Shape} EncryptedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.EncryptedData & CarServer.EncryptedData.$Shape;

        /**
         * Gets the type url for EncryptedData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EncryptedData {

        /** Properties of an EncryptedData. */
        interface $Properties {

            /** EncryptedData field_number */
            field_number?: (number|null);

            /** EncryptedData ciphertext */
            ciphertext?: (Uint8Array|null);

            /** EncryptedData tag */
            tag?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EncryptedData. */
        type $Shape = CarServer.EncryptedData.$Properties;
    }

    /**
     * Properties of a ChargingSetLimitAction.
     * @deprecated Use CarServer.ChargingSetLimitAction.$Properties instead.
     */
    interface IChargingSetLimitAction extends CarServer.ChargingSetLimitAction.$Properties {
    }

    /** Represents a ChargingSetLimitAction. */
    class ChargingSetLimitAction {

        /**
         * Constructs a new ChargingSetLimitAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargingSetLimitAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargingSetLimitAction percent. */
        percent: number;

        /**
         * Encodes the specified ChargingSetLimitAction message. Does not implicitly {@link CarServer.ChargingSetLimitAction.verify|verify} messages.
         * @param m ChargingSetLimitAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargingSetLimitAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargingSetLimitAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargingSetLimitAction & CarServer.ChargingSetLimitAction.$Shape} ChargingSetLimitAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargingSetLimitAction & CarServer.ChargingSetLimitAction.$Shape;

        /**
         * Gets the type url for ChargingSetLimitAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargingSetLimitAction {

        /** Properties of a ChargingSetLimitAction. */
        interface $Properties {

            /** ChargingSetLimitAction percent */
            percent?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargingSetLimitAction. */
        type $Shape = CarServer.ChargingSetLimitAction.$Properties;
    }

    /**
     * Properties of a ChargingStartStopAction.
     * @deprecated Use CarServer.ChargingStartStopAction.$Properties instead.
     */
    interface IChargingStartStopAction extends CarServer.ChargingStartStopAction.$Properties {
    }

    /** Represents a ChargingStartStopAction. */
    class ChargingStartStopAction {

        /**
         * Constructs a new ChargingStartStopAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargingStartStopAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargingStartStopAction unknown. */
        unknown?: (CarServer.Void.$Properties|null);

        /** ChargingStartStopAction start. */
        start?: (CarServer.Void.$Properties|null);

        /** ChargingStartStopAction start_standard. */
        start_standard?: (CarServer.Void.$Properties|null);

        /** ChargingStartStopAction start_max_range. */
        start_max_range?: (CarServer.Void.$Properties|null);

        /** ChargingStartStopAction stop. */
        stop?: (CarServer.Void.$Properties|null);

        /** ChargingStartStopAction charging_action. */
        charging_action?: ("unknown"|"start"|"start_standard"|"start_max_range"|"stop");

        /**
         * Encodes the specified ChargingStartStopAction message. Does not implicitly {@link CarServer.ChargingStartStopAction.verify|verify} messages.
         * @param m ChargingStartStopAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargingStartStopAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargingStartStopAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargingStartStopAction & CarServer.ChargingStartStopAction.$Shape} ChargingStartStopAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargingStartStopAction & CarServer.ChargingStartStopAction.$Shape;

        /**
         * Gets the type url for ChargingStartStopAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargingStartStopAction {

        /** Properties of a ChargingStartStopAction. */
        interface $Properties {

            /** ChargingStartStopAction unknown */
            unknown?: (CarServer.Void.$Properties|null);

            /** ChargingStartStopAction start */
            start?: (CarServer.Void.$Properties|null);

            /** ChargingStartStopAction start_standard */
            start_standard?: (CarServer.Void.$Properties|null);

            /** ChargingStartStopAction start_max_range */
            start_max_range?: (CarServer.Void.$Properties|null);

            /** ChargingStartStopAction stop */
            stop?: (CarServer.Void.$Properties|null);

            /** ChargingStartStopAction charging_action */
            charging_action?: ("unknown"|"start"|"start_standard"|"start_max_range"|"stop");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ChargingStartStopAction. */
        type $Shape = {
          unknown?: CarServer.Void.$Shape|null;
          start?: CarServer.Void.$Shape|null;
          start_standard?: CarServer.Void.$Shape|null;
          start_max_range?: CarServer.Void.$Shape|null;
          stop?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ charging_action?: undefined; unknown?: null; start?: null; start_standard?: null; start_max_range?: null; stop?: null }|{ charging_action?: "unknown"; unknown: CarServer.Void.$Shape; start?: null; start_standard?: null; start_max_range?: null; stop?: null }|{ charging_action?: "start"; unknown?: null; start: CarServer.Void.$Shape; start_standard?: null; start_max_range?: null; stop?: null }|{ charging_action?: "start_standard"; unknown?: null; start?: null; start_standard: CarServer.Void.$Shape; start_max_range?: null; stop?: null }|{ charging_action?: "start_max_range"; unknown?: null; start?: null; start_standard?: null; start_max_range: CarServer.Void.$Shape; stop?: null }|{ charging_action?: "stop"; unknown?: null; start?: null; start_standard?: null; start_max_range?: null; stop: CarServer.Void.$Shape })
        );
    }

    /**
     * Properties of a DrivingClearSpeedLimitPinAction.
     * @deprecated Use CarServer.DrivingClearSpeedLimitPinAction.$Properties instead.
     */
    interface IDrivingClearSpeedLimitPinAction extends CarServer.DrivingClearSpeedLimitPinAction.$Properties {
    }

    /** Represents a DrivingClearSpeedLimitPinAction. */
    class DrivingClearSpeedLimitPinAction {

        /**
         * Constructs a new DrivingClearSpeedLimitPinAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.DrivingClearSpeedLimitPinAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DrivingClearSpeedLimitPinAction pin. */
        pin: string;

        /**
         * Encodes the specified DrivingClearSpeedLimitPinAction message. Does not implicitly {@link CarServer.DrivingClearSpeedLimitPinAction.verify|verify} messages.
         * @param m DrivingClearSpeedLimitPinAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.DrivingClearSpeedLimitPinAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrivingClearSpeedLimitPinAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.DrivingClearSpeedLimitPinAction & CarServer.DrivingClearSpeedLimitPinAction.$Shape} DrivingClearSpeedLimitPinAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.DrivingClearSpeedLimitPinAction & CarServer.DrivingClearSpeedLimitPinAction.$Shape;

        /**
         * Gets the type url for DrivingClearSpeedLimitPinAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrivingClearSpeedLimitPinAction {

        /** Properties of a DrivingClearSpeedLimitPinAction. */
        interface $Properties {

            /** DrivingClearSpeedLimitPinAction pin */
            pin?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrivingClearSpeedLimitPinAction. */
        type $Shape = CarServer.DrivingClearSpeedLimitPinAction.$Properties;
    }

    /**
     * Properties of a DrivingClearSpeedLimitPinAdminAction.
     * @deprecated Use CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties instead.
     */
    interface IDrivingClearSpeedLimitPinAdminAction extends CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties {
    }

    /** Represents a DrivingClearSpeedLimitPinAdminAction. */
    class DrivingClearSpeedLimitPinAdminAction {

        /**
         * Constructs a new DrivingClearSpeedLimitPinAdminAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified DrivingClearSpeedLimitPinAdminAction message. Does not implicitly {@link CarServer.DrivingClearSpeedLimitPinAdminAction.verify|verify} messages.
         * @param m DrivingClearSpeedLimitPinAdminAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrivingClearSpeedLimitPinAdminAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.DrivingClearSpeedLimitPinAdminAction & CarServer.DrivingClearSpeedLimitPinAdminAction.$Shape} DrivingClearSpeedLimitPinAdminAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.DrivingClearSpeedLimitPinAdminAction & CarServer.DrivingClearSpeedLimitPinAdminAction.$Shape;

        /**
         * Gets the type url for DrivingClearSpeedLimitPinAdminAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrivingClearSpeedLimitPinAdminAction {

        /** Properties of a DrivingClearSpeedLimitPinAdminAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrivingClearSpeedLimitPinAdminAction. */
        type $Shape = CarServer.DrivingClearSpeedLimitPinAdminAction.$Properties;
    }

    /**
     * Properties of a DrivingSetSpeedLimitAction.
     * @deprecated Use CarServer.DrivingSetSpeedLimitAction.$Properties instead.
     */
    interface IDrivingSetSpeedLimitAction extends CarServer.DrivingSetSpeedLimitAction.$Properties {
    }

    /** Represents a DrivingSetSpeedLimitAction. */
    class DrivingSetSpeedLimitAction {

        /**
         * Constructs a new DrivingSetSpeedLimitAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.DrivingSetSpeedLimitAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DrivingSetSpeedLimitAction limit_mph. */
        limit_mph: number;

        /**
         * Encodes the specified DrivingSetSpeedLimitAction message. Does not implicitly {@link CarServer.DrivingSetSpeedLimitAction.verify|verify} messages.
         * @param m DrivingSetSpeedLimitAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.DrivingSetSpeedLimitAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrivingSetSpeedLimitAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.DrivingSetSpeedLimitAction & CarServer.DrivingSetSpeedLimitAction.$Shape} DrivingSetSpeedLimitAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.DrivingSetSpeedLimitAction & CarServer.DrivingSetSpeedLimitAction.$Shape;

        /**
         * Gets the type url for DrivingSetSpeedLimitAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrivingSetSpeedLimitAction {

        /** Properties of a DrivingSetSpeedLimitAction. */
        interface $Properties {

            /** DrivingSetSpeedLimitAction limit_mph */
            limit_mph?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrivingSetSpeedLimitAction. */
        type $Shape = CarServer.DrivingSetSpeedLimitAction.$Properties;
    }

    /**
     * Properties of a DrivingSpeedLimitAction.
     * @deprecated Use CarServer.DrivingSpeedLimitAction.$Properties instead.
     */
    interface IDrivingSpeedLimitAction extends CarServer.DrivingSpeedLimitAction.$Properties {
    }

    /** Represents a DrivingSpeedLimitAction. */
    class DrivingSpeedLimitAction {

        /**
         * Constructs a new DrivingSpeedLimitAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.DrivingSpeedLimitAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DrivingSpeedLimitAction activate. */
        activate: boolean;

        /** DrivingSpeedLimitAction pin. */
        pin: string;

        /**
         * Encodes the specified DrivingSpeedLimitAction message. Does not implicitly {@link CarServer.DrivingSpeedLimitAction.verify|verify} messages.
         * @param m DrivingSpeedLimitAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.DrivingSpeedLimitAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrivingSpeedLimitAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.DrivingSpeedLimitAction & CarServer.DrivingSpeedLimitAction.$Shape} DrivingSpeedLimitAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.DrivingSpeedLimitAction & CarServer.DrivingSpeedLimitAction.$Shape;

        /**
         * Gets the type url for DrivingSpeedLimitAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrivingSpeedLimitAction {

        /** Properties of a DrivingSpeedLimitAction. */
        interface $Properties {

            /** DrivingSpeedLimitAction activate */
            activate?: (boolean|null);

            /** DrivingSpeedLimitAction pin */
            pin?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrivingSpeedLimitAction. */
        type $Shape = CarServer.DrivingSpeedLimitAction.$Properties;
    }

    /**
     * Properties of a HvacAutoAction.
     * @deprecated Use CarServer.HvacAutoAction.$Properties instead.
     */
    interface IHvacAutoAction extends CarServer.HvacAutoAction.$Properties {
    }

    /** Represents a HvacAutoAction. */
    class HvacAutoAction {

        /**
         * Constructs a new HvacAutoAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacAutoAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacAutoAction power_on. */
        power_on: boolean;

        /** HvacAutoAction manual_override. */
        manual_override: boolean;

        /**
         * Encodes the specified HvacAutoAction message. Does not implicitly {@link CarServer.HvacAutoAction.verify|verify} messages.
         * @param m HvacAutoAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacAutoAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacAutoAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacAutoAction & CarServer.HvacAutoAction.$Shape} HvacAutoAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacAutoAction & CarServer.HvacAutoAction.$Shape;

        /**
         * Gets the type url for HvacAutoAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacAutoAction {

        /** Properties of a HvacAutoAction. */
        interface $Properties {

            /** HvacAutoAction power_on */
            power_on?: (boolean|null);

            /** HvacAutoAction manual_override */
            manual_override?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacAutoAction. */
        type $Shape = CarServer.HvacAutoAction.$Properties;
    }

    /**
     * Properties of a HvacSeatHeaterActions.
     * @deprecated Use CarServer.HvacSeatHeaterActions.$Properties instead.
     */
    interface IHvacSeatHeaterActions extends CarServer.HvacSeatHeaterActions.$Properties {
    }

    /** Represents a HvacSeatHeaterActions. */
    class HvacSeatHeaterActions {

        /**
         * Constructs a new HvacSeatHeaterActions.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacSeatHeaterActions.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacSeatHeaterActions hvacSeatHeaterAction. */
        hvacSeatHeaterAction: CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Properties[];

        /**
         * Encodes the specified HvacSeatHeaterActions message. Does not implicitly {@link CarServer.HvacSeatHeaterActions.verify|verify} messages.
         * @param m HvacSeatHeaterActions message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacSeatHeaterActions.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacSeatHeaterActions message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacSeatHeaterActions & CarServer.HvacSeatHeaterActions.$Shape} HvacSeatHeaterActions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacSeatHeaterActions & CarServer.HvacSeatHeaterActions.$Shape;

        /**
         * Gets the type url for HvacSeatHeaterActions
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacSeatHeaterActions {

        /** Properties of a HvacSeatHeaterActions. */
        interface $Properties {

            /** HvacSeatHeaterActions hvacSeatHeaterAction */
            hvacSeatHeaterAction?: (CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacSeatHeaterActions. */
        type $Shape = {
          hvacSeatHeaterAction?: CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Shape[]|null;
          $unknowns?: Uint8Array[];
        };

        /**
         * Properties of a HvacSeatHeaterAction.
         * @deprecated Use CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Properties instead.
         */
        interface IHvacSeatHeaterAction extends CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Properties {
        }

        /** Represents a HvacSeatHeaterAction. */
        class HvacSeatHeaterAction {

            /**
             * Constructs a new HvacSeatHeaterAction.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HvacSeatHeaterAction SEAT_HEATER_UNKNOWN. */
            SEAT_HEATER_UNKNOWN?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction SEAT_HEATER_OFF. */
            SEAT_HEATER_OFF?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction SEAT_HEATER_LOW. */
            SEAT_HEATER_LOW?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction SEAT_HEATER_MED. */
            SEAT_HEATER_MED?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction SEAT_HEATER_HIGH. */
            SEAT_HEATER_HIGH?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_UNKNOWN. */
            CAR_SEAT_UNKNOWN?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_FRONT_LEFT. */
            CAR_SEAT_FRONT_LEFT?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_FRONT_RIGHT. */
            CAR_SEAT_FRONT_RIGHT?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_REAR_LEFT. */
            CAR_SEAT_REAR_LEFT?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_REAR_LEFT_BACK. */
            CAR_SEAT_REAR_LEFT_BACK?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_REAR_CENTER. */
            CAR_SEAT_REAR_CENTER?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_REAR_RIGHT. */
            CAR_SEAT_REAR_RIGHT?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_REAR_RIGHT_BACK. */
            CAR_SEAT_REAR_RIGHT_BACK?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_THIRD_ROW_LEFT. */
            CAR_SEAT_THIRD_ROW_LEFT?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction CAR_SEAT_THIRD_ROW_RIGHT. */
            CAR_SEAT_THIRD_ROW_RIGHT?: (CarServer.Void.$Properties|null);

            /** HvacSeatHeaterAction seat_heater_level. */
            seat_heater_level?: ("SEAT_HEATER_UNKNOWN"|"SEAT_HEATER_OFF"|"SEAT_HEATER_LOW"|"SEAT_HEATER_MED"|"SEAT_HEATER_HIGH");

            /** HvacSeatHeaterAction seat_position. */
            seat_position?: ("CAR_SEAT_UNKNOWN"|"CAR_SEAT_FRONT_LEFT"|"CAR_SEAT_FRONT_RIGHT"|"CAR_SEAT_REAR_LEFT"|"CAR_SEAT_REAR_LEFT_BACK"|"CAR_SEAT_REAR_CENTER"|"CAR_SEAT_REAR_RIGHT"|"CAR_SEAT_REAR_RIGHT_BACK"|"CAR_SEAT_THIRD_ROW_LEFT"|"CAR_SEAT_THIRD_ROW_RIGHT");

            /**
             * Encodes the specified HvacSeatHeaterAction message. Does not implicitly {@link CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.verify|verify} messages.
             * @param m HvacSeatHeaterAction message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HvacSeatHeaterAction message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction & CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Shape} HvacSeatHeaterAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction & CarServer.HvacSeatHeaterActions.HvacSeatHeaterAction.$Shape;

            /**
             * Gets the type url for HvacSeatHeaterAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HvacSeatHeaterAction {

            /** Properties of a HvacSeatHeaterAction. */
            interface $Properties {

                /** HvacSeatHeaterAction SEAT_HEATER_UNKNOWN */
                SEAT_HEATER_UNKNOWN?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction SEAT_HEATER_OFF */
                SEAT_HEATER_OFF?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction SEAT_HEATER_LOW */
                SEAT_HEATER_LOW?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction SEAT_HEATER_MED */
                SEAT_HEATER_MED?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction SEAT_HEATER_HIGH */
                SEAT_HEATER_HIGH?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_UNKNOWN */
                CAR_SEAT_UNKNOWN?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_FRONT_LEFT */
                CAR_SEAT_FRONT_LEFT?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_FRONT_RIGHT */
                CAR_SEAT_FRONT_RIGHT?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_REAR_LEFT */
                CAR_SEAT_REAR_LEFT?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_REAR_LEFT_BACK */
                CAR_SEAT_REAR_LEFT_BACK?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_REAR_CENTER */
                CAR_SEAT_REAR_CENTER?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_REAR_RIGHT */
                CAR_SEAT_REAR_RIGHT?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_REAR_RIGHT_BACK */
                CAR_SEAT_REAR_RIGHT_BACK?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_THIRD_ROW_LEFT */
                CAR_SEAT_THIRD_ROW_LEFT?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction CAR_SEAT_THIRD_ROW_RIGHT */
                CAR_SEAT_THIRD_ROW_RIGHT?: (CarServer.Void.$Properties|null);

                /** HvacSeatHeaterAction seat_heater_level */
                seat_heater_level?: ("SEAT_HEATER_UNKNOWN"|"SEAT_HEATER_OFF"|"SEAT_HEATER_LOW"|"SEAT_HEATER_MED"|"SEAT_HEATER_HIGH");

                /** HvacSeatHeaterAction seat_position */
                seat_position?: ("CAR_SEAT_UNKNOWN"|"CAR_SEAT_FRONT_LEFT"|"CAR_SEAT_FRONT_RIGHT"|"CAR_SEAT_REAR_LEFT"|"CAR_SEAT_REAR_LEFT_BACK"|"CAR_SEAT_REAR_CENTER"|"CAR_SEAT_REAR_RIGHT"|"CAR_SEAT_REAR_RIGHT_BACK"|"CAR_SEAT_THIRD_ROW_LEFT"|"CAR_SEAT_THIRD_ROW_RIGHT");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a HvacSeatHeaterAction. */
            type $Shape = {
              SEAT_HEATER_UNKNOWN?: CarServer.Void.$Shape|null;
              SEAT_HEATER_OFF?: CarServer.Void.$Shape|null;
              SEAT_HEATER_LOW?: CarServer.Void.$Shape|null;
              SEAT_HEATER_MED?: CarServer.Void.$Shape|null;
              SEAT_HEATER_HIGH?: CarServer.Void.$Shape|null;
              CAR_SEAT_UNKNOWN?: CarServer.Void.$Shape|null;
              CAR_SEAT_FRONT_LEFT?: CarServer.Void.$Shape|null;
              CAR_SEAT_FRONT_RIGHT?: CarServer.Void.$Shape|null;
              CAR_SEAT_REAR_LEFT?: CarServer.Void.$Shape|null;
              CAR_SEAT_REAR_LEFT_BACK?: CarServer.Void.$Shape|null;
              CAR_SEAT_REAR_CENTER?: CarServer.Void.$Shape|null;
              CAR_SEAT_REAR_RIGHT?: CarServer.Void.$Shape|null;
              CAR_SEAT_REAR_RIGHT_BACK?: CarServer.Void.$Shape|null;
              CAR_SEAT_THIRD_ROW_LEFT?: CarServer.Void.$Shape|null;
              CAR_SEAT_THIRD_ROW_RIGHT?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ seat_heater_level?: undefined; SEAT_HEATER_UNKNOWN?: null; SEAT_HEATER_OFF?: null; SEAT_HEATER_LOW?: null; SEAT_HEATER_MED?: null; SEAT_HEATER_HIGH?: null }|{ seat_heater_level?: "SEAT_HEATER_UNKNOWN"; SEAT_HEATER_UNKNOWN: CarServer.Void.$Shape; SEAT_HEATER_OFF?: null; SEAT_HEATER_LOW?: null; SEAT_HEATER_MED?: null; SEAT_HEATER_HIGH?: null }|{ seat_heater_level?: "SEAT_HEATER_OFF"; SEAT_HEATER_UNKNOWN?: null; SEAT_HEATER_OFF: CarServer.Void.$Shape; SEAT_HEATER_LOW?: null; SEAT_HEATER_MED?: null; SEAT_HEATER_HIGH?: null }|{ seat_heater_level?: "SEAT_HEATER_LOW"; SEAT_HEATER_UNKNOWN?: null; SEAT_HEATER_OFF?: null; SEAT_HEATER_LOW: CarServer.Void.$Shape; SEAT_HEATER_MED?: null; SEAT_HEATER_HIGH?: null }|{ seat_heater_level?: "SEAT_HEATER_MED"; SEAT_HEATER_UNKNOWN?: null; SEAT_HEATER_OFF?: null; SEAT_HEATER_LOW?: null; SEAT_HEATER_MED: CarServer.Void.$Shape; SEAT_HEATER_HIGH?: null }|{ seat_heater_level?: "SEAT_HEATER_HIGH"; SEAT_HEATER_UNKNOWN?: null; SEAT_HEATER_OFF?: null; SEAT_HEATER_LOW?: null; SEAT_HEATER_MED?: null; SEAT_HEATER_HIGH: CarServer.Void.$Shape })
            ) & (
              ({ seat_position?: undefined; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_UNKNOWN"; CAR_SEAT_UNKNOWN: CarServer.Void.$Shape; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_FRONT_LEFT"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT: CarServer.Void.$Shape; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_FRONT_RIGHT"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT: CarServer.Void.$Shape; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_REAR_LEFT"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT: CarServer.Void.$Shape; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_REAR_LEFT_BACK"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK: CarServer.Void.$Shape; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_REAR_CENTER"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER: CarServer.Void.$Shape; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_REAR_RIGHT"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT: CarServer.Void.$Shape; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_REAR_RIGHT_BACK"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK: CarServer.Void.$Shape; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_THIRD_ROW_LEFT"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT: CarServer.Void.$Shape; CAR_SEAT_THIRD_ROW_RIGHT?: null }|{ seat_position?: "CAR_SEAT_THIRD_ROW_RIGHT"; CAR_SEAT_UNKNOWN?: null; CAR_SEAT_FRONT_LEFT?: null; CAR_SEAT_FRONT_RIGHT?: null; CAR_SEAT_REAR_LEFT?: null; CAR_SEAT_REAR_LEFT_BACK?: null; CAR_SEAT_REAR_CENTER?: null; CAR_SEAT_REAR_RIGHT?: null; CAR_SEAT_REAR_RIGHT_BACK?: null; CAR_SEAT_THIRD_ROW_LEFT?: null; CAR_SEAT_THIRD_ROW_RIGHT: CarServer.Void.$Shape })
            );
        }
    }

    /**
     * Properties of a HvacSeatCoolerActions.
     * @deprecated Use CarServer.HvacSeatCoolerActions.$Properties instead.
     */
    interface IHvacSeatCoolerActions extends CarServer.HvacSeatCoolerActions.$Properties {
    }

    /** Represents a HvacSeatCoolerActions. */
    class HvacSeatCoolerActions {

        /**
         * Constructs a new HvacSeatCoolerActions.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacSeatCoolerActions.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacSeatCoolerActions hvacSeatCoolerAction. */
        hvacSeatCoolerAction: CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties[];

        /**
         * Encodes the specified HvacSeatCoolerActions message. Does not implicitly {@link CarServer.HvacSeatCoolerActions.verify|verify} messages.
         * @param m HvacSeatCoolerActions message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacSeatCoolerActions.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacSeatCoolerActions message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacSeatCoolerActions & CarServer.HvacSeatCoolerActions.$Shape} HvacSeatCoolerActions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacSeatCoolerActions & CarServer.HvacSeatCoolerActions.$Shape;

        /**
         * Gets the type url for HvacSeatCoolerActions
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacSeatCoolerActions {

        /** Properties of a HvacSeatCoolerActions. */
        interface $Properties {

            /** HvacSeatCoolerActions hvacSeatCoolerAction */
            hvacSeatCoolerAction?: (CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacSeatCoolerActions. */
        type $Shape = CarServer.HvacSeatCoolerActions.$Properties;

        /** HvacSeatCoolerLevel_E enum. */
        enum HvacSeatCoolerLevel_E {

            /** HvacSeatCoolerLevel_Unknown value */
            HvacSeatCoolerLevel_Unknown = 0,

            /** HvacSeatCoolerLevel_Off value */
            HvacSeatCoolerLevel_Off = 1,

            /** HvacSeatCoolerLevel_Low value */
            HvacSeatCoolerLevel_Low = 2,

            /** HvacSeatCoolerLevel_Med value */
            HvacSeatCoolerLevel_Med = 3,

            /** HvacSeatCoolerLevel_High value */
            HvacSeatCoolerLevel_High = 4
        }

        /** HvacSeatCoolerPosition_E enum. */
        enum HvacSeatCoolerPosition_E {

            /** HvacSeatCoolerPosition_Unknown value */
            HvacSeatCoolerPosition_Unknown = 0,

            /** HvacSeatCoolerPosition_FrontLeft value */
            HvacSeatCoolerPosition_FrontLeft = 1,

            /** HvacSeatCoolerPosition_FrontRight value */
            HvacSeatCoolerPosition_FrontRight = 2
        }

        /**
         * Properties of a HvacSeatCoolerAction.
         * @deprecated Use CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties instead.
         */
        interface IHvacSeatCoolerAction extends CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties {
        }

        /** Represents a HvacSeatCoolerAction. */
        class HvacSeatCoolerAction {

            /**
             * Constructs a new HvacSeatCoolerAction.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HvacSeatCoolerAction seat_cooler_level. */
            seat_cooler_level: CarServer.HvacSeatCoolerActions.HvacSeatCoolerLevel_E;

            /** HvacSeatCoolerAction seat_position. */
            seat_position: CarServer.HvacSeatCoolerActions.HvacSeatCoolerPosition_E;

            /**
             * Encodes the specified HvacSeatCoolerAction message. Does not implicitly {@link CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.verify|verify} messages.
             * @param m HvacSeatCoolerAction message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HvacSeatCoolerAction message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction & CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Shape} HvacSeatCoolerAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction & CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Shape;

            /**
             * Gets the type url for HvacSeatCoolerAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HvacSeatCoolerAction {

            /** Properties of a HvacSeatCoolerAction. */
            interface $Properties {

                /** HvacSeatCoolerAction seat_cooler_level */
                seat_cooler_level?: (CarServer.HvacSeatCoolerActions.HvacSeatCoolerLevel_E|null);

                /** HvacSeatCoolerAction seat_position */
                seat_position?: (CarServer.HvacSeatCoolerActions.HvacSeatCoolerPosition_E|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a HvacSeatCoolerAction. */
            type $Shape = CarServer.HvacSeatCoolerActions.HvacSeatCoolerAction.$Properties;
        }
    }

    /**
     * Properties of a HvacSetPreconditioningMaxAction.
     * @deprecated Use CarServer.HvacSetPreconditioningMaxAction.$Properties instead.
     */
    interface IHvacSetPreconditioningMaxAction extends CarServer.HvacSetPreconditioningMaxAction.$Properties {
    }

    /** Represents a HvacSetPreconditioningMaxAction. */
    class HvacSetPreconditioningMaxAction {

        /**
         * Constructs a new HvacSetPreconditioningMaxAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacSetPreconditioningMaxAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacSetPreconditioningMaxAction on. */
        on: boolean;

        /** HvacSetPreconditioningMaxAction manual_override. */
        manual_override: boolean;

        /** HvacSetPreconditioningMaxAction manual_override_mode. */
        manual_override_mode: CarServer.HvacSetPreconditioningMaxAction.ManualOverrideMode_E[];

        /**
         * Encodes the specified HvacSetPreconditioningMaxAction message. Does not implicitly {@link CarServer.HvacSetPreconditioningMaxAction.verify|verify} messages.
         * @param m HvacSetPreconditioningMaxAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacSetPreconditioningMaxAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacSetPreconditioningMaxAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacSetPreconditioningMaxAction & CarServer.HvacSetPreconditioningMaxAction.$Shape} HvacSetPreconditioningMaxAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacSetPreconditioningMaxAction & CarServer.HvacSetPreconditioningMaxAction.$Shape;

        /**
         * Gets the type url for HvacSetPreconditioningMaxAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacSetPreconditioningMaxAction {

        /** Properties of a HvacSetPreconditioningMaxAction. */
        interface $Properties {

            /** HvacSetPreconditioningMaxAction on */
            on?: (boolean|null);

            /** HvacSetPreconditioningMaxAction manual_override */
            manual_override?: (boolean|null);

            /** HvacSetPreconditioningMaxAction manual_override_mode */
            manual_override_mode?: (CarServer.HvacSetPreconditioningMaxAction.ManualOverrideMode_E[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacSetPreconditioningMaxAction. */
        type $Shape = CarServer.HvacSetPreconditioningMaxAction.$Properties;

        /** ManualOverrideMode_E enum. */
        enum ManualOverrideMode_E {

            /** DogMode value */
            DogMode = 0,

            /** Soc value */
            Soc = 1,

            /** Doors value */
            Doors = 2
        }
    }

    /**
     * Properties of a HvacSteeringWheelHeaterAction.
     * @deprecated Use CarServer.HvacSteeringWheelHeaterAction.$Properties instead.
     */
    interface IHvacSteeringWheelHeaterAction extends CarServer.HvacSteeringWheelHeaterAction.$Properties {
    }

    /** Represents a HvacSteeringWheelHeaterAction. */
    class HvacSteeringWheelHeaterAction {

        /**
         * Constructs a new HvacSteeringWheelHeaterAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacSteeringWheelHeaterAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacSteeringWheelHeaterAction power_on. */
        power_on: boolean;

        /**
         * Encodes the specified HvacSteeringWheelHeaterAction message. Does not implicitly {@link CarServer.HvacSteeringWheelHeaterAction.verify|verify} messages.
         * @param m HvacSteeringWheelHeaterAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacSteeringWheelHeaterAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacSteeringWheelHeaterAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacSteeringWheelHeaterAction & CarServer.HvacSteeringWheelHeaterAction.$Shape} HvacSteeringWheelHeaterAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacSteeringWheelHeaterAction & CarServer.HvacSteeringWheelHeaterAction.$Shape;

        /**
         * Gets the type url for HvacSteeringWheelHeaterAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacSteeringWheelHeaterAction {

        /** Properties of a HvacSteeringWheelHeaterAction. */
        interface $Properties {

            /** HvacSteeringWheelHeaterAction power_on */
            power_on?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacSteeringWheelHeaterAction. */
        type $Shape = CarServer.HvacSteeringWheelHeaterAction.$Properties;
    }

    /**
     * Properties of a HvacTemperatureAdjustmentAction.
     * @deprecated Use CarServer.HvacTemperatureAdjustmentAction.$Properties instead.
     */
    interface IHvacTemperatureAdjustmentAction extends CarServer.HvacTemperatureAdjustmentAction.$Properties {
    }

    /** Represents a HvacTemperatureAdjustmentAction. */
    class HvacTemperatureAdjustmentAction {

        /**
         * Constructs a new HvacTemperatureAdjustmentAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacTemperatureAdjustmentAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacTemperatureAdjustmentAction delta_celsius. */
        delta_celsius: number;

        /** HvacTemperatureAdjustmentAction delta_percent. */
        delta_percent: number;

        /** HvacTemperatureAdjustmentAction absolute_celsius. */
        absolute_celsius: number;

        /** HvacTemperatureAdjustmentAction level. */
        level?: (CarServer.HvacTemperatureAdjustmentAction.Temperature.$Properties|null);

        /** HvacTemperatureAdjustmentAction hvac_temperature_zone. */
        hvac_temperature_zone: CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Properties[];

        /** HvacTemperatureAdjustmentAction driver_temp_celsius. */
        driver_temp_celsius: number;

        /** HvacTemperatureAdjustmentAction passenger_temp_celsius. */
        passenger_temp_celsius: number;

        /**
         * Encodes the specified HvacTemperatureAdjustmentAction message. Does not implicitly {@link CarServer.HvacTemperatureAdjustmentAction.verify|verify} messages.
         * @param m HvacTemperatureAdjustmentAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacTemperatureAdjustmentAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacTemperatureAdjustmentAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacTemperatureAdjustmentAction & CarServer.HvacTemperatureAdjustmentAction.$Shape} HvacTemperatureAdjustmentAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacTemperatureAdjustmentAction & CarServer.HvacTemperatureAdjustmentAction.$Shape;

        /**
         * Gets the type url for HvacTemperatureAdjustmentAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacTemperatureAdjustmentAction {

        /** Properties of a HvacTemperatureAdjustmentAction. */
        interface $Properties {

            /** HvacTemperatureAdjustmentAction delta_celsius */
            delta_celsius?: (number|null);

            /** HvacTemperatureAdjustmentAction delta_percent */
            delta_percent?: (number|null);

            /** HvacTemperatureAdjustmentAction absolute_celsius */
            absolute_celsius?: (number|null);

            /** HvacTemperatureAdjustmentAction level */
            level?: (CarServer.HvacTemperatureAdjustmentAction.Temperature.$Properties|null);

            /** HvacTemperatureAdjustmentAction hvac_temperature_zone */
            hvac_temperature_zone?: (CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Properties[]|null);

            /** HvacTemperatureAdjustmentAction driver_temp_celsius */
            driver_temp_celsius?: (number|null);

            /** HvacTemperatureAdjustmentAction passenger_temp_celsius */
            passenger_temp_celsius?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacTemperatureAdjustmentAction. */
        type $Shape = {
          delta_celsius?: number|null;
          delta_percent?: number|null;
          absolute_celsius?: number|null;
          level?: CarServer.HvacTemperatureAdjustmentAction.Temperature.$Shape|null;
          hvac_temperature_zone?: CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Shape[]|null;
          driver_temp_celsius?: number|null;
          passenger_temp_celsius?: number|null;
          $unknowns?: Uint8Array[];
        };

        /**
         * Properties of a Temperature.
         * @deprecated Use CarServer.HvacTemperatureAdjustmentAction.Temperature.$Properties instead.
         */
        interface ITemperature extends CarServer.HvacTemperatureAdjustmentAction.Temperature.$Properties {
        }

        /** Represents a Temperature. */
        class Temperature {

            /**
             * Constructs a new Temperature.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.HvacTemperatureAdjustmentAction.Temperature.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Temperature TEMP_UNKNOWN. */
            TEMP_UNKNOWN?: (CarServer.Void.$Properties|null);

            /** Temperature TEMP_MIN. */
            TEMP_MIN?: (CarServer.Void.$Properties|null);

            /** Temperature TEMP_MAX. */
            TEMP_MAX?: (CarServer.Void.$Properties|null);

            /** Temperature type. */
            type?: ("TEMP_UNKNOWN"|"TEMP_MIN"|"TEMP_MAX");

            /**
             * Encodes the specified Temperature message. Does not implicitly {@link CarServer.HvacTemperatureAdjustmentAction.Temperature.verify|verify} messages.
             * @param m Temperature message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.HvacTemperatureAdjustmentAction.Temperature.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Temperature message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.HvacTemperatureAdjustmentAction.Temperature & CarServer.HvacTemperatureAdjustmentAction.Temperature.$Shape} Temperature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacTemperatureAdjustmentAction.Temperature & CarServer.HvacTemperatureAdjustmentAction.Temperature.$Shape;

            /**
             * Gets the type url for Temperature
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Temperature {

            /** Properties of a Temperature. */
            interface $Properties {

                /** Temperature TEMP_UNKNOWN */
                TEMP_UNKNOWN?: (CarServer.Void.$Properties|null);

                /** Temperature TEMP_MIN */
                TEMP_MIN?: (CarServer.Void.$Properties|null);

                /** Temperature TEMP_MAX */
                TEMP_MAX?: (CarServer.Void.$Properties|null);

                /** Temperature type */
                type?: ("TEMP_UNKNOWN"|"TEMP_MIN"|"TEMP_MAX");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Temperature. */
            type $Shape = {
              TEMP_UNKNOWN?: CarServer.Void.$Shape|null;
              TEMP_MIN?: CarServer.Void.$Shape|null;
              TEMP_MAX?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; TEMP_UNKNOWN?: null; TEMP_MIN?: null; TEMP_MAX?: null }|{ type?: "TEMP_UNKNOWN"; TEMP_UNKNOWN: CarServer.Void.$Shape; TEMP_MIN?: null; TEMP_MAX?: null }|{ type?: "TEMP_MIN"; TEMP_UNKNOWN?: null; TEMP_MIN: CarServer.Void.$Shape; TEMP_MAX?: null }|{ type?: "TEMP_MAX"; TEMP_UNKNOWN?: null; TEMP_MIN?: null; TEMP_MAX: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a HvacTemperatureZone.
         * @deprecated Use CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Properties instead.
         */
        interface IHvacTemperatureZone extends CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Properties {
        }

        /** Represents a HvacTemperatureZone. */
        class HvacTemperatureZone {

            /**
             * Constructs a new HvacTemperatureZone.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HvacTemperatureZone TEMP_ZONE_UNKNOWN. */
            TEMP_ZONE_UNKNOWN?: (CarServer.Void.$Properties|null);

            /** HvacTemperatureZone TEMP_ZONE_FRONT_LEFT. */
            TEMP_ZONE_FRONT_LEFT?: (CarServer.Void.$Properties|null);

            /** HvacTemperatureZone TEMP_ZONE_FRONT_RIGHT. */
            TEMP_ZONE_FRONT_RIGHT?: (CarServer.Void.$Properties|null);

            /** HvacTemperatureZone TEMP_ZONE_REAR. */
            TEMP_ZONE_REAR?: (CarServer.Void.$Properties|null);

            /** HvacTemperatureZone type. */
            type?: ("TEMP_ZONE_UNKNOWN"|"TEMP_ZONE_FRONT_LEFT"|"TEMP_ZONE_FRONT_RIGHT"|"TEMP_ZONE_REAR");

            /**
             * Encodes the specified HvacTemperatureZone message. Does not implicitly {@link CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.verify|verify} messages.
             * @param m HvacTemperatureZone message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HvacTemperatureZone message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone & CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Shape} HvacTemperatureZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone & CarServer.HvacTemperatureAdjustmentAction.HvacTemperatureZone.$Shape;

            /**
             * Gets the type url for HvacTemperatureZone
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HvacTemperatureZone {

            /** Properties of a HvacTemperatureZone. */
            interface $Properties {

                /** HvacTemperatureZone TEMP_ZONE_UNKNOWN */
                TEMP_ZONE_UNKNOWN?: (CarServer.Void.$Properties|null);

                /** HvacTemperatureZone TEMP_ZONE_FRONT_LEFT */
                TEMP_ZONE_FRONT_LEFT?: (CarServer.Void.$Properties|null);

                /** HvacTemperatureZone TEMP_ZONE_FRONT_RIGHT */
                TEMP_ZONE_FRONT_RIGHT?: (CarServer.Void.$Properties|null);

                /** HvacTemperatureZone TEMP_ZONE_REAR */
                TEMP_ZONE_REAR?: (CarServer.Void.$Properties|null);

                /** HvacTemperatureZone type */
                type?: ("TEMP_ZONE_UNKNOWN"|"TEMP_ZONE_FRONT_LEFT"|"TEMP_ZONE_FRONT_RIGHT"|"TEMP_ZONE_REAR");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a HvacTemperatureZone. */
            type $Shape = {
              TEMP_ZONE_UNKNOWN?: CarServer.Void.$Shape|null;
              TEMP_ZONE_FRONT_LEFT?: CarServer.Void.$Shape|null;
              TEMP_ZONE_FRONT_RIGHT?: CarServer.Void.$Shape|null;
              TEMP_ZONE_REAR?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; TEMP_ZONE_UNKNOWN?: null; TEMP_ZONE_FRONT_LEFT?: null; TEMP_ZONE_FRONT_RIGHT?: null; TEMP_ZONE_REAR?: null }|{ type?: "TEMP_ZONE_UNKNOWN"; TEMP_ZONE_UNKNOWN: CarServer.Void.$Shape; TEMP_ZONE_FRONT_LEFT?: null; TEMP_ZONE_FRONT_RIGHT?: null; TEMP_ZONE_REAR?: null }|{ type?: "TEMP_ZONE_FRONT_LEFT"; TEMP_ZONE_UNKNOWN?: null; TEMP_ZONE_FRONT_LEFT: CarServer.Void.$Shape; TEMP_ZONE_FRONT_RIGHT?: null; TEMP_ZONE_REAR?: null }|{ type?: "TEMP_ZONE_FRONT_RIGHT"; TEMP_ZONE_UNKNOWN?: null; TEMP_ZONE_FRONT_LEFT?: null; TEMP_ZONE_FRONT_RIGHT: CarServer.Void.$Shape; TEMP_ZONE_REAR?: null }|{ type?: "TEMP_ZONE_REAR"; TEMP_ZONE_UNKNOWN?: null; TEMP_ZONE_FRONT_LEFT?: null; TEMP_ZONE_FRONT_RIGHT?: null; TEMP_ZONE_REAR: CarServer.Void.$Shape })
            );
        }
    }

    /**
     * Properties of a GetNearbyChargingSites.
     * @deprecated Use CarServer.GetNearbyChargingSites.$Properties instead.
     */
    interface IGetNearbyChargingSites extends CarServer.GetNearbyChargingSites.$Properties {
    }

    /** Represents a GetNearbyChargingSites. */
    class GetNearbyChargingSites {

        /**
         * Constructs a new GetNearbyChargingSites.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.GetNearbyChargingSites.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetNearbyChargingSites include_meta_data. */
        include_meta_data: boolean;

        /** GetNearbyChargingSites radius. */
        radius: number;

        /** GetNearbyChargingSites count. */
        count: number;

        /**
         * Encodes the specified GetNearbyChargingSites message. Does not implicitly {@link CarServer.GetNearbyChargingSites.verify|verify} messages.
         * @param m GetNearbyChargingSites message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.GetNearbyChargingSites.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetNearbyChargingSites message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.GetNearbyChargingSites & CarServer.GetNearbyChargingSites.$Shape} GetNearbyChargingSites
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.GetNearbyChargingSites & CarServer.GetNearbyChargingSites.$Shape;

        /**
         * Gets the type url for GetNearbyChargingSites
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetNearbyChargingSites {

        /** Properties of a GetNearbyChargingSites. */
        interface $Properties {

            /** GetNearbyChargingSites include_meta_data */
            include_meta_data?: (boolean|null);

            /** GetNearbyChargingSites radius */
            radius?: (number|null);

            /** GetNearbyChargingSites count */
            count?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetNearbyChargingSites. */
        type $Shape = CarServer.GetNearbyChargingSites.$Properties;
    }

    /**
     * Properties of a NearbyChargingSites.
     * @deprecated Use CarServer.NearbyChargingSites.$Properties instead.
     */
    interface INearbyChargingSites extends CarServer.NearbyChargingSites.$Properties {
    }

    /** Represents a NearbyChargingSites. */
    class NearbyChargingSites {

        /**
         * Constructs a new NearbyChargingSites.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.NearbyChargingSites.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** NearbyChargingSites timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** NearbyChargingSites superchargers. */
        superchargers: CarServer.Superchargers.$Properties[];

        /** NearbyChargingSites congestion_sync_time_utc_secs. */
        congestion_sync_time_utc_secs: number;

        /**
         * Encodes the specified NearbyChargingSites message. Does not implicitly {@link CarServer.NearbyChargingSites.verify|verify} messages.
         * @param m NearbyChargingSites message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.NearbyChargingSites.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NearbyChargingSites message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.NearbyChargingSites & CarServer.NearbyChargingSites.$Shape} NearbyChargingSites
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.NearbyChargingSites & CarServer.NearbyChargingSites.$Shape;

        /**
         * Gets the type url for NearbyChargingSites
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NearbyChargingSites {

        /** Properties of a NearbyChargingSites. */
        interface $Properties {

            /** NearbyChargingSites timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** NearbyChargingSites superchargers */
            superchargers?: (CarServer.Superchargers.$Properties[]|null);

            /** NearbyChargingSites congestion_sync_time_utc_secs */
            congestion_sync_time_utc_secs?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NearbyChargingSites. */
        type $Shape = CarServer.NearbyChargingSites.$Properties;
    }

    /**
     * Properties of a Superchargers.
     * @deprecated Use CarServer.Superchargers.$Properties instead.
     */
    interface ISuperchargers extends CarServer.Superchargers.$Properties {
    }

    /** Represents a Superchargers. */
    class Superchargers {

        /**
         * Constructs a new Superchargers.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.Superchargers.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Superchargers id. */
        id: number;

        /** Superchargers amenities. */
        amenities: string;

        /** Superchargers available_stalls. */
        available_stalls: number;

        /** Superchargers billing_info. */
        billing_info: string;

        /** Superchargers billing_time. */
        billing_time: string;

        /** Superchargers city. */
        city: string;

        /** Superchargers country. */
        country: string;

        /** Superchargers distance_miles. */
        distance_miles: number;

        /** Superchargers district. */
        district: string;

        /** Superchargers location. */
        location?: (CarServer.LatLong.$Properties|null);

        /** Superchargers name. */
        name: string;

        /** Superchargers postal_code. */
        postal_code: string;

        /** Superchargers site_closed. */
        site_closed: boolean;

        /** Superchargers state. */
        state: string;

        /** Superchargers street_address. */
        street_address: string;

        /** Superchargers total_stalls. */
        total_stalls: number;

        /** Superchargers within_range. */
        within_range: boolean;

        /** Superchargers max_power_kw. */
        max_power_kw: number;

        /** Superchargers out_of_order_stalls_number. */
        out_of_order_stalls_number: number;

        /** Superchargers out_of_order_stalls_names. */
        out_of_order_stalls_names: string;

        /**
         * Encodes the specified Superchargers message. Does not implicitly {@link CarServer.Superchargers.verify|verify} messages.
         * @param m Superchargers message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.Superchargers.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Superchargers message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.Superchargers & CarServer.Superchargers.$Shape} Superchargers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.Superchargers & CarServer.Superchargers.$Shape;

        /**
         * Gets the type url for Superchargers
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Superchargers {

        /** Properties of a Superchargers. */
        interface $Properties {

            /** Superchargers id */
            id?: (number|null);

            /** Superchargers amenities */
            amenities?: (string|null);

            /** Superchargers available_stalls */
            available_stalls?: (number|null);

            /** Superchargers billing_info */
            billing_info?: (string|null);

            /** Superchargers billing_time */
            billing_time?: (string|null);

            /** Superchargers city */
            city?: (string|null);

            /** Superchargers country */
            country?: (string|null);

            /** Superchargers distance_miles */
            distance_miles?: (number|null);

            /** Superchargers district */
            district?: (string|null);

            /** Superchargers location */
            location?: (CarServer.LatLong.$Properties|null);

            /** Superchargers name */
            name?: (string|null);

            /** Superchargers postal_code */
            postal_code?: (string|null);

            /** Superchargers site_closed */
            site_closed?: (boolean|null);

            /** Superchargers state */
            state?: (string|null);

            /** Superchargers street_address */
            street_address?: (string|null);

            /** Superchargers total_stalls */
            total_stalls?: (number|null);

            /** Superchargers within_range */
            within_range?: (boolean|null);

            /** Superchargers max_power_kw */
            max_power_kw?: (number|null);

            /** Superchargers out_of_order_stalls_number */
            out_of_order_stalls_number?: (number|null);

            /** Superchargers out_of_order_stalls_names */
            out_of_order_stalls_names?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Superchargers. */
        type $Shape = CarServer.Superchargers.$Properties;
    }

    /**
     * Properties of a MediaPlayAction.
     * @deprecated Use CarServer.MediaPlayAction.$Properties instead.
     */
    interface IMediaPlayAction extends CarServer.MediaPlayAction.$Properties {
    }

    /** Represents a MediaPlayAction. */
    class MediaPlayAction {

        /**
         * Constructs a new MediaPlayAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaPlayAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified MediaPlayAction message. Does not implicitly {@link CarServer.MediaPlayAction.verify|verify} messages.
         * @param m MediaPlayAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaPlayAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaPlayAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaPlayAction & CarServer.MediaPlayAction.$Shape} MediaPlayAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaPlayAction & CarServer.MediaPlayAction.$Shape;

        /**
         * Gets the type url for MediaPlayAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaPlayAction {

        /** Properties of a MediaPlayAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MediaPlayAction. */
        type $Shape = CarServer.MediaPlayAction.$Properties;
    }

    /**
     * Properties of a MediaUpdateVolume.
     * @deprecated Use CarServer.MediaUpdateVolume.$Properties instead.
     */
    interface IMediaUpdateVolume extends CarServer.MediaUpdateVolume.$Properties {
    }

    /** Represents a MediaUpdateVolume. */
    class MediaUpdateVolume {

        /**
         * Constructs a new MediaUpdateVolume.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaUpdateVolume.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MediaUpdateVolume volume_delta. */
        volume_delta?: (number|null);

        /** MediaUpdateVolume volume_absolute_float. */
        volume_absolute_float?: (number|null);

        /** MediaUpdateVolume media_volume. */
        media_volume?: ("volume_delta"|"volume_absolute_float");

        /**
         * Encodes the specified MediaUpdateVolume message. Does not implicitly {@link CarServer.MediaUpdateVolume.verify|verify} messages.
         * @param m MediaUpdateVolume message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaUpdateVolume.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaUpdateVolume message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaUpdateVolume & CarServer.MediaUpdateVolume.$Shape} MediaUpdateVolume
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaUpdateVolume & CarServer.MediaUpdateVolume.$Shape;

        /**
         * Gets the type url for MediaUpdateVolume
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaUpdateVolume {

        /** Properties of a MediaUpdateVolume. */
        interface $Properties {

            /** MediaUpdateVolume volume_delta */
            volume_delta?: (number|null);

            /** MediaUpdateVolume volume_absolute_float */
            volume_absolute_float?: (number|null);

            /** MediaUpdateVolume media_volume */
            media_volume?: ("volume_delta"|"volume_absolute_float");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a MediaUpdateVolume. */
        type $Shape = {
          volume_delta?: number|null;
          volume_absolute_float?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ media_volume?: undefined; volume_delta?: null; volume_absolute_float?: null }|{ media_volume?: "volume_delta"; volume_delta: number; volume_absolute_float?: null }|{ media_volume?: "volume_absolute_float"; volume_delta?: null; volume_absolute_float: number })
        );
    }

    /**
     * Properties of a MediaNextFavorite.
     * @deprecated Use CarServer.MediaNextFavorite.$Properties instead.
     */
    interface IMediaNextFavorite extends CarServer.MediaNextFavorite.$Properties {
    }

    /** Represents a MediaNextFavorite. */
    class MediaNextFavorite {

        /**
         * Constructs a new MediaNextFavorite.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaNextFavorite.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified MediaNextFavorite message. Does not implicitly {@link CarServer.MediaNextFavorite.verify|verify} messages.
         * @param m MediaNextFavorite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaNextFavorite.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaNextFavorite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaNextFavorite & CarServer.MediaNextFavorite.$Shape} MediaNextFavorite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaNextFavorite & CarServer.MediaNextFavorite.$Shape;

        /**
         * Gets the type url for MediaNextFavorite
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaNextFavorite {

        /** Properties of a MediaNextFavorite. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MediaNextFavorite. */
        type $Shape = CarServer.MediaNextFavorite.$Properties;
    }

    /**
     * Properties of a MediaPreviousFavorite.
     * @deprecated Use CarServer.MediaPreviousFavorite.$Properties instead.
     */
    interface IMediaPreviousFavorite extends CarServer.MediaPreviousFavorite.$Properties {
    }

    /** Represents a MediaPreviousFavorite. */
    class MediaPreviousFavorite {

        /**
         * Constructs a new MediaPreviousFavorite.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaPreviousFavorite.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified MediaPreviousFavorite message. Does not implicitly {@link CarServer.MediaPreviousFavorite.verify|verify} messages.
         * @param m MediaPreviousFavorite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaPreviousFavorite.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaPreviousFavorite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaPreviousFavorite & CarServer.MediaPreviousFavorite.$Shape} MediaPreviousFavorite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaPreviousFavorite & CarServer.MediaPreviousFavorite.$Shape;

        /**
         * Gets the type url for MediaPreviousFavorite
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaPreviousFavorite {

        /** Properties of a MediaPreviousFavorite. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MediaPreviousFavorite. */
        type $Shape = CarServer.MediaPreviousFavorite.$Properties;
    }

    /**
     * Properties of a MediaNextTrack.
     * @deprecated Use CarServer.MediaNextTrack.$Properties instead.
     */
    interface IMediaNextTrack extends CarServer.MediaNextTrack.$Properties {
    }

    /** Represents a MediaNextTrack. */
    class MediaNextTrack {

        /**
         * Constructs a new MediaNextTrack.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaNextTrack.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified MediaNextTrack message. Does not implicitly {@link CarServer.MediaNextTrack.verify|verify} messages.
         * @param m MediaNextTrack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaNextTrack.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaNextTrack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaNextTrack & CarServer.MediaNextTrack.$Shape} MediaNextTrack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaNextTrack & CarServer.MediaNextTrack.$Shape;

        /**
         * Gets the type url for MediaNextTrack
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaNextTrack {

        /** Properties of a MediaNextTrack. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MediaNextTrack. */
        type $Shape = CarServer.MediaNextTrack.$Properties;
    }

    /**
     * Properties of a MediaPreviousTrack.
     * @deprecated Use CarServer.MediaPreviousTrack.$Properties instead.
     */
    interface IMediaPreviousTrack extends CarServer.MediaPreviousTrack.$Properties {
    }

    /** Represents a MediaPreviousTrack. */
    class MediaPreviousTrack {

        /**
         * Constructs a new MediaPreviousTrack.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaPreviousTrack.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified MediaPreviousTrack message. Does not implicitly {@link CarServer.MediaPreviousTrack.verify|verify} messages.
         * @param m MediaPreviousTrack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaPreviousTrack.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaPreviousTrack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaPreviousTrack & CarServer.MediaPreviousTrack.$Shape} MediaPreviousTrack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaPreviousTrack & CarServer.MediaPreviousTrack.$Shape;

        /**
         * Gets the type url for MediaPreviousTrack
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaPreviousTrack {

        /** Properties of a MediaPreviousTrack. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MediaPreviousTrack. */
        type $Shape = CarServer.MediaPreviousTrack.$Properties;
    }

    /**
     * Properties of a VehicleControlCancelSoftwareUpdateAction.
     * @deprecated Use CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties instead.
     */
    interface IVehicleControlCancelSoftwareUpdateAction extends CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties {
    }

    /** Represents a VehicleControlCancelSoftwareUpdateAction. */
    class VehicleControlCancelSoftwareUpdateAction {

        /**
         * Constructs a new VehicleControlCancelSoftwareUpdateAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified VehicleControlCancelSoftwareUpdateAction message. Does not implicitly {@link CarServer.VehicleControlCancelSoftwareUpdateAction.verify|verify} messages.
         * @param m VehicleControlCancelSoftwareUpdateAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlCancelSoftwareUpdateAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlCancelSoftwareUpdateAction & CarServer.VehicleControlCancelSoftwareUpdateAction.$Shape} VehicleControlCancelSoftwareUpdateAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlCancelSoftwareUpdateAction & CarServer.VehicleControlCancelSoftwareUpdateAction.$Shape;

        /**
         * Gets the type url for VehicleControlCancelSoftwareUpdateAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlCancelSoftwareUpdateAction {

        /** Properties of a VehicleControlCancelSoftwareUpdateAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlCancelSoftwareUpdateAction. */
        type $Shape = CarServer.VehicleControlCancelSoftwareUpdateAction.$Properties;
    }

    /**
     * Properties of a VehicleControlFlashLightsAction.
     * @deprecated Use CarServer.VehicleControlFlashLightsAction.$Properties instead.
     */
    interface IVehicleControlFlashLightsAction extends CarServer.VehicleControlFlashLightsAction.$Properties {
    }

    /** Represents a VehicleControlFlashLightsAction. */
    class VehicleControlFlashLightsAction {

        /**
         * Constructs a new VehicleControlFlashLightsAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlFlashLightsAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified VehicleControlFlashLightsAction message. Does not implicitly {@link CarServer.VehicleControlFlashLightsAction.verify|verify} messages.
         * @param m VehicleControlFlashLightsAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlFlashLightsAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlFlashLightsAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlFlashLightsAction & CarServer.VehicleControlFlashLightsAction.$Shape} VehicleControlFlashLightsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlFlashLightsAction & CarServer.VehicleControlFlashLightsAction.$Shape;

        /**
         * Gets the type url for VehicleControlFlashLightsAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlFlashLightsAction {

        /** Properties of a VehicleControlFlashLightsAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlFlashLightsAction. */
        type $Shape = CarServer.VehicleControlFlashLightsAction.$Properties;
    }

    /**
     * Properties of a VehicleControlHonkHornAction.
     * @deprecated Use CarServer.VehicleControlHonkHornAction.$Properties instead.
     */
    interface IVehicleControlHonkHornAction extends CarServer.VehicleControlHonkHornAction.$Properties {
    }

    /** Represents a VehicleControlHonkHornAction. */
    class VehicleControlHonkHornAction {

        /**
         * Constructs a new VehicleControlHonkHornAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlHonkHornAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified VehicleControlHonkHornAction message. Does not implicitly {@link CarServer.VehicleControlHonkHornAction.verify|verify} messages.
         * @param m VehicleControlHonkHornAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlHonkHornAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlHonkHornAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlHonkHornAction & CarServer.VehicleControlHonkHornAction.$Shape} VehicleControlHonkHornAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlHonkHornAction & CarServer.VehicleControlHonkHornAction.$Shape;

        /**
         * Gets the type url for VehicleControlHonkHornAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlHonkHornAction {

        /** Properties of a VehicleControlHonkHornAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlHonkHornAction. */
        type $Shape = CarServer.VehicleControlHonkHornAction.$Properties;
    }

    /**
     * Properties of a VehicleControlResetValetPinAction.
     * @deprecated Use CarServer.VehicleControlResetValetPinAction.$Properties instead.
     */
    interface IVehicleControlResetValetPinAction extends CarServer.VehicleControlResetValetPinAction.$Properties {
    }

    /** Represents a VehicleControlResetValetPinAction. */
    class VehicleControlResetValetPinAction {

        /**
         * Constructs a new VehicleControlResetValetPinAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlResetValetPinAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified VehicleControlResetValetPinAction message. Does not implicitly {@link CarServer.VehicleControlResetValetPinAction.verify|verify} messages.
         * @param m VehicleControlResetValetPinAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlResetValetPinAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlResetValetPinAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlResetValetPinAction & CarServer.VehicleControlResetValetPinAction.$Shape} VehicleControlResetValetPinAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlResetValetPinAction & CarServer.VehicleControlResetValetPinAction.$Shape;

        /**
         * Gets the type url for VehicleControlResetValetPinAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlResetValetPinAction {

        /** Properties of a VehicleControlResetValetPinAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlResetValetPinAction. */
        type $Shape = CarServer.VehicleControlResetValetPinAction.$Properties;
    }

    /**
     * Properties of a VehicleControlScheduleSoftwareUpdateAction.
     * @deprecated Use CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties instead.
     */
    interface IVehicleControlScheduleSoftwareUpdateAction extends CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties {
    }

    /** Represents a VehicleControlScheduleSoftwareUpdateAction. */
    class VehicleControlScheduleSoftwareUpdateAction {

        /**
         * Constructs a new VehicleControlScheduleSoftwareUpdateAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlScheduleSoftwareUpdateAction offset_sec. */
        offset_sec: number;

        /**
         * Encodes the specified VehicleControlScheduleSoftwareUpdateAction message. Does not implicitly {@link CarServer.VehicleControlScheduleSoftwareUpdateAction.verify|verify} messages.
         * @param m VehicleControlScheduleSoftwareUpdateAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlScheduleSoftwareUpdateAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlScheduleSoftwareUpdateAction & CarServer.VehicleControlScheduleSoftwareUpdateAction.$Shape} VehicleControlScheduleSoftwareUpdateAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlScheduleSoftwareUpdateAction & CarServer.VehicleControlScheduleSoftwareUpdateAction.$Shape;

        /**
         * Gets the type url for VehicleControlScheduleSoftwareUpdateAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlScheduleSoftwareUpdateAction {

        /** Properties of a VehicleControlScheduleSoftwareUpdateAction. */
        interface $Properties {

            /** VehicleControlScheduleSoftwareUpdateAction offset_sec */
            offset_sec?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlScheduleSoftwareUpdateAction. */
        type $Shape = CarServer.VehicleControlScheduleSoftwareUpdateAction.$Properties;
    }

    /**
     * Properties of a VehicleControlSetSentryModeAction.
     * @deprecated Use CarServer.VehicleControlSetSentryModeAction.$Properties instead.
     */
    interface IVehicleControlSetSentryModeAction extends CarServer.VehicleControlSetSentryModeAction.$Properties {
    }

    /** Represents a VehicleControlSetSentryModeAction. */
    class VehicleControlSetSentryModeAction {

        /**
         * Constructs a new VehicleControlSetSentryModeAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlSetSentryModeAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlSetSentryModeAction on. */
        on: boolean;

        /**
         * Encodes the specified VehicleControlSetSentryModeAction message. Does not implicitly {@link CarServer.VehicleControlSetSentryModeAction.verify|verify} messages.
         * @param m VehicleControlSetSentryModeAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlSetSentryModeAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlSetSentryModeAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlSetSentryModeAction & CarServer.VehicleControlSetSentryModeAction.$Shape} VehicleControlSetSentryModeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlSetSentryModeAction & CarServer.VehicleControlSetSentryModeAction.$Shape;

        /**
         * Gets the type url for VehicleControlSetSentryModeAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlSetSentryModeAction {

        /** Properties of a VehicleControlSetSentryModeAction. */
        interface $Properties {

            /** VehicleControlSetSentryModeAction on */
            on?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlSetSentryModeAction. */
        type $Shape = CarServer.VehicleControlSetSentryModeAction.$Properties;
    }

    /**
     * Properties of a VehicleControlSetValetModeAction.
     * @deprecated Use CarServer.VehicleControlSetValetModeAction.$Properties instead.
     */
    interface IVehicleControlSetValetModeAction extends CarServer.VehicleControlSetValetModeAction.$Properties {
    }

    /** Represents a VehicleControlSetValetModeAction. */
    class VehicleControlSetValetModeAction {

        /**
         * Constructs a new VehicleControlSetValetModeAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlSetValetModeAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlSetValetModeAction on. */
        on: boolean;

        /** VehicleControlSetValetModeAction password. */
        password: string;

        /**
         * Encodes the specified VehicleControlSetValetModeAction message. Does not implicitly {@link CarServer.VehicleControlSetValetModeAction.verify|verify} messages.
         * @param m VehicleControlSetValetModeAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlSetValetModeAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlSetValetModeAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlSetValetModeAction & CarServer.VehicleControlSetValetModeAction.$Shape} VehicleControlSetValetModeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlSetValetModeAction & CarServer.VehicleControlSetValetModeAction.$Shape;

        /**
         * Gets the type url for VehicleControlSetValetModeAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlSetValetModeAction {

        /** Properties of a VehicleControlSetValetModeAction. */
        interface $Properties {

            /** VehicleControlSetValetModeAction on */
            on?: (boolean|null);

            /** VehicleControlSetValetModeAction password */
            password?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlSetValetModeAction. */
        type $Shape = CarServer.VehicleControlSetValetModeAction.$Properties;
    }

    /**
     * Properties of a VehicleControlSunroofOpenCloseAction.
     * @deprecated Use CarServer.VehicleControlSunroofOpenCloseAction.$Properties instead.
     */
    interface IVehicleControlSunroofOpenCloseAction extends CarServer.VehicleControlSunroofOpenCloseAction.$Properties {
    }

    /** Represents a VehicleControlSunroofOpenCloseAction. */
    class VehicleControlSunroofOpenCloseAction {

        /**
         * Constructs a new VehicleControlSunroofOpenCloseAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlSunroofOpenCloseAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlSunroofOpenCloseAction absolute_level. */
        absolute_level?: (number|null);

        /** VehicleControlSunroofOpenCloseAction delta_level. */
        delta_level?: (number|null);

        /** VehicleControlSunroofOpenCloseAction vent. */
        vent?: (CarServer.Void.$Properties|null);

        /** VehicleControlSunroofOpenCloseAction close. */
        close?: (CarServer.Void.$Properties|null);

        /** VehicleControlSunroofOpenCloseAction open. */
        open?: (CarServer.Void.$Properties|null);

        /** VehicleControlSunroofOpenCloseAction sunroof_level. */
        sunroof_level?: ("absolute_level"|"delta_level");

        /** VehicleControlSunroofOpenCloseAction action. */
        action?: ("vent"|"close"|"open");

        /**
         * Encodes the specified VehicleControlSunroofOpenCloseAction message. Does not implicitly {@link CarServer.VehicleControlSunroofOpenCloseAction.verify|verify} messages.
         * @param m VehicleControlSunroofOpenCloseAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlSunroofOpenCloseAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlSunroofOpenCloseAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlSunroofOpenCloseAction & CarServer.VehicleControlSunroofOpenCloseAction.$Shape} VehicleControlSunroofOpenCloseAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlSunroofOpenCloseAction & CarServer.VehicleControlSunroofOpenCloseAction.$Shape;

        /**
         * Gets the type url for VehicleControlSunroofOpenCloseAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlSunroofOpenCloseAction {

        /** Properties of a VehicleControlSunroofOpenCloseAction. */
        interface $Properties {

            /** VehicleControlSunroofOpenCloseAction absolute_level */
            absolute_level?: (number|null);

            /** VehicleControlSunroofOpenCloseAction delta_level */
            delta_level?: (number|null);

            /** VehicleControlSunroofOpenCloseAction vent */
            vent?: (CarServer.Void.$Properties|null);

            /** VehicleControlSunroofOpenCloseAction close */
            close?: (CarServer.Void.$Properties|null);

            /** VehicleControlSunroofOpenCloseAction open */
            open?: (CarServer.Void.$Properties|null);

            /** VehicleControlSunroofOpenCloseAction sunroof_level */
            sunroof_level?: ("absolute_level"|"delta_level");

            /** VehicleControlSunroofOpenCloseAction action */
            action?: ("vent"|"close"|"open");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a VehicleControlSunroofOpenCloseAction. */
        type $Shape = {
          absolute_level?: number|null;
          delta_level?: number|null;
          vent?: CarServer.Void.$Shape|null;
          close?: CarServer.Void.$Shape|null;
          open?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sunroof_level?: undefined; absolute_level?: null; delta_level?: null }|{ sunroof_level?: "absolute_level"; absolute_level: number; delta_level?: null }|{ sunroof_level?: "delta_level"; absolute_level?: null; delta_level: number })
        ) & (
          ({ action?: undefined; vent?: null; close?: null; open?: null }|{ action?: "vent"; vent: CarServer.Void.$Shape; close?: null; open?: null }|{ action?: "close"; vent?: null; close: CarServer.Void.$Shape; open?: null }|{ action?: "open"; vent?: null; close?: null; open: CarServer.Void.$Shape })
        );
    }

    /**
     * Properties of a VehicleControlTriggerHomelinkAction.
     * @deprecated Use CarServer.VehicleControlTriggerHomelinkAction.$Properties instead.
     */
    interface IVehicleControlTriggerHomelinkAction extends CarServer.VehicleControlTriggerHomelinkAction.$Properties {
    }

    /** Represents a VehicleControlTriggerHomelinkAction. */
    class VehicleControlTriggerHomelinkAction {

        /**
         * Constructs a new VehicleControlTriggerHomelinkAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlTriggerHomelinkAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlTriggerHomelinkAction location. */
        location?: (CarServer.LatLong.$Properties|null);

        /** VehicleControlTriggerHomelinkAction token. */
        token: string;

        /**
         * Encodes the specified VehicleControlTriggerHomelinkAction message. Does not implicitly {@link CarServer.VehicleControlTriggerHomelinkAction.verify|verify} messages.
         * @param m VehicleControlTriggerHomelinkAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlTriggerHomelinkAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlTriggerHomelinkAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlTriggerHomelinkAction & CarServer.VehicleControlTriggerHomelinkAction.$Shape} VehicleControlTriggerHomelinkAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlTriggerHomelinkAction & CarServer.VehicleControlTriggerHomelinkAction.$Shape;

        /**
         * Gets the type url for VehicleControlTriggerHomelinkAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlTriggerHomelinkAction {

        /** Properties of a VehicleControlTriggerHomelinkAction. */
        interface $Properties {

            /** VehicleControlTriggerHomelinkAction location */
            location?: (CarServer.LatLong.$Properties|null);

            /** VehicleControlTriggerHomelinkAction token */
            token?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlTriggerHomelinkAction. */
        type $Shape = CarServer.VehicleControlTriggerHomelinkAction.$Properties;
    }

    /**
     * Properties of a VehicleControlWindowAction.
     * @deprecated Use CarServer.VehicleControlWindowAction.$Properties instead.
     */
    interface IVehicleControlWindowAction extends CarServer.VehicleControlWindowAction.$Properties {
    }

    /** Represents a VehicleControlWindowAction. */
    class VehicleControlWindowAction {

        /**
         * Constructs a new VehicleControlWindowAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlWindowAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlWindowAction unknown. */
        unknown?: (CarServer.Void.$Properties|null);

        /** VehicleControlWindowAction vent. */
        vent?: (CarServer.Void.$Properties|null);

        /** VehicleControlWindowAction close. */
        close?: (CarServer.Void.$Properties|null);

        /** VehicleControlWindowAction action. */
        action?: ("unknown"|"vent"|"close");

        /**
         * Encodes the specified VehicleControlWindowAction message. Does not implicitly {@link CarServer.VehicleControlWindowAction.verify|verify} messages.
         * @param m VehicleControlWindowAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlWindowAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlWindowAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlWindowAction & CarServer.VehicleControlWindowAction.$Shape} VehicleControlWindowAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlWindowAction & CarServer.VehicleControlWindowAction.$Shape;

        /**
         * Gets the type url for VehicleControlWindowAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlWindowAction {

        /** Properties of a VehicleControlWindowAction. */
        interface $Properties {

            /** VehicleControlWindowAction unknown */
            unknown?: (CarServer.Void.$Properties|null);

            /** VehicleControlWindowAction vent */
            vent?: (CarServer.Void.$Properties|null);

            /** VehicleControlWindowAction close */
            close?: (CarServer.Void.$Properties|null);

            /** VehicleControlWindowAction action */
            action?: ("unknown"|"vent"|"close");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a VehicleControlWindowAction. */
        type $Shape = {
          unknown?: CarServer.Void.$Shape|null;
          vent?: CarServer.Void.$Shape|null;
          close?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ action?: undefined; unknown?: null; vent?: null; close?: null }|{ action?: "unknown"; unknown: CarServer.Void.$Shape; vent?: null; close?: null }|{ action?: "vent"; unknown?: null; vent: CarServer.Void.$Shape; close?: null }|{ action?: "close"; unknown?: null; vent?: null; close: CarServer.Void.$Shape })
        );
    }

    /**
     * Properties of a HvacBioweaponModeAction.
     * @deprecated Use CarServer.HvacBioweaponModeAction.$Properties instead.
     */
    interface IHvacBioweaponModeAction extends CarServer.HvacBioweaponModeAction.$Properties {
    }

    /** Represents a HvacBioweaponModeAction. */
    class HvacBioweaponModeAction {

        /**
         * Constructs a new HvacBioweaponModeAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacBioweaponModeAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacBioweaponModeAction on. */
        on: boolean;

        /** HvacBioweaponModeAction manual_override. */
        manual_override: boolean;

        /**
         * Encodes the specified HvacBioweaponModeAction message. Does not implicitly {@link CarServer.HvacBioweaponModeAction.verify|verify} messages.
         * @param m HvacBioweaponModeAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacBioweaponModeAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacBioweaponModeAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacBioweaponModeAction & CarServer.HvacBioweaponModeAction.$Shape} HvacBioweaponModeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacBioweaponModeAction & CarServer.HvacBioweaponModeAction.$Shape;

        /**
         * Gets the type url for HvacBioweaponModeAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacBioweaponModeAction {

        /** Properties of a HvacBioweaponModeAction. */
        interface $Properties {

            /** HvacBioweaponModeAction on */
            on?: (boolean|null);

            /** HvacBioweaponModeAction manual_override */
            manual_override?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacBioweaponModeAction. */
        type $Shape = CarServer.HvacBioweaponModeAction.$Properties;
    }

    /**
     * Properties of an AutoSeatClimateAction.
     * @deprecated Use CarServer.AutoSeatClimateAction.$Properties instead.
     */
    interface IAutoSeatClimateAction extends CarServer.AutoSeatClimateAction.$Properties {
    }

    /** Represents an AutoSeatClimateAction. */
    class AutoSeatClimateAction {

        /**
         * Constructs a new AutoSeatClimateAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.AutoSeatClimateAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AutoSeatClimateAction carseat. */
        carseat: CarServer.AutoSeatClimateAction.CarSeat.$Properties[];

        /**
         * Encodes the specified AutoSeatClimateAction message. Does not implicitly {@link CarServer.AutoSeatClimateAction.verify|verify} messages.
         * @param m AutoSeatClimateAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.AutoSeatClimateAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoSeatClimateAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.AutoSeatClimateAction & CarServer.AutoSeatClimateAction.$Shape} AutoSeatClimateAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.AutoSeatClimateAction & CarServer.AutoSeatClimateAction.$Shape;

        /**
         * Gets the type url for AutoSeatClimateAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AutoSeatClimateAction {

        /** Properties of an AutoSeatClimateAction. */
        interface $Properties {

            /** AutoSeatClimateAction carseat */
            carseat?: (CarServer.AutoSeatClimateAction.CarSeat.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AutoSeatClimateAction. */
        type $Shape = CarServer.AutoSeatClimateAction.$Properties;

        /** AutoSeatPosition_E enum. */
        enum AutoSeatPosition_E {

            /** AutoSeatPosition_Unknown value */
            AutoSeatPosition_Unknown = 0,

            /** AutoSeatPosition_FrontLeft value */
            AutoSeatPosition_FrontLeft = 1,

            /** AutoSeatPosition_FrontRight value */
            AutoSeatPosition_FrontRight = 2
        }

        /**
         * Properties of a CarSeat.
         * @deprecated Use CarServer.AutoSeatClimateAction.CarSeat.$Properties instead.
         */
        interface ICarSeat extends CarServer.AutoSeatClimateAction.CarSeat.$Properties {
        }

        /** Represents a CarSeat. */
        class CarSeat {

            /**
             * Constructs a new CarSeat.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.AutoSeatClimateAction.CarSeat.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CarSeat on. */
            on: boolean;

            /** CarSeat seat_position. */
            seat_position: CarServer.AutoSeatClimateAction.AutoSeatPosition_E;

            /**
             * Encodes the specified CarSeat message. Does not implicitly {@link CarServer.AutoSeatClimateAction.CarSeat.verify|verify} messages.
             * @param m CarSeat message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.AutoSeatClimateAction.CarSeat.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSeat message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.AutoSeatClimateAction.CarSeat & CarServer.AutoSeatClimateAction.CarSeat.$Shape} CarSeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.AutoSeatClimateAction.CarSeat & CarServer.AutoSeatClimateAction.CarSeat.$Shape;

            /**
             * Gets the type url for CarSeat
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CarSeat {

            /** Properties of a CarSeat. */
            interface $Properties {

                /** CarSeat on */
                on?: (boolean|null);

                /** CarSeat seat_position */
                seat_position?: (CarServer.AutoSeatClimateAction.AutoSeatPosition_E|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CarSeat. */
            type $Shape = CarServer.AutoSeatClimateAction.CarSeat.$Properties;
        }
    }

    /**
     * Properties of a Ping.
     * @deprecated Use CarServer.Ping.$Properties instead.
     */
    interface IPing extends CarServer.Ping.$Properties {
    }

    /** Represents a Ping. */
    class Ping {

        /**
         * Constructs a new Ping.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.Ping.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Ping ping_id. */
        ping_id: number;

        /** Ping local_timestamp. */
        local_timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** Ping last_remote_timestamp. */
        last_remote_timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /**
         * Encodes the specified Ping message. Does not implicitly {@link CarServer.Ping.verify|verify} messages.
         * @param m Ping message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.Ping.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.Ping & CarServer.Ping.$Shape} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.Ping & CarServer.Ping.$Shape;

        /**
         * Gets the type url for Ping
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Ping {

        /** Properties of a Ping. */
        interface $Properties {

            /** Ping ping_id */
            ping_id?: (number|null);

            /** Ping local_timestamp */
            local_timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** Ping last_remote_timestamp */
            last_remote_timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Ping. */
        type $Shape = CarServer.Ping.$Properties;
    }

    /**
     * Properties of a ScheduledChargingAction.
     * @deprecated Use CarServer.ScheduledChargingAction.$Properties instead.
     */
    interface IScheduledChargingAction extends CarServer.ScheduledChargingAction.$Properties {
    }

    /** Represents a ScheduledChargingAction. */
    class ScheduledChargingAction {

        /**
         * Constructs a new ScheduledChargingAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ScheduledChargingAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ScheduledChargingAction enabled. */
        enabled: boolean;

        /** ScheduledChargingAction charging_time. */
        charging_time: number;

        /**
         * Encodes the specified ScheduledChargingAction message. Does not implicitly {@link CarServer.ScheduledChargingAction.verify|verify} messages.
         * @param m ScheduledChargingAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ScheduledChargingAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScheduledChargingAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ScheduledChargingAction & CarServer.ScheduledChargingAction.$Shape} ScheduledChargingAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ScheduledChargingAction & CarServer.ScheduledChargingAction.$Shape;

        /**
         * Gets the type url for ScheduledChargingAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ScheduledChargingAction {

        /** Properties of a ScheduledChargingAction. */
        interface $Properties {

            /** ScheduledChargingAction enabled */
            enabled?: (boolean|null);

            /** ScheduledChargingAction charging_time */
            charging_time?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ScheduledChargingAction. */
        type $Shape = CarServer.ScheduledChargingAction.$Properties;
    }

    /**
     * Properties of a ScheduledDepartureAction.
     * @deprecated Use CarServer.ScheduledDepartureAction.$Properties instead.
     */
    interface IScheduledDepartureAction extends CarServer.ScheduledDepartureAction.$Properties {
    }

    /** Represents a ScheduledDepartureAction. */
    class ScheduledDepartureAction {

        /**
         * Constructs a new ScheduledDepartureAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ScheduledDepartureAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ScheduledDepartureAction enabled. */
        enabled: boolean;

        /** ScheduledDepartureAction departure_time. */
        departure_time: number;

        /** ScheduledDepartureAction preconditioning_times. */
        preconditioning_times?: (CarServer.PreconditioningTimes.$Properties|null);

        /** ScheduledDepartureAction off_peak_charging_times. */
        off_peak_charging_times?: (CarServer.OffPeakChargingTimes.$Properties|null);

        /** ScheduledDepartureAction off_peak_hours_end_time. */
        off_peak_hours_end_time: number;

        /**
         * Encodes the specified ScheduledDepartureAction message. Does not implicitly {@link CarServer.ScheduledDepartureAction.verify|verify} messages.
         * @param m ScheduledDepartureAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ScheduledDepartureAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScheduledDepartureAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ScheduledDepartureAction & CarServer.ScheduledDepartureAction.$Shape} ScheduledDepartureAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ScheduledDepartureAction & CarServer.ScheduledDepartureAction.$Shape;

        /**
         * Gets the type url for ScheduledDepartureAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ScheduledDepartureAction {

        /** Properties of a ScheduledDepartureAction. */
        interface $Properties {

            /** ScheduledDepartureAction enabled */
            enabled?: (boolean|null);

            /** ScheduledDepartureAction departure_time */
            departure_time?: (number|null);

            /** ScheduledDepartureAction preconditioning_times */
            preconditioning_times?: (CarServer.PreconditioningTimes.$Properties|null);

            /** ScheduledDepartureAction off_peak_charging_times */
            off_peak_charging_times?: (CarServer.OffPeakChargingTimes.$Properties|null);

            /** ScheduledDepartureAction off_peak_hours_end_time */
            off_peak_hours_end_time?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ScheduledDepartureAction. */
        type $Shape = {
          enabled?: boolean|null;
          departure_time?: number|null;
          preconditioning_times?: CarServer.PreconditioningTimes.$Shape|null;
          off_peak_charging_times?: CarServer.OffPeakChargingTimes.$Shape|null;
          off_peak_hours_end_time?: number|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a HvacClimateKeeperAction.
     * @deprecated Use CarServer.HvacClimateKeeperAction.$Properties instead.
     */
    interface IHvacClimateKeeperAction extends CarServer.HvacClimateKeeperAction.$Properties {
    }

    /** Represents a HvacClimateKeeperAction. */
    class HvacClimateKeeperAction {

        /**
         * Constructs a new HvacClimateKeeperAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.HvacClimateKeeperAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HvacClimateKeeperAction ClimateKeeperAction. */
        ClimateKeeperAction: CarServer.HvacClimateKeeperAction.ClimateKeeperAction_E;

        /** HvacClimateKeeperAction manual_override. */
        manual_override: boolean;

        /**
         * Encodes the specified HvacClimateKeeperAction message. Does not implicitly {@link CarServer.HvacClimateKeeperAction.verify|verify} messages.
         * @param m HvacClimateKeeperAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.HvacClimateKeeperAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HvacClimateKeeperAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.HvacClimateKeeperAction & CarServer.HvacClimateKeeperAction.$Shape} HvacClimateKeeperAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.HvacClimateKeeperAction & CarServer.HvacClimateKeeperAction.$Shape;

        /**
         * Gets the type url for HvacClimateKeeperAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HvacClimateKeeperAction {

        /** Properties of a HvacClimateKeeperAction. */
        interface $Properties {

            /** HvacClimateKeeperAction ClimateKeeperAction */
            ClimateKeeperAction?: (CarServer.HvacClimateKeeperAction.ClimateKeeperAction_E|null);

            /** HvacClimateKeeperAction manual_override */
            manual_override?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HvacClimateKeeperAction. */
        type $Shape = CarServer.HvacClimateKeeperAction.$Properties;

        /** ClimateKeeperAction_E enum. */
        enum ClimateKeeperAction_E {

            /** ClimateKeeperAction_Off value */
            ClimateKeeperAction_Off = 0,

            /** ClimateKeeperAction_On value */
            ClimateKeeperAction_On = 1,

            /** ClimateKeeperAction_Dog value */
            ClimateKeeperAction_Dog = 2,

            /** ClimateKeeperAction_Camp value */
            ClimateKeeperAction_Camp = 3
        }
    }

    /**
     * Properties of a SetChargingAmpsAction.
     * @deprecated Use CarServer.SetChargingAmpsAction.$Properties instead.
     */
    interface ISetChargingAmpsAction extends CarServer.SetChargingAmpsAction.$Properties {
    }

    /** Represents a SetChargingAmpsAction. */
    class SetChargingAmpsAction {

        /**
         * Constructs a new SetChargingAmpsAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SetChargingAmpsAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetChargingAmpsAction charging_amps. */
        charging_amps: number;

        /**
         * Encodes the specified SetChargingAmpsAction message. Does not implicitly {@link CarServer.SetChargingAmpsAction.verify|verify} messages.
         * @param m SetChargingAmpsAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SetChargingAmpsAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetChargingAmpsAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SetChargingAmpsAction & CarServer.SetChargingAmpsAction.$Shape} SetChargingAmpsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SetChargingAmpsAction & CarServer.SetChargingAmpsAction.$Shape;

        /**
         * Gets the type url for SetChargingAmpsAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetChargingAmpsAction {

        /** Properties of a SetChargingAmpsAction. */
        interface $Properties {

            /** SetChargingAmpsAction charging_amps */
            charging_amps?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetChargingAmpsAction. */
        type $Shape = CarServer.SetChargingAmpsAction.$Properties;
    }

    /**
     * Properties of a RemoveChargeScheduleAction.
     * @deprecated Use CarServer.RemoveChargeScheduleAction.$Properties instead.
     */
    interface IRemoveChargeScheduleAction extends CarServer.RemoveChargeScheduleAction.$Properties {
    }

    /** Represents a RemoveChargeScheduleAction. */
    class RemoveChargeScheduleAction {

        /**
         * Constructs a new RemoveChargeScheduleAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.RemoveChargeScheduleAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RemoveChargeScheduleAction id. */
        id: number;

        /**
         * Encodes the specified RemoveChargeScheduleAction message. Does not implicitly {@link CarServer.RemoveChargeScheduleAction.verify|verify} messages.
         * @param m RemoveChargeScheduleAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.RemoveChargeScheduleAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveChargeScheduleAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.RemoveChargeScheduleAction & CarServer.RemoveChargeScheduleAction.$Shape} RemoveChargeScheduleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.RemoveChargeScheduleAction & CarServer.RemoveChargeScheduleAction.$Shape;

        /**
         * Gets the type url for RemoveChargeScheduleAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RemoveChargeScheduleAction {

        /** Properties of a RemoveChargeScheduleAction. */
        interface $Properties {

            /** RemoveChargeScheduleAction id */
            id?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RemoveChargeScheduleAction. */
        type $Shape = CarServer.RemoveChargeScheduleAction.$Properties;
    }

    /**
     * Properties of a BatchRemoveChargeSchedulesAction.
     * @deprecated Use CarServer.BatchRemoveChargeSchedulesAction.$Properties instead.
     */
    interface IBatchRemoveChargeSchedulesAction extends CarServer.BatchRemoveChargeSchedulesAction.$Properties {
    }

    /** Represents a BatchRemoveChargeSchedulesAction. */
    class BatchRemoveChargeSchedulesAction {

        /**
         * Constructs a new BatchRemoveChargeSchedulesAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.BatchRemoveChargeSchedulesAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BatchRemoveChargeSchedulesAction home. */
        home: boolean;

        /** BatchRemoveChargeSchedulesAction work. */
        work: boolean;

        /** BatchRemoveChargeSchedulesAction other. */
        other: boolean;

        /**
         * Encodes the specified BatchRemoveChargeSchedulesAction message. Does not implicitly {@link CarServer.BatchRemoveChargeSchedulesAction.verify|verify} messages.
         * @param m BatchRemoveChargeSchedulesAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.BatchRemoveChargeSchedulesAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchRemoveChargeSchedulesAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.BatchRemoveChargeSchedulesAction & CarServer.BatchRemoveChargeSchedulesAction.$Shape} BatchRemoveChargeSchedulesAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.BatchRemoveChargeSchedulesAction & CarServer.BatchRemoveChargeSchedulesAction.$Shape;

        /**
         * Gets the type url for BatchRemoveChargeSchedulesAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BatchRemoveChargeSchedulesAction {

        /** Properties of a BatchRemoveChargeSchedulesAction. */
        interface $Properties {

            /** BatchRemoveChargeSchedulesAction home */
            home?: (boolean|null);

            /** BatchRemoveChargeSchedulesAction work */
            work?: (boolean|null);

            /** BatchRemoveChargeSchedulesAction other */
            other?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BatchRemoveChargeSchedulesAction. */
        type $Shape = CarServer.BatchRemoveChargeSchedulesAction.$Properties;
    }

    /**
     * Properties of a BatchRemovePreconditionSchedulesAction.
     * @deprecated Use CarServer.BatchRemovePreconditionSchedulesAction.$Properties instead.
     */
    interface IBatchRemovePreconditionSchedulesAction extends CarServer.BatchRemovePreconditionSchedulesAction.$Properties {
    }

    /** Represents a BatchRemovePreconditionSchedulesAction. */
    class BatchRemovePreconditionSchedulesAction {

        /**
         * Constructs a new BatchRemovePreconditionSchedulesAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.BatchRemovePreconditionSchedulesAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BatchRemovePreconditionSchedulesAction home. */
        home: boolean;

        /** BatchRemovePreconditionSchedulesAction work. */
        work: boolean;

        /** BatchRemovePreconditionSchedulesAction other. */
        other: boolean;

        /**
         * Encodes the specified BatchRemovePreconditionSchedulesAction message. Does not implicitly {@link CarServer.BatchRemovePreconditionSchedulesAction.verify|verify} messages.
         * @param m BatchRemovePreconditionSchedulesAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.BatchRemovePreconditionSchedulesAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchRemovePreconditionSchedulesAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.BatchRemovePreconditionSchedulesAction & CarServer.BatchRemovePreconditionSchedulesAction.$Shape} BatchRemovePreconditionSchedulesAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.BatchRemovePreconditionSchedulesAction & CarServer.BatchRemovePreconditionSchedulesAction.$Shape;

        /**
         * Gets the type url for BatchRemovePreconditionSchedulesAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BatchRemovePreconditionSchedulesAction {

        /** Properties of a BatchRemovePreconditionSchedulesAction. */
        interface $Properties {

            /** BatchRemovePreconditionSchedulesAction home */
            home?: (boolean|null);

            /** BatchRemovePreconditionSchedulesAction work */
            work?: (boolean|null);

            /** BatchRemovePreconditionSchedulesAction other */
            other?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BatchRemovePreconditionSchedulesAction. */
        type $Shape = CarServer.BatchRemovePreconditionSchedulesAction.$Properties;
    }

    /**
     * Properties of a RemovePreconditionScheduleAction.
     * @deprecated Use CarServer.RemovePreconditionScheduleAction.$Properties instead.
     */
    interface IRemovePreconditionScheduleAction extends CarServer.RemovePreconditionScheduleAction.$Properties {
    }

    /** Represents a RemovePreconditionScheduleAction. */
    class RemovePreconditionScheduleAction {

        /**
         * Constructs a new RemovePreconditionScheduleAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.RemovePreconditionScheduleAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RemovePreconditionScheduleAction id. */
        id: number;

        /**
         * Encodes the specified RemovePreconditionScheduleAction message. Does not implicitly {@link CarServer.RemovePreconditionScheduleAction.verify|verify} messages.
         * @param m RemovePreconditionScheduleAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.RemovePreconditionScheduleAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemovePreconditionScheduleAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.RemovePreconditionScheduleAction & CarServer.RemovePreconditionScheduleAction.$Shape} RemovePreconditionScheduleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.RemovePreconditionScheduleAction & CarServer.RemovePreconditionScheduleAction.$Shape;

        /**
         * Gets the type url for RemovePreconditionScheduleAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RemovePreconditionScheduleAction {

        /** Properties of a RemovePreconditionScheduleAction. */
        interface $Properties {

            /** RemovePreconditionScheduleAction id */
            id?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RemovePreconditionScheduleAction. */
        type $Shape = CarServer.RemovePreconditionScheduleAction.$Properties;
    }

    /**
     * Properties of a SetCabinOverheatProtectionAction.
     * @deprecated Use CarServer.SetCabinOverheatProtectionAction.$Properties instead.
     */
    interface ISetCabinOverheatProtectionAction extends CarServer.SetCabinOverheatProtectionAction.$Properties {
    }

    /** Represents a SetCabinOverheatProtectionAction. */
    class SetCabinOverheatProtectionAction {

        /**
         * Constructs a new SetCabinOverheatProtectionAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SetCabinOverheatProtectionAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetCabinOverheatProtectionAction on. */
        on: boolean;

        /** SetCabinOverheatProtectionAction fan_only. */
        fan_only: boolean;

        /**
         * Encodes the specified SetCabinOverheatProtectionAction message. Does not implicitly {@link CarServer.SetCabinOverheatProtectionAction.verify|verify} messages.
         * @param m SetCabinOverheatProtectionAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SetCabinOverheatProtectionAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetCabinOverheatProtectionAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SetCabinOverheatProtectionAction & CarServer.SetCabinOverheatProtectionAction.$Shape} SetCabinOverheatProtectionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SetCabinOverheatProtectionAction & CarServer.SetCabinOverheatProtectionAction.$Shape;

        /**
         * Gets the type url for SetCabinOverheatProtectionAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetCabinOverheatProtectionAction {

        /** Properties of a SetCabinOverheatProtectionAction. */
        interface $Properties {

            /** SetCabinOverheatProtectionAction on */
            on?: (boolean|null);

            /** SetCabinOverheatProtectionAction fan_only */
            fan_only?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetCabinOverheatProtectionAction. */
        type $Shape = CarServer.SetCabinOverheatProtectionAction.$Properties;
    }

    /**
     * Properties of a SetVehicleNameAction.
     * @deprecated Use CarServer.SetVehicleNameAction.$Properties instead.
     */
    interface ISetVehicleNameAction extends CarServer.SetVehicleNameAction.$Properties {
    }

    /** Represents a SetVehicleNameAction. */
    class SetVehicleNameAction {

        /**
         * Constructs a new SetVehicleNameAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SetVehicleNameAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetVehicleNameAction vehicleName. */
        vehicleName: string;

        /**
         * Encodes the specified SetVehicleNameAction message. Does not implicitly {@link CarServer.SetVehicleNameAction.verify|verify} messages.
         * @param m SetVehicleNameAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SetVehicleNameAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetVehicleNameAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SetVehicleNameAction & CarServer.SetVehicleNameAction.$Shape} SetVehicleNameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SetVehicleNameAction & CarServer.SetVehicleNameAction.$Shape;

        /**
         * Gets the type url for SetVehicleNameAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetVehicleNameAction {

        /** Properties of a SetVehicleNameAction. */
        interface $Properties {

            /** SetVehicleNameAction vehicleName */
            vehicleName?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetVehicleNameAction. */
        type $Shape = CarServer.SetVehicleNameAction.$Properties;
    }

    /**
     * Properties of a ChargePortDoorClose.
     * @deprecated Use CarServer.ChargePortDoorClose.$Properties instead.
     */
    interface IChargePortDoorClose extends CarServer.ChargePortDoorClose.$Properties {
    }

    /** Represents a ChargePortDoorClose. */
    class ChargePortDoorClose {

        /**
         * Constructs a new ChargePortDoorClose.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargePortDoorClose.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargePortDoorClose message. Does not implicitly {@link CarServer.ChargePortDoorClose.verify|verify} messages.
         * @param m ChargePortDoorClose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargePortDoorClose.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargePortDoorClose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargePortDoorClose & CarServer.ChargePortDoorClose.$Shape} ChargePortDoorClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargePortDoorClose & CarServer.ChargePortDoorClose.$Shape;

        /**
         * Gets the type url for ChargePortDoorClose
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargePortDoorClose {

        /** Properties of a ChargePortDoorClose. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargePortDoorClose. */
        type $Shape = CarServer.ChargePortDoorClose.$Properties;
    }

    /**
     * Properties of a ChargePortDoorOpen.
     * @deprecated Use CarServer.ChargePortDoorOpen.$Properties instead.
     */
    interface IChargePortDoorOpen extends CarServer.ChargePortDoorOpen.$Properties {
    }

    /** Represents a ChargePortDoorOpen. */
    class ChargePortDoorOpen {

        /**
         * Constructs a new ChargePortDoorOpen.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargePortDoorOpen.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargePortDoorOpen message. Does not implicitly {@link CarServer.ChargePortDoorOpen.verify|verify} messages.
         * @param m ChargePortDoorOpen message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargePortDoorOpen.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargePortDoorOpen message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargePortDoorOpen & CarServer.ChargePortDoorOpen.$Shape} ChargePortDoorOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargePortDoorOpen & CarServer.ChargePortDoorOpen.$Shape;

        /**
         * Gets the type url for ChargePortDoorOpen
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargePortDoorOpen {

        /** Properties of a ChargePortDoorOpen. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargePortDoorOpen. */
        type $Shape = CarServer.ChargePortDoorOpen.$Properties;
    }

    /**
     * Properties of a SetCopTempAction.
     * @deprecated Use CarServer.SetCopTempAction.$Properties instead.
     */
    interface ISetCopTempAction extends CarServer.SetCopTempAction.$Properties {
    }

    /** Represents a SetCopTempAction. */
    class SetCopTempAction {

        /**
         * Constructs a new SetCopTempAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SetCopTempAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetCopTempAction copActivationTemp. */
        copActivationTemp: CarServer.ClimateState.CopActivationTemp;

        /**
         * Encodes the specified SetCopTempAction message. Does not implicitly {@link CarServer.SetCopTempAction.verify|verify} messages.
         * @param m SetCopTempAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SetCopTempAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetCopTempAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SetCopTempAction & CarServer.SetCopTempAction.$Shape} SetCopTempAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SetCopTempAction & CarServer.SetCopTempAction.$Shape;

        /**
         * Gets the type url for SetCopTempAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetCopTempAction {

        /** Properties of a SetCopTempAction. */
        interface $Properties {

            /** SetCopTempAction copActivationTemp */
            copActivationTemp?: (CarServer.ClimateState.CopActivationTemp|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetCopTempAction. */
        type $Shape = CarServer.SetCopTempAction.$Properties;
    }

    /**
     * Properties of a VehicleControlSetPinToDriveAction.
     * @deprecated Use CarServer.VehicleControlSetPinToDriveAction.$Properties instead.
     */
    interface IVehicleControlSetPinToDriveAction extends CarServer.VehicleControlSetPinToDriveAction.$Properties {
    }

    /** Represents a VehicleControlSetPinToDriveAction. */
    class VehicleControlSetPinToDriveAction {

        /**
         * Constructs a new VehicleControlSetPinToDriveAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlSetPinToDriveAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleControlSetPinToDriveAction on. */
        on: boolean;

        /** VehicleControlSetPinToDriveAction password. */
        password: string;

        /**
         * Encodes the specified VehicleControlSetPinToDriveAction message. Does not implicitly {@link CarServer.VehicleControlSetPinToDriveAction.verify|verify} messages.
         * @param m VehicleControlSetPinToDriveAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlSetPinToDriveAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlSetPinToDriveAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlSetPinToDriveAction & CarServer.VehicleControlSetPinToDriveAction.$Shape} VehicleControlSetPinToDriveAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlSetPinToDriveAction & CarServer.VehicleControlSetPinToDriveAction.$Shape;

        /**
         * Gets the type url for VehicleControlSetPinToDriveAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlSetPinToDriveAction {

        /** Properties of a VehicleControlSetPinToDriveAction. */
        interface $Properties {

            /** VehicleControlSetPinToDriveAction on */
            on?: (boolean|null);

            /** VehicleControlSetPinToDriveAction password */
            password?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlSetPinToDriveAction. */
        type $Shape = CarServer.VehicleControlSetPinToDriveAction.$Properties;
    }

    /**
     * Properties of a VehicleControlResetPinToDriveAction.
     * @deprecated Use CarServer.VehicleControlResetPinToDriveAction.$Properties instead.
     */
    interface IVehicleControlResetPinToDriveAction extends CarServer.VehicleControlResetPinToDriveAction.$Properties {
    }

    /** Represents a VehicleControlResetPinToDriveAction. */
    class VehicleControlResetPinToDriveAction {

        /**
         * Constructs a new VehicleControlResetPinToDriveAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlResetPinToDriveAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified VehicleControlResetPinToDriveAction message. Does not implicitly {@link CarServer.VehicleControlResetPinToDriveAction.verify|verify} messages.
         * @param m VehicleControlResetPinToDriveAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlResetPinToDriveAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlResetPinToDriveAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlResetPinToDriveAction & CarServer.VehicleControlResetPinToDriveAction.$Shape} VehicleControlResetPinToDriveAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlResetPinToDriveAction & CarServer.VehicleControlResetPinToDriveAction.$Shape;

        /**
         * Gets the type url for VehicleControlResetPinToDriveAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlResetPinToDriveAction {

        /** Properties of a VehicleControlResetPinToDriveAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlResetPinToDriveAction. */
        type $Shape = CarServer.VehicleControlResetPinToDriveAction.$Properties;
    }

    /**
     * Properties of a ParentalControlsClearPinAction.
     * @deprecated Use CarServer.ParentalControlsClearPinAction.$Properties instead.
     */
    interface IParentalControlsClearPinAction extends CarServer.ParentalControlsClearPinAction.$Properties {
    }

    /** Represents a ParentalControlsClearPinAction. */
    class ParentalControlsClearPinAction {

        /**
         * Constructs a new ParentalControlsClearPinAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsClearPinAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ParentalControlsClearPinAction pin. */
        pin: string;

        /**
         * Encodes the specified ParentalControlsClearPinAction message. Does not implicitly {@link CarServer.ParentalControlsClearPinAction.verify|verify} messages.
         * @param m ParentalControlsClearPinAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsClearPinAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsClearPinAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsClearPinAction & CarServer.ParentalControlsClearPinAction.$Shape} ParentalControlsClearPinAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsClearPinAction & CarServer.ParentalControlsClearPinAction.$Shape;

        /**
         * Gets the type url for ParentalControlsClearPinAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsClearPinAction {

        /** Properties of a ParentalControlsClearPinAction. */
        interface $Properties {

            /** ParentalControlsClearPinAction pin */
            pin?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ParentalControlsClearPinAction. */
        type $Shape = CarServer.ParentalControlsClearPinAction.$Properties;
    }

    /**
     * Properties of a ParentalControlsClearPinAdminAction.
     * @deprecated Use CarServer.ParentalControlsClearPinAdminAction.$Properties instead.
     */
    interface IParentalControlsClearPinAdminAction extends CarServer.ParentalControlsClearPinAdminAction.$Properties {
    }

    /** Represents a ParentalControlsClearPinAdminAction. */
    class ParentalControlsClearPinAdminAction {

        /**
         * Constructs a new ParentalControlsClearPinAdminAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsClearPinAdminAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ParentalControlsClearPinAdminAction message. Does not implicitly {@link CarServer.ParentalControlsClearPinAdminAction.verify|verify} messages.
         * @param m ParentalControlsClearPinAdminAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsClearPinAdminAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsClearPinAdminAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsClearPinAdminAction & CarServer.ParentalControlsClearPinAdminAction.$Shape} ParentalControlsClearPinAdminAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsClearPinAdminAction & CarServer.ParentalControlsClearPinAdminAction.$Shape;

        /**
         * Gets the type url for ParentalControlsClearPinAdminAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsClearPinAdminAction {

        /** Properties of a ParentalControlsClearPinAdminAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ParentalControlsClearPinAdminAction. */
        type $Shape = CarServer.ParentalControlsClearPinAdminAction.$Properties;
    }

    /**
     * Properties of a ParentalControlsAction.
     * @deprecated Use CarServer.ParentalControlsAction.$Properties instead.
     */
    interface IParentalControlsAction extends CarServer.ParentalControlsAction.$Properties {
    }

    /** Represents a ParentalControlsAction. */
    class ParentalControlsAction {

        /**
         * Constructs a new ParentalControlsAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ParentalControlsAction activate. */
        activate: boolean;

        /** ParentalControlsAction pin. */
        pin: string;

        /**
         * Encodes the specified ParentalControlsAction message. Does not implicitly {@link CarServer.ParentalControlsAction.verify|verify} messages.
         * @param m ParentalControlsAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsAction & CarServer.ParentalControlsAction.$Shape} ParentalControlsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsAction & CarServer.ParentalControlsAction.$Shape;

        /**
         * Gets the type url for ParentalControlsAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsAction {

        /** Properties of a ParentalControlsAction. */
        interface $Properties {

            /** ParentalControlsAction activate */
            activate?: (boolean|null);

            /** ParentalControlsAction pin */
            pin?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ParentalControlsAction. */
        type $Shape = CarServer.ParentalControlsAction.$Properties;
    }

    /**
     * Properties of a ParentalControlsEnableSettingsAction.
     * @deprecated Use CarServer.ParentalControlsEnableSettingsAction.$Properties instead.
     */
    interface IParentalControlsEnableSettingsAction extends CarServer.ParentalControlsEnableSettingsAction.$Properties {
    }

    /** Represents a ParentalControlsEnableSettingsAction. */
    class ParentalControlsEnableSettingsAction {

        /**
         * Constructs a new ParentalControlsEnableSettingsAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsEnableSettingsAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ParentalControlsEnableSettingsAction setting. */
        setting: CarServer.ParentalControlsEnableSettingsAction.ParentalControlsSetting_E;

        /** ParentalControlsEnableSettingsAction enable. */
        enable: boolean;

        /**
         * Encodes the specified ParentalControlsEnableSettingsAction message. Does not implicitly {@link CarServer.ParentalControlsEnableSettingsAction.verify|verify} messages.
         * @param m ParentalControlsEnableSettingsAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsEnableSettingsAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsEnableSettingsAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsEnableSettingsAction & CarServer.ParentalControlsEnableSettingsAction.$Shape} ParentalControlsEnableSettingsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsEnableSettingsAction & CarServer.ParentalControlsEnableSettingsAction.$Shape;

        /**
         * Gets the type url for ParentalControlsEnableSettingsAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsEnableSettingsAction {

        /** Properties of a ParentalControlsEnableSettingsAction. */
        interface $Properties {

            /** ParentalControlsEnableSettingsAction setting */
            setting?: (CarServer.ParentalControlsEnableSettingsAction.ParentalControlsSetting_E|null);

            /** ParentalControlsEnableSettingsAction enable */
            enable?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ParentalControlsEnableSettingsAction. */
        type $Shape = CarServer.ParentalControlsEnableSettingsAction.$Properties;

        /** ParentalControlsSetting_E enum. */
        enum ParentalControlsSetting_E {

            /** SpeedLimit value */
            SpeedLimit = 0,

            /** Acceleration value */
            Acceleration = 1,

            /** SafetyFeatures value */
            SafetyFeatures = 2,

            /** Curfew value */
            Curfew = 3,

            /** BrowserBlocked value */
            BrowserBlocked = 4,

            /** TheaterBlocked value */
            TheaterBlocked = 5,

            /** ArcadeBlocked value */
            ArcadeBlocked = 6
        }
    }

    /**
     * Properties of a ParentalControlsSetSpeedLimitAction.
     * @deprecated Use CarServer.ParentalControlsSetSpeedLimitAction.$Properties instead.
     */
    interface IParentalControlsSetSpeedLimitAction extends CarServer.ParentalControlsSetSpeedLimitAction.$Properties {
    }

    /** Represents a ParentalControlsSetSpeedLimitAction. */
    class ParentalControlsSetSpeedLimitAction {

        /**
         * Constructs a new ParentalControlsSetSpeedLimitAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsSetSpeedLimitAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ParentalControlsSetSpeedLimitAction limit_mph. */
        limit_mph: number;

        /**
         * Encodes the specified ParentalControlsSetSpeedLimitAction message. Does not implicitly {@link CarServer.ParentalControlsSetSpeedLimitAction.verify|verify} messages.
         * @param m ParentalControlsSetSpeedLimitAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsSetSpeedLimitAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsSetSpeedLimitAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsSetSpeedLimitAction & CarServer.ParentalControlsSetSpeedLimitAction.$Shape} ParentalControlsSetSpeedLimitAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsSetSpeedLimitAction & CarServer.ParentalControlsSetSpeedLimitAction.$Shape;

        /**
         * Gets the type url for ParentalControlsSetSpeedLimitAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsSetSpeedLimitAction {

        /** Properties of a ParentalControlsSetSpeedLimitAction. */
        interface $Properties {

            /** ParentalControlsSetSpeedLimitAction limit_mph */
            limit_mph?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ParentalControlsSetSpeedLimitAction. */
        type $Shape = CarServer.ParentalControlsSetSpeedLimitAction.$Properties;
    }

    /**
     * Properties of a VehicleControlResetPinToDriveAdminAction.
     * @deprecated Use CarServer.VehicleControlResetPinToDriveAdminAction.$Properties instead.
     */
    interface IVehicleControlResetPinToDriveAdminAction extends CarServer.VehicleControlResetPinToDriveAdminAction.$Properties {
    }

    /** Represents a VehicleControlResetPinToDriveAdminAction. */
    class VehicleControlResetPinToDriveAdminAction {

        /**
         * Constructs a new VehicleControlResetPinToDriveAdminAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleControlResetPinToDriveAdminAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified VehicleControlResetPinToDriveAdminAction message. Does not implicitly {@link CarServer.VehicleControlResetPinToDriveAdminAction.verify|verify} messages.
         * @param m VehicleControlResetPinToDriveAdminAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleControlResetPinToDriveAdminAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleControlResetPinToDriveAdminAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleControlResetPinToDriveAdminAction & CarServer.VehicleControlResetPinToDriveAdminAction.$Shape} VehicleControlResetPinToDriveAdminAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleControlResetPinToDriveAdminAction & CarServer.VehicleControlResetPinToDriveAdminAction.$Shape;

        /**
         * Gets the type url for VehicleControlResetPinToDriveAdminAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleControlResetPinToDriveAdminAction {

        /** Properties of a VehicleControlResetPinToDriveAdminAction. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleControlResetPinToDriveAdminAction. */
        type $Shape = CarServer.VehicleControlResetPinToDriveAdminAction.$Properties;
    }

    /**
     * Properties of a SetLowPowerModeAction.
     * @deprecated Use CarServer.SetLowPowerModeAction.$Properties instead.
     */
    interface ISetLowPowerModeAction extends CarServer.SetLowPowerModeAction.$Properties {
    }

    /** Represents a SetLowPowerModeAction. */
    class SetLowPowerModeAction {

        /**
         * Constructs a new SetLowPowerModeAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SetLowPowerModeAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetLowPowerModeAction low_power_mode. */
        low_power_mode: boolean;

        /**
         * Encodes the specified SetLowPowerModeAction message. Does not implicitly {@link CarServer.SetLowPowerModeAction.verify|verify} messages.
         * @param m SetLowPowerModeAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SetLowPowerModeAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetLowPowerModeAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SetLowPowerModeAction & CarServer.SetLowPowerModeAction.$Shape} SetLowPowerModeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SetLowPowerModeAction & CarServer.SetLowPowerModeAction.$Shape;

        /**
         * Gets the type url for SetLowPowerModeAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetLowPowerModeAction {

        /** Properties of a SetLowPowerModeAction. */
        interface $Properties {

            /** SetLowPowerModeAction low_power_mode */
            low_power_mode?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetLowPowerModeAction. */
        type $Shape = CarServer.SetLowPowerModeAction.$Properties;
    }

    /**
     * Properties of a SetKeepAccessoryPowerModeAction.
     * @deprecated Use CarServer.SetKeepAccessoryPowerModeAction.$Properties instead.
     */
    interface ISetKeepAccessoryPowerModeAction extends CarServer.SetKeepAccessoryPowerModeAction.$Properties {
    }

    /** Represents a SetKeepAccessoryPowerModeAction. */
    class SetKeepAccessoryPowerModeAction {

        /**
         * Constructs a new SetKeepAccessoryPowerModeAction.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SetKeepAccessoryPowerModeAction.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetKeepAccessoryPowerModeAction keep_accessory_power_mode. */
        keep_accessory_power_mode: boolean;

        /**
         * Encodes the specified SetKeepAccessoryPowerModeAction message. Does not implicitly {@link CarServer.SetKeepAccessoryPowerModeAction.verify|verify} messages.
         * @param m SetKeepAccessoryPowerModeAction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SetKeepAccessoryPowerModeAction.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetKeepAccessoryPowerModeAction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SetKeepAccessoryPowerModeAction & CarServer.SetKeepAccessoryPowerModeAction.$Shape} SetKeepAccessoryPowerModeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SetKeepAccessoryPowerModeAction & CarServer.SetKeepAccessoryPowerModeAction.$Shape;

        /**
         * Gets the type url for SetKeepAccessoryPowerModeAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetKeepAccessoryPowerModeAction {

        /** Properties of a SetKeepAccessoryPowerModeAction. */
        interface $Properties {

            /** SetKeepAccessoryPowerModeAction keep_accessory_power_mode */
            keep_accessory_power_mode?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetKeepAccessoryPowerModeAction. */
        type $Shape = CarServer.SetKeepAccessoryPowerModeAction.$Properties;
    }

    /**
     * Properties of a VehicleData.
     * @deprecated Use CarServer.VehicleData.$Properties instead.
     */
    interface IVehicleData extends CarServer.VehicleData.$Properties {
    }

    /** Represents a VehicleData. */
    class VehicleData {

        /**
         * Constructs a new VehicleData.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleData.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleData charge_state. */
        charge_state?: (CarServer.ChargeState.$Properties|null);

        /** VehicleData climate_state. */
        climate_state?: (CarServer.ClimateState.$Properties|null);

        /** VehicleData drive_state. */
        drive_state?: (CarServer.DriveState.$Properties|null);

        /** VehicleData location_state. */
        location_state?: (CarServer.LocationState.$Properties|null);

        /** VehicleData closures_state. */
        closures_state?: (CarServer.ClosuresState.$Properties|null);

        /** VehicleData charge_schedule_state. */
        charge_schedule_state?: (CarServer.ChargeScheduleState.$Properties|null);

        /** VehicleData preconditioning_schedule_state. */
        preconditioning_schedule_state?: (CarServer.PreconditioningScheduleState.$Properties|null);

        /** VehicleData tire_pressure_state. */
        tire_pressure_state?: (CarServer.TirePressureState.$Properties|null);

        /** VehicleData media_state. */
        media_state?: (CarServer.MediaState.$Properties|null);

        /** VehicleData media_detail_state. */
        media_detail_state?: (CarServer.MediaDetailState.$Properties|null);

        /** VehicleData software_update_state. */
        software_update_state?: (CarServer.SoftwareUpdateState.$Properties|null);

        /** VehicleData parental_controls_state. */
        parental_controls_state?: (CarServer.ParentalControlsState.$Properties|null);

        /**
         * Encodes the specified VehicleData message. Does not implicitly {@link CarServer.VehicleData.verify|verify} messages.
         * @param m VehicleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleData.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleData & CarServer.VehicleData.$Shape} VehicleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleData & CarServer.VehicleData.$Shape;

        /**
         * Gets the type url for VehicleData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleData {

        /** Properties of a VehicleData. */
        interface $Properties {

            /** VehicleData charge_state */
            charge_state?: (CarServer.ChargeState.$Properties|null);

            /** VehicleData climate_state */
            climate_state?: (CarServer.ClimateState.$Properties|null);

            /** VehicleData drive_state */
            drive_state?: (CarServer.DriveState.$Properties|null);

            /** VehicleData location_state */
            location_state?: (CarServer.LocationState.$Properties|null);

            /** VehicleData closures_state */
            closures_state?: (CarServer.ClosuresState.$Properties|null);

            /** VehicleData charge_schedule_state */
            charge_schedule_state?: (CarServer.ChargeScheduleState.$Properties|null);

            /** VehicleData preconditioning_schedule_state */
            preconditioning_schedule_state?: (CarServer.PreconditioningScheduleState.$Properties|null);

            /** VehicleData tire_pressure_state */
            tire_pressure_state?: (CarServer.TirePressureState.$Properties|null);

            /** VehicleData media_state */
            media_state?: (CarServer.MediaState.$Properties|null);

            /** VehicleData media_detail_state */
            media_detail_state?: (CarServer.MediaDetailState.$Properties|null);

            /** VehicleData software_update_state */
            software_update_state?: (CarServer.SoftwareUpdateState.$Properties|null);

            /** VehicleData parental_controls_state */
            parental_controls_state?: (CarServer.ParentalControlsState.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleData. */
        type $Shape = {
          charge_state?: CarServer.ChargeState.$Shape|null;
          climate_state?: CarServer.ClimateState.$Shape|null;
          drive_state?: CarServer.DriveState.$Shape|null;
          location_state?: CarServer.LocationState.$Shape|null;
          closures_state?: CarServer.ClosuresState.$Shape|null;
          charge_schedule_state?: CarServer.ChargeScheduleState.$Shape|null;
          preconditioning_schedule_state?: CarServer.PreconditioningScheduleState.$Shape|null;
          tire_pressure_state?: CarServer.TirePressureState.$Shape|null;
          media_state?: CarServer.MediaState.$Shape|null;
          media_detail_state?: CarServer.MediaDetailState.$Shape|null;
          software_update_state?: CarServer.SoftwareUpdateState.$Shape|null;
          parental_controls_state?: CarServer.ParentalControlsState.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a ClosuresState.
     * @deprecated Use CarServer.ClosuresState.$Properties instead.
     */
    interface IClosuresState extends CarServer.ClosuresState.$Properties {
    }

    /** Represents a ClosuresState. */
    class ClosuresState {

        /**
         * Constructs a new ClosuresState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ClosuresState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClosuresState door_open_driver_front. */
        door_open_driver_front?: (boolean|null);

        /** ClosuresState door_open_driver_rear. */
        door_open_driver_rear?: (boolean|null);

        /** ClosuresState door_open_passenger_front. */
        door_open_passenger_front?: (boolean|null);

        /** ClosuresState door_open_passenger_rear. */
        door_open_passenger_rear?: (boolean|null);

        /** ClosuresState door_open_trunk_front. */
        door_open_trunk_front?: (boolean|null);

        /** ClosuresState door_open_trunk_rear. */
        door_open_trunk_rear?: (boolean|null);

        /** ClosuresState window_open_driver_front. */
        window_open_driver_front?: (boolean|null);

        /** ClosuresState window_open_passenger_front. */
        window_open_passenger_front?: (boolean|null);

        /** ClosuresState window_open_driver_rear. */
        window_open_driver_rear?: (boolean|null);

        /** ClosuresState window_open_passenger_rear. */
        window_open_passenger_rear?: (boolean|null);

        /** ClosuresState sun_roof_state. */
        sun_roof_state?: (CarServer.ClosuresState.SunRoofState.$Properties|null);

        /** ClosuresState sun_roof_percent_open. */
        sun_roof_percent_open?: (number|null);

        /** ClosuresState locked. */
        locked?: (boolean|null);

        /** ClosuresState is_user_present. */
        is_user_present?: (boolean|null);

        /** ClosuresState center_display_state. */
        center_display_state?: (CarServer.ClosuresState.DisplayState.$Properties|null);

        /** ClosuresState remote_start. */
        remote_start?: (boolean|null);

        /** ClosuresState valet_mode. */
        valet_mode?: (boolean|null);

        /** ClosuresState valet_pin_needed. */
        valet_pin_needed?: (boolean|null);

        /** ClosuresState sentry_mode_state. */
        sentry_mode_state?: (CarServer.ClosuresState.SentryModeState.$Properties|null);

        /** ClosuresState sentry_mode_available. */
        sentry_mode_available?: (boolean|null);

        /** ClosuresState speed_limit_mode. */
        speed_limit_mode?: (CarServer.SpeedLimitMode.$Properties|null);

        /** ClosuresState tonneau_state. */
        tonneau_state?: (VCSEC.ClosureState_E|null);

        /** ClosuresState tonneau_percent_open. */
        tonneau_percent_open?: (number|null);

        /** ClosuresState tonneau_in_motion. */
        tonneau_in_motion?: (boolean|null);

        /** ClosuresState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** ClosuresState optional_door_open_driver_front. */
        optional_door_open_driver_front?: "door_open_driver_front";

        /** ClosuresState optional_door_open_driver_rear. */
        optional_door_open_driver_rear?: "door_open_driver_rear";

        /** ClosuresState optional_door_open_passenger_front. */
        optional_door_open_passenger_front?: "door_open_passenger_front";

        /** ClosuresState optional_door_open_passenger_rear. */
        optional_door_open_passenger_rear?: "door_open_passenger_rear";

        /** ClosuresState optional_door_open_trunk_front. */
        optional_door_open_trunk_front?: "door_open_trunk_front";

        /** ClosuresState optional_door_open_trunk_rear. */
        optional_door_open_trunk_rear?: "door_open_trunk_rear";

        /** ClosuresState optional_window_open_driver_front. */
        optional_window_open_driver_front?: "window_open_driver_front";

        /** ClosuresState optional_window_open_passenger_front. */
        optional_window_open_passenger_front?: "window_open_passenger_front";

        /** ClosuresState optional_window_open_driver_rear. */
        optional_window_open_driver_rear?: "window_open_driver_rear";

        /** ClosuresState optional_window_open_passenger_rear. */
        optional_window_open_passenger_rear?: "window_open_passenger_rear";

        /** ClosuresState optional_sun_roof_percent_open. */
        optional_sun_roof_percent_open?: "sun_roof_percent_open";

        /** ClosuresState optional_locked. */
        optional_locked?: "locked";

        /** ClosuresState optional_is_user_present. */
        optional_is_user_present?: "is_user_present";

        /** ClosuresState optional_remote_start. */
        optional_remote_start?: "remote_start";

        /** ClosuresState optional_valet_mode. */
        optional_valet_mode?: "valet_mode";

        /** ClosuresState optional_valet_pin_needed. */
        optional_valet_pin_needed?: "valet_pin_needed";

        /** ClosuresState optional_sentry_mode_available. */
        optional_sentry_mode_available?: "sentry_mode_available";

        /** ClosuresState optional_tonneau_state. */
        optional_tonneau_state?: "tonneau_state";

        /** ClosuresState optional_tonneau_percent_open. */
        optional_tonneau_percent_open?: "tonneau_percent_open";

        /** ClosuresState optional_tonneau_in_motion. */
        optional_tonneau_in_motion?: "tonneau_in_motion";

        /**
         * Encodes the specified ClosuresState message. Does not implicitly {@link CarServer.ClosuresState.verify|verify} messages.
         * @param m ClosuresState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ClosuresState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosuresState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ClosuresState & CarServer.ClosuresState.$Shape} ClosuresState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClosuresState & CarServer.ClosuresState.$Shape;

        /**
         * Gets the type url for ClosuresState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClosuresState {

        /** Properties of a ClosuresState. */
        interface $Properties {

            /** ClosuresState door_open_driver_front */
            door_open_driver_front?: (boolean|null);

            /** ClosuresState door_open_driver_rear */
            door_open_driver_rear?: (boolean|null);

            /** ClosuresState door_open_passenger_front */
            door_open_passenger_front?: (boolean|null);

            /** ClosuresState door_open_passenger_rear */
            door_open_passenger_rear?: (boolean|null);

            /** ClosuresState door_open_trunk_front */
            door_open_trunk_front?: (boolean|null);

            /** ClosuresState door_open_trunk_rear */
            door_open_trunk_rear?: (boolean|null);

            /** ClosuresState window_open_driver_front */
            window_open_driver_front?: (boolean|null);

            /** ClosuresState window_open_passenger_front */
            window_open_passenger_front?: (boolean|null);

            /** ClosuresState window_open_driver_rear */
            window_open_driver_rear?: (boolean|null);

            /** ClosuresState window_open_passenger_rear */
            window_open_passenger_rear?: (boolean|null);

            /** ClosuresState sun_roof_state */
            sun_roof_state?: (CarServer.ClosuresState.SunRoofState.$Properties|null);

            /** ClosuresState sun_roof_percent_open */
            sun_roof_percent_open?: (number|null);

            /** ClosuresState locked */
            locked?: (boolean|null);

            /** ClosuresState is_user_present */
            is_user_present?: (boolean|null);

            /** ClosuresState center_display_state */
            center_display_state?: (CarServer.ClosuresState.DisplayState.$Properties|null);

            /** ClosuresState remote_start */
            remote_start?: (boolean|null);

            /** ClosuresState valet_mode */
            valet_mode?: (boolean|null);

            /** ClosuresState valet_pin_needed */
            valet_pin_needed?: (boolean|null);

            /** ClosuresState sentry_mode_state */
            sentry_mode_state?: (CarServer.ClosuresState.SentryModeState.$Properties|null);

            /** ClosuresState sentry_mode_available */
            sentry_mode_available?: (boolean|null);

            /** ClosuresState speed_limit_mode */
            speed_limit_mode?: (CarServer.SpeedLimitMode.$Properties|null);

            /** ClosuresState tonneau_state */
            tonneau_state?: (VCSEC.ClosureState_E|null);

            /** ClosuresState tonneau_percent_open */
            tonneau_percent_open?: (number|null);

            /** ClosuresState tonneau_in_motion */
            tonneau_in_motion?: (boolean|null);

            /** ClosuresState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** ClosuresState optional_door_open_driver_front */
            optional_door_open_driver_front?: "door_open_driver_front";

            /** ClosuresState optional_door_open_driver_rear */
            optional_door_open_driver_rear?: "door_open_driver_rear";

            /** ClosuresState optional_door_open_passenger_front */
            optional_door_open_passenger_front?: "door_open_passenger_front";

            /** ClosuresState optional_door_open_passenger_rear */
            optional_door_open_passenger_rear?: "door_open_passenger_rear";

            /** ClosuresState optional_door_open_trunk_front */
            optional_door_open_trunk_front?: "door_open_trunk_front";

            /** ClosuresState optional_door_open_trunk_rear */
            optional_door_open_trunk_rear?: "door_open_trunk_rear";

            /** ClosuresState optional_window_open_driver_front */
            optional_window_open_driver_front?: "window_open_driver_front";

            /** ClosuresState optional_window_open_passenger_front */
            optional_window_open_passenger_front?: "window_open_passenger_front";

            /** ClosuresState optional_window_open_driver_rear */
            optional_window_open_driver_rear?: "window_open_driver_rear";

            /** ClosuresState optional_window_open_passenger_rear */
            optional_window_open_passenger_rear?: "window_open_passenger_rear";

            /** ClosuresState optional_sun_roof_percent_open */
            optional_sun_roof_percent_open?: "sun_roof_percent_open";

            /** ClosuresState optional_locked */
            optional_locked?: "locked";

            /** ClosuresState optional_is_user_present */
            optional_is_user_present?: "is_user_present";

            /** ClosuresState optional_remote_start */
            optional_remote_start?: "remote_start";

            /** ClosuresState optional_valet_mode */
            optional_valet_mode?: "valet_mode";

            /** ClosuresState optional_valet_pin_needed */
            optional_valet_pin_needed?: "valet_pin_needed";

            /** ClosuresState optional_sentry_mode_available */
            optional_sentry_mode_available?: "sentry_mode_available";

            /** ClosuresState optional_tonneau_state */
            optional_tonneau_state?: "tonneau_state";

            /** ClosuresState optional_tonneau_percent_open */
            optional_tonneau_percent_open?: "tonneau_percent_open";

            /** ClosuresState optional_tonneau_in_motion */
            optional_tonneau_in_motion?: "tonneau_in_motion";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ClosuresState. */
        type $Shape = {
          door_open_driver_front?: boolean|null;
          door_open_driver_rear?: boolean|null;
          door_open_passenger_front?: boolean|null;
          door_open_passenger_rear?: boolean|null;
          door_open_trunk_front?: boolean|null;
          door_open_trunk_rear?: boolean|null;
          window_open_driver_front?: boolean|null;
          window_open_passenger_front?: boolean|null;
          window_open_driver_rear?: boolean|null;
          window_open_passenger_rear?: boolean|null;
          sun_roof_state?: CarServer.ClosuresState.SunRoofState.$Shape|null;
          sun_roof_percent_open?: number|null;
          locked?: boolean|null;
          is_user_present?: boolean|null;
          center_display_state?: CarServer.ClosuresState.DisplayState.$Shape|null;
          remote_start?: boolean|null;
          valet_mode?: boolean|null;
          valet_pin_needed?: boolean|null;
          sentry_mode_state?: CarServer.ClosuresState.SentryModeState.$Shape|null;
          sentry_mode_available?: boolean|null;
          speed_limit_mode?: CarServer.SpeedLimitMode.$Shape|null;
          tonneau_state?: VCSEC.ClosureState_E|null;
          tonneau_percent_open?: number|null;
          tonneau_in_motion?: boolean|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_door_open_driver_front?: undefined; door_open_driver_front?: null }|{ optional_door_open_driver_front?: "door_open_driver_front"; door_open_driver_front: boolean })
        ) & (
          ({ optional_door_open_driver_rear?: undefined; door_open_driver_rear?: null }|{ optional_door_open_driver_rear?: "door_open_driver_rear"; door_open_driver_rear: boolean })
        ) & (
          ({ optional_door_open_passenger_front?: undefined; door_open_passenger_front?: null }|{ optional_door_open_passenger_front?: "door_open_passenger_front"; door_open_passenger_front: boolean })
        ) & (
          ({ optional_door_open_passenger_rear?: undefined; door_open_passenger_rear?: null }|{ optional_door_open_passenger_rear?: "door_open_passenger_rear"; door_open_passenger_rear: boolean })
        ) & (
          ({ optional_door_open_trunk_front?: undefined; door_open_trunk_front?: null }|{ optional_door_open_trunk_front?: "door_open_trunk_front"; door_open_trunk_front: boolean })
        ) & (
          ({ optional_door_open_trunk_rear?: undefined; door_open_trunk_rear?: null }|{ optional_door_open_trunk_rear?: "door_open_trunk_rear"; door_open_trunk_rear: boolean })
        ) & (
          ({ optional_window_open_driver_front?: undefined; window_open_driver_front?: null }|{ optional_window_open_driver_front?: "window_open_driver_front"; window_open_driver_front: boolean })
        ) & (
          ({ optional_window_open_passenger_front?: undefined; window_open_passenger_front?: null }|{ optional_window_open_passenger_front?: "window_open_passenger_front"; window_open_passenger_front: boolean })
        ) & (
          ({ optional_window_open_driver_rear?: undefined; window_open_driver_rear?: null }|{ optional_window_open_driver_rear?: "window_open_driver_rear"; window_open_driver_rear: boolean })
        ) & (
          ({ optional_window_open_passenger_rear?: undefined; window_open_passenger_rear?: null }|{ optional_window_open_passenger_rear?: "window_open_passenger_rear"; window_open_passenger_rear: boolean })
        ) & (
          ({ optional_sun_roof_percent_open?: undefined; sun_roof_percent_open?: null }|{ optional_sun_roof_percent_open?: "sun_roof_percent_open"; sun_roof_percent_open: number })
        ) & (
          ({ optional_locked?: undefined; locked?: null }|{ optional_locked?: "locked"; locked: boolean })
        ) & (
          ({ optional_is_user_present?: undefined; is_user_present?: null }|{ optional_is_user_present?: "is_user_present"; is_user_present: boolean })
        ) & (
          ({ optional_remote_start?: undefined; remote_start?: null }|{ optional_remote_start?: "remote_start"; remote_start: boolean })
        ) & (
          ({ optional_valet_mode?: undefined; valet_mode?: null }|{ optional_valet_mode?: "valet_mode"; valet_mode: boolean })
        ) & (
          ({ optional_valet_pin_needed?: undefined; valet_pin_needed?: null }|{ optional_valet_pin_needed?: "valet_pin_needed"; valet_pin_needed: boolean })
        ) & (
          ({ optional_sentry_mode_available?: undefined; sentry_mode_available?: null }|{ optional_sentry_mode_available?: "sentry_mode_available"; sentry_mode_available: boolean })
        ) & (
          ({ optional_tonneau_state?: undefined; tonneau_state?: null }|{ optional_tonneau_state?: "tonneau_state"; tonneau_state: VCSEC.ClosureState_E })
        ) & (
          ({ optional_tonneau_percent_open?: undefined; tonneau_percent_open?: null }|{ optional_tonneau_percent_open?: "tonneau_percent_open"; tonneau_percent_open: number })
        ) & (
          ({ optional_tonneau_in_motion?: undefined; tonneau_in_motion?: null }|{ optional_tonneau_in_motion?: "tonneau_in_motion"; tonneau_in_motion: boolean })
        );

        /**
         * Properties of a SunRoofState.
         * @deprecated Use CarServer.ClosuresState.SunRoofState.$Properties instead.
         */
        interface ISunRoofState extends CarServer.ClosuresState.SunRoofState.$Properties {
        }

        /** Represents a SunRoofState. */
        class SunRoofState {

            /**
             * Constructs a new SunRoofState.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ClosuresState.SunRoofState.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SunRoofState Unknown. */
            Unknown?: (CarServer.Void.$Properties|null);

            /** SunRoofState Calibrating. */
            Calibrating?: (CarServer.Void.$Properties|null);

            /** SunRoofState Closed. */
            Closed?: (CarServer.Void.$Properties|null);

            /** SunRoofState Open. */
            Open?: (CarServer.Void.$Properties|null);

            /** SunRoofState Moving. */
            Moving?: (CarServer.Void.$Properties|null);

            /** SunRoofState Vent. */
            Vent?: (CarServer.Void.$Properties|null);

            /** SunRoofState type. */
            type?: ("Unknown"|"Calibrating"|"Closed"|"Open"|"Moving"|"Vent");

            /**
             * Encodes the specified SunRoofState message. Does not implicitly {@link CarServer.ClosuresState.SunRoofState.verify|verify} messages.
             * @param m SunRoofState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ClosuresState.SunRoofState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SunRoofState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ClosuresState.SunRoofState & CarServer.ClosuresState.SunRoofState.$Shape} SunRoofState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClosuresState.SunRoofState & CarServer.ClosuresState.SunRoofState.$Shape;

            /**
             * Gets the type url for SunRoofState
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SunRoofState {

            /** Properties of a SunRoofState. */
            interface $Properties {

                /** SunRoofState Unknown */
                Unknown?: (CarServer.Void.$Properties|null);

                /** SunRoofState Calibrating */
                Calibrating?: (CarServer.Void.$Properties|null);

                /** SunRoofState Closed */
                Closed?: (CarServer.Void.$Properties|null);

                /** SunRoofState Open */
                Open?: (CarServer.Void.$Properties|null);

                /** SunRoofState Moving */
                Moving?: (CarServer.Void.$Properties|null);

                /** SunRoofState Vent */
                Vent?: (CarServer.Void.$Properties|null);

                /** SunRoofState type */
                type?: ("Unknown"|"Calibrating"|"Closed"|"Open"|"Moving"|"Vent");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a SunRoofState. */
            type $Shape = {
              Unknown?: CarServer.Void.$Shape|null;
              Calibrating?: CarServer.Void.$Shape|null;
              Closed?: CarServer.Void.$Shape|null;
              Open?: CarServer.Void.$Shape|null;
              Moving?: CarServer.Void.$Shape|null;
              Vent?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Unknown?: null; Calibrating?: null; Closed?: null; Open?: null; Moving?: null; Vent?: null }|{ type?: "Unknown"; Unknown: CarServer.Void.$Shape; Calibrating?: null; Closed?: null; Open?: null; Moving?: null; Vent?: null }|{ type?: "Calibrating"; Unknown?: null; Calibrating: CarServer.Void.$Shape; Closed?: null; Open?: null; Moving?: null; Vent?: null }|{ type?: "Closed"; Unknown?: null; Calibrating?: null; Closed: CarServer.Void.$Shape; Open?: null; Moving?: null; Vent?: null }|{ type?: "Open"; Unknown?: null; Calibrating?: null; Closed?: null; Open: CarServer.Void.$Shape; Moving?: null; Vent?: null }|{ type?: "Moving"; Unknown?: null; Calibrating?: null; Closed?: null; Open?: null; Moving: CarServer.Void.$Shape; Vent?: null }|{ type?: "Vent"; Unknown?: null; Calibrating?: null; Closed?: null; Open?: null; Moving?: null; Vent: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a DisplayState.
         * @deprecated Use CarServer.ClosuresState.DisplayState.$Properties instead.
         */
        interface IDisplayState extends CarServer.ClosuresState.DisplayState.$Properties {
        }

        /** Represents a DisplayState. */
        class DisplayState {

            /**
             * Constructs a new DisplayState.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ClosuresState.DisplayState.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DisplayState Off. */
            Off?: (CarServer.Void.$Properties|null);

            /** DisplayState Dim. */
            Dim?: (CarServer.Void.$Properties|null);

            /** DisplayState Accessory. */
            Accessory?: (CarServer.Void.$Properties|null);

            /** DisplayState On. */
            On?: (CarServer.Void.$Properties|null);

            /** DisplayState Driving. */
            Driving?: (CarServer.Void.$Properties|null);

            /** DisplayState Charging. */
            Charging?: (CarServer.Void.$Properties|null);

            /** DisplayState Lock. */
            Lock?: (CarServer.Void.$Properties|null);

            /** DisplayState Sentry. */
            Sentry?: (CarServer.Void.$Properties|null);

            /** DisplayState Dog. */
            Dog?: (CarServer.Void.$Properties|null);

            /** DisplayState Entertainment. */
            Entertainment?: (CarServer.Void.$Properties|null);

            /** DisplayState type. */
            type?: ("Off"|"Dim"|"Accessory"|"On"|"Driving"|"Charging"|"Lock"|"Sentry"|"Dog"|"Entertainment");

            /**
             * Encodes the specified DisplayState message. Does not implicitly {@link CarServer.ClosuresState.DisplayState.verify|verify} messages.
             * @param m DisplayState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ClosuresState.DisplayState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DisplayState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ClosuresState.DisplayState & CarServer.ClosuresState.DisplayState.$Shape} DisplayState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClosuresState.DisplayState & CarServer.ClosuresState.DisplayState.$Shape;

            /**
             * Gets the type url for DisplayState
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DisplayState {

            /** Properties of a DisplayState. */
            interface $Properties {

                /** DisplayState Off */
                Off?: (CarServer.Void.$Properties|null);

                /** DisplayState Dim */
                Dim?: (CarServer.Void.$Properties|null);

                /** DisplayState Accessory */
                Accessory?: (CarServer.Void.$Properties|null);

                /** DisplayState On */
                On?: (CarServer.Void.$Properties|null);

                /** DisplayState Driving */
                Driving?: (CarServer.Void.$Properties|null);

                /** DisplayState Charging */
                Charging?: (CarServer.Void.$Properties|null);

                /** DisplayState Lock */
                Lock?: (CarServer.Void.$Properties|null);

                /** DisplayState Sentry */
                Sentry?: (CarServer.Void.$Properties|null);

                /** DisplayState Dog */
                Dog?: (CarServer.Void.$Properties|null);

                /** DisplayState Entertainment */
                Entertainment?: (CarServer.Void.$Properties|null);

                /** DisplayState type */
                type?: ("Off"|"Dim"|"Accessory"|"On"|"Driving"|"Charging"|"Lock"|"Sentry"|"Dog"|"Entertainment");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a DisplayState. */
            type $Shape = {
              Off?: CarServer.Void.$Shape|null;
              Dim?: CarServer.Void.$Shape|null;
              Accessory?: CarServer.Void.$Shape|null;
              On?: CarServer.Void.$Shape|null;
              Driving?: CarServer.Void.$Shape|null;
              Charging?: CarServer.Void.$Shape|null;
              Lock?: CarServer.Void.$Shape|null;
              Sentry?: CarServer.Void.$Shape|null;
              Dog?: CarServer.Void.$Shape|null;
              Entertainment?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Off"; Off: CarServer.Void.$Shape; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Dim"; Off?: null; Dim: CarServer.Void.$Shape; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Accessory"; Off?: null; Dim?: null; Accessory: CarServer.Void.$Shape; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "On"; Off?: null; Dim?: null; Accessory?: null; On: CarServer.Void.$Shape; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Driving"; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving: CarServer.Void.$Shape; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Charging"; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging: CarServer.Void.$Shape; Lock?: null; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Lock"; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock: CarServer.Void.$Shape; Sentry?: null; Dog?: null; Entertainment?: null }|{ type?: "Sentry"; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry: CarServer.Void.$Shape; Dog?: null; Entertainment?: null }|{ type?: "Dog"; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog: CarServer.Void.$Shape; Entertainment?: null }|{ type?: "Entertainment"; Off?: null; Dim?: null; Accessory?: null; On?: null; Driving?: null; Charging?: null; Lock?: null; Sentry?: null; Dog?: null; Entertainment: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a SentryModeState.
         * @deprecated Use CarServer.ClosuresState.SentryModeState.$Properties instead.
         */
        interface ISentryModeState extends CarServer.ClosuresState.SentryModeState.$Properties {
        }

        /** Represents a SentryModeState. */
        class SentryModeState {

            /**
             * Constructs a new SentryModeState.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ClosuresState.SentryModeState.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SentryModeState Off. */
            Off?: (CarServer.Void.$Properties|null);

            /** SentryModeState Idle. */
            Idle?: (CarServer.Void.$Properties|null);

            /** SentryModeState Armed. */
            Armed?: (CarServer.Void.$Properties|null);

            /** SentryModeState Aware. */
            Aware?: (CarServer.Void.$Properties|null);

            /** SentryModeState Panic. */
            Panic?: (CarServer.Void.$Properties|null);

            /** SentryModeState Quiet. */
            Quiet?: (CarServer.Void.$Properties|null);

            /** SentryModeState type. */
            type?: ("Off"|"Idle"|"Armed"|"Aware"|"Panic"|"Quiet");

            /**
             * Encodes the specified SentryModeState message. Does not implicitly {@link CarServer.ClosuresState.SentryModeState.verify|verify} messages.
             * @param m SentryModeState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ClosuresState.SentryModeState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SentryModeState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ClosuresState.SentryModeState & CarServer.ClosuresState.SentryModeState.$Shape} SentryModeState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClosuresState.SentryModeState & CarServer.ClosuresState.SentryModeState.$Shape;

            /**
             * Gets the type url for SentryModeState
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SentryModeState {

            /** Properties of a SentryModeState. */
            interface $Properties {

                /** SentryModeState Off */
                Off?: (CarServer.Void.$Properties|null);

                /** SentryModeState Idle */
                Idle?: (CarServer.Void.$Properties|null);

                /** SentryModeState Armed */
                Armed?: (CarServer.Void.$Properties|null);

                /** SentryModeState Aware */
                Aware?: (CarServer.Void.$Properties|null);

                /** SentryModeState Panic */
                Panic?: (CarServer.Void.$Properties|null);

                /** SentryModeState Quiet */
                Quiet?: (CarServer.Void.$Properties|null);

                /** SentryModeState type */
                type?: ("Off"|"Idle"|"Armed"|"Aware"|"Panic"|"Quiet");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a SentryModeState. */
            type $Shape = {
              Off?: CarServer.Void.$Shape|null;
              Idle?: CarServer.Void.$Shape|null;
              Armed?: CarServer.Void.$Shape|null;
              Aware?: CarServer.Void.$Shape|null;
              Panic?: CarServer.Void.$Shape|null;
              Quiet?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Off?: null; Idle?: null; Armed?: null; Aware?: null; Panic?: null; Quiet?: null }|{ type?: "Off"; Off: CarServer.Void.$Shape; Idle?: null; Armed?: null; Aware?: null; Panic?: null; Quiet?: null }|{ type?: "Idle"; Off?: null; Idle: CarServer.Void.$Shape; Armed?: null; Aware?: null; Panic?: null; Quiet?: null }|{ type?: "Armed"; Off?: null; Idle?: null; Armed: CarServer.Void.$Shape; Aware?: null; Panic?: null; Quiet?: null }|{ type?: "Aware"; Off?: null; Idle?: null; Armed?: null; Aware: CarServer.Void.$Shape; Panic?: null; Quiet?: null }|{ type?: "Panic"; Off?: null; Idle?: null; Armed?: null; Aware?: null; Panic: CarServer.Void.$Shape; Quiet?: null }|{ type?: "Quiet"; Off?: null; Idle?: null; Armed?: null; Aware?: null; Panic?: null; Quiet: CarServer.Void.$Shape })
            );
        }
    }

    /**
     * Properties of a ChargeScheduleState.
     * @deprecated Use CarServer.ChargeScheduleState.$Properties instead.
     */
    interface IChargeScheduleState extends CarServer.ChargeScheduleState.$Properties {
    }

    /** Represents a ChargeScheduleState. */
    class ChargeScheduleState {

        /**
         * Constructs a new ChargeScheduleState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeScheduleState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargeScheduleState charge_schedules. */
        charge_schedules: CarServer.ChargeSchedule.$Properties[];

        /** ChargeScheduleState charge_schedule_window. */
        charge_schedule_window?: (CarServer.ChargeSchedule.$Properties|null);

        /** ChargeScheduleState charge_buffer. */
        charge_buffer?: (number|null);

        /** ChargeScheduleState max_num_charge_schedules. */
        max_num_charge_schedules?: (number|null);

        /** ChargeScheduleState next_schedule. */
        next_schedule?: (boolean|null);

        /** ChargeScheduleState show_schedule_complete_state. */
        show_schedule_complete_state?: (boolean|null);

        /** ChargeScheduleState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** ChargeScheduleState optional_charge_schedule_window. */
        optional_charge_schedule_window?: "charge_schedule_window";

        /** ChargeScheduleState optional_charge_buffer. */
        optional_charge_buffer?: "charge_buffer";

        /** ChargeScheduleState optional_max_num_charge_schedules. */
        optional_max_num_charge_schedules?: "max_num_charge_schedules";

        /** ChargeScheduleState optional_next_schedule. */
        optional_next_schedule?: "next_schedule";

        /** ChargeScheduleState optional_show_schedule_complete_state. */
        optional_show_schedule_complete_state?: "show_schedule_complete_state";

        /**
         * Encodes the specified ChargeScheduleState message. Does not implicitly {@link CarServer.ChargeScheduleState.verify|verify} messages.
         * @param m ChargeScheduleState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeScheduleState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeScheduleState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeScheduleState & CarServer.ChargeScheduleState.$Shape} ChargeScheduleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeScheduleState & CarServer.ChargeScheduleState.$Shape;

        /**
         * Gets the type url for ChargeScheduleState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeScheduleState {

        /** Properties of a ChargeScheduleState. */
        interface $Properties {

            /** ChargeScheduleState charge_schedules */
            charge_schedules?: (CarServer.ChargeSchedule.$Properties[]|null);

            /** ChargeScheduleState charge_schedule_window */
            charge_schedule_window?: (CarServer.ChargeSchedule.$Properties|null);

            /** ChargeScheduleState charge_buffer */
            charge_buffer?: (number|null);

            /** ChargeScheduleState max_num_charge_schedules */
            max_num_charge_schedules?: (number|null);

            /** ChargeScheduleState next_schedule */
            next_schedule?: (boolean|null);

            /** ChargeScheduleState show_schedule_complete_state */
            show_schedule_complete_state?: (boolean|null);

            /** ChargeScheduleState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** ChargeScheduleState optional_charge_schedule_window */
            optional_charge_schedule_window?: "charge_schedule_window";

            /** ChargeScheduleState optional_charge_buffer */
            optional_charge_buffer?: "charge_buffer";

            /** ChargeScheduleState optional_max_num_charge_schedules */
            optional_max_num_charge_schedules?: "max_num_charge_schedules";

            /** ChargeScheduleState optional_next_schedule */
            optional_next_schedule?: "next_schedule";

            /** ChargeScheduleState optional_show_schedule_complete_state */
            optional_show_schedule_complete_state?: "show_schedule_complete_state";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ChargeScheduleState. */
        type $Shape = {
          charge_schedules?: CarServer.ChargeSchedule.$Shape[]|null;
          charge_schedule_window?: CarServer.ChargeSchedule.$Shape|null;
          charge_buffer?: number|null;
          max_num_charge_schedules?: number|null;
          next_schedule?: boolean|null;
          show_schedule_complete_state?: boolean|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_charge_schedule_window?: undefined; charge_schedule_window?: null }|{ optional_charge_schedule_window?: "charge_schedule_window"; charge_schedule_window: CarServer.ChargeSchedule.$Shape })
        ) & (
          ({ optional_charge_buffer?: undefined; charge_buffer?: null }|{ optional_charge_buffer?: "charge_buffer"; charge_buffer: number })
        ) & (
          ({ optional_max_num_charge_schedules?: undefined; max_num_charge_schedules?: null }|{ optional_max_num_charge_schedules?: "max_num_charge_schedules"; max_num_charge_schedules: number })
        ) & (
          ({ optional_next_schedule?: undefined; next_schedule?: null }|{ optional_next_schedule?: "next_schedule"; next_schedule: boolean })
        ) & (
          ({ optional_show_schedule_complete_state?: undefined; show_schedule_complete_state?: null }|{ optional_show_schedule_complete_state?: "show_schedule_complete_state"; show_schedule_complete_state: boolean })
        );
    }

    /**
     * Properties of a PreconditioningScheduleState.
     * @deprecated Use CarServer.PreconditioningScheduleState.$Properties instead.
     */
    interface IPreconditioningScheduleState extends CarServer.PreconditioningScheduleState.$Properties {
    }

    /** Represents a PreconditioningScheduleState. */
    class PreconditioningScheduleState {

        /**
         * Constructs a new PreconditioningScheduleState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.PreconditioningScheduleState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreconditioningScheduleState precondition_schedules. */
        precondition_schedules: CarServer.PreconditionSchedule.$Properties[];

        /** PreconditioningScheduleState preconditioning_schedule_window. */
        preconditioning_schedule_window?: (CarServer.PreconditionSchedule.$Properties|null);

        /** PreconditioningScheduleState max_num_precondition_schedules. */
        max_num_precondition_schedules?: (number|null);

        /** PreconditioningScheduleState next_schedule. */
        next_schedule?: (boolean|null);

        /** PreconditioningScheduleState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** PreconditioningScheduleState optional_preconditioning_schedule_window. */
        optional_preconditioning_schedule_window?: "preconditioning_schedule_window";

        /** PreconditioningScheduleState optional_max_num_precondition_schedules. */
        optional_max_num_precondition_schedules?: "max_num_precondition_schedules";

        /** PreconditioningScheduleState optional_next_schedule. */
        optional_next_schedule?: "next_schedule";

        /**
         * Encodes the specified PreconditioningScheduleState message. Does not implicitly {@link CarServer.PreconditioningScheduleState.verify|verify} messages.
         * @param m PreconditioningScheduleState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.PreconditioningScheduleState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreconditioningScheduleState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.PreconditioningScheduleState & CarServer.PreconditioningScheduleState.$Shape} PreconditioningScheduleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.PreconditioningScheduleState & CarServer.PreconditioningScheduleState.$Shape;

        /**
         * Gets the type url for PreconditioningScheduleState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreconditioningScheduleState {

        /** Properties of a PreconditioningScheduleState. */
        interface $Properties {

            /** PreconditioningScheduleState precondition_schedules */
            precondition_schedules?: (CarServer.PreconditionSchedule.$Properties[]|null);

            /** PreconditioningScheduleState preconditioning_schedule_window */
            preconditioning_schedule_window?: (CarServer.PreconditionSchedule.$Properties|null);

            /** PreconditioningScheduleState max_num_precondition_schedules */
            max_num_precondition_schedules?: (number|null);

            /** PreconditioningScheduleState next_schedule */
            next_schedule?: (boolean|null);

            /** PreconditioningScheduleState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** PreconditioningScheduleState optional_preconditioning_schedule_window */
            optional_preconditioning_schedule_window?: "preconditioning_schedule_window";

            /** PreconditioningScheduleState optional_max_num_precondition_schedules */
            optional_max_num_precondition_schedules?: "max_num_precondition_schedules";

            /** PreconditioningScheduleState optional_next_schedule */
            optional_next_schedule?: "next_schedule";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a PreconditioningScheduleState. */
        type $Shape = {
          precondition_schedules?: CarServer.PreconditionSchedule.$Shape[]|null;
          preconditioning_schedule_window?: CarServer.PreconditionSchedule.$Shape|null;
          max_num_precondition_schedules?: number|null;
          next_schedule?: boolean|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_preconditioning_schedule_window?: undefined; preconditioning_schedule_window?: null }|{ optional_preconditioning_schedule_window?: "preconditioning_schedule_window"; preconditioning_schedule_window: CarServer.PreconditionSchedule.$Shape })
        ) & (
          ({ optional_max_num_precondition_schedules?: undefined; max_num_precondition_schedules?: null }|{ optional_max_num_precondition_schedules?: "max_num_precondition_schedules"; max_num_precondition_schedules: number })
        ) & (
          ({ optional_next_schedule?: undefined; next_schedule?: null }|{ optional_next_schedule?: "next_schedule"; next_schedule: boolean })
        );
    }

    /**
     * Properties of a SpeedLimitMode.
     * @deprecated Use CarServer.SpeedLimitMode.$Properties instead.
     */
    interface ISpeedLimitMode extends CarServer.SpeedLimitMode.$Properties {
    }

    /** Represents a SpeedLimitMode. */
    class SpeedLimitMode {

        /**
         * Constructs a new SpeedLimitMode.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SpeedLimitMode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SpeedLimitMode active. */
        active?: (boolean|null);

        /** SpeedLimitMode pin_code_set. */
        pin_code_set?: (boolean|null);

        /** SpeedLimitMode max_limit_mph. */
        max_limit_mph?: (number|null);

        /** SpeedLimitMode min_limit_mph. */
        min_limit_mph?: (number|null);

        /** SpeedLimitMode current_limit_mph. */
        current_limit_mph?: (number|null);

        /** SpeedLimitMode optional_active. */
        optional_active?: "active";

        /** SpeedLimitMode optional_pin_code_set. */
        optional_pin_code_set?: "pin_code_set";

        /** SpeedLimitMode optional_max_limit_mph. */
        optional_max_limit_mph?: "max_limit_mph";

        /** SpeedLimitMode optional_min_limit_mph. */
        optional_min_limit_mph?: "min_limit_mph";

        /** SpeedLimitMode optional_current_limit_mph. */
        optional_current_limit_mph?: "current_limit_mph";

        /**
         * Encodes the specified SpeedLimitMode message. Does not implicitly {@link CarServer.SpeedLimitMode.verify|verify} messages.
         * @param m SpeedLimitMode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SpeedLimitMode.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpeedLimitMode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SpeedLimitMode & CarServer.SpeedLimitMode.$Shape} SpeedLimitMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SpeedLimitMode & CarServer.SpeedLimitMode.$Shape;

        /**
         * Gets the type url for SpeedLimitMode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SpeedLimitMode {

        /** Properties of a SpeedLimitMode. */
        interface $Properties {

            /** SpeedLimitMode active */
            active?: (boolean|null);

            /** SpeedLimitMode pin_code_set */
            pin_code_set?: (boolean|null);

            /** SpeedLimitMode max_limit_mph */
            max_limit_mph?: (number|null);

            /** SpeedLimitMode min_limit_mph */
            min_limit_mph?: (number|null);

            /** SpeedLimitMode current_limit_mph */
            current_limit_mph?: (number|null);

            /** SpeedLimitMode optional_active */
            optional_active?: "active";

            /** SpeedLimitMode optional_pin_code_set */
            optional_pin_code_set?: "pin_code_set";

            /** SpeedLimitMode optional_max_limit_mph */
            optional_max_limit_mph?: "max_limit_mph";

            /** SpeedLimitMode optional_min_limit_mph */
            optional_min_limit_mph?: "min_limit_mph";

            /** SpeedLimitMode optional_current_limit_mph */
            optional_current_limit_mph?: "current_limit_mph";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a SpeedLimitMode. */
        type $Shape = {
          active?: boolean|null;
          pin_code_set?: boolean|null;
          max_limit_mph?: number|null;
          min_limit_mph?: number|null;
          current_limit_mph?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_active?: undefined; active?: null }|{ optional_active?: "active"; active: boolean })
        ) & (
          ({ optional_pin_code_set?: undefined; pin_code_set?: null }|{ optional_pin_code_set?: "pin_code_set"; pin_code_set: boolean })
        ) & (
          ({ optional_max_limit_mph?: undefined; max_limit_mph?: null }|{ optional_max_limit_mph?: "max_limit_mph"; max_limit_mph: number })
        ) & (
          ({ optional_min_limit_mph?: undefined; min_limit_mph?: null }|{ optional_min_limit_mph?: "min_limit_mph"; min_limit_mph: number })
        ) & (
          ({ optional_current_limit_mph?: undefined; current_limit_mph?: null }|{ optional_current_limit_mph?: "current_limit_mph"; current_limit_mph: number })
        );
    }

    /**
     * Properties of a ParentalControlsSettings.
     * @deprecated Use CarServer.ParentalControlsSettings.$Properties instead.
     */
    interface IParentalControlsSettings extends CarServer.ParentalControlsSettings.$Properties {
    }

    /** Represents a ParentalControlsSettings. */
    class ParentalControlsSettings {

        /**
         * Constructs a new ParentalControlsSettings.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsSettings.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ParentalControlsSettings speed_limit_enabled. */
        speed_limit_enabled?: (boolean|null);

        /** ParentalControlsSettings max_limit_mph. */
        max_limit_mph?: (number|null);

        /** ParentalControlsSettings min_limit_mph. */
        min_limit_mph?: (number|null);

        /** ParentalControlsSettings current_limit_mph. */
        current_limit_mph?: (number|null);

        /** ParentalControlsSettings chill_acceleration_enabled. */
        chill_acceleration_enabled?: (boolean|null);

        /** ParentalControlsSettings require_safety_settings_enabled. */
        require_safety_settings_enabled?: (boolean|null);

        /** ParentalControlsSettings curfew_enabled. */
        curfew_enabled?: (boolean|null);

        /** ParentalControlsSettings curfew_start_time. */
        curfew_start_time?: (number|null);

        /** ParentalControlsSettings curfew_end_time. */
        curfew_end_time?: (number|null);

        /** ParentalControlsSettings optional_speed_limit_enabled. */
        optional_speed_limit_enabled?: "speed_limit_enabled";

        /** ParentalControlsSettings optional_max_limit_mph. */
        optional_max_limit_mph?: "max_limit_mph";

        /** ParentalControlsSettings optional_min_limit_mph. */
        optional_min_limit_mph?: "min_limit_mph";

        /** ParentalControlsSettings optional_current_limit_mph. */
        optional_current_limit_mph?: "current_limit_mph";

        /** ParentalControlsSettings optional_chill_acceleration_enabled. */
        optional_chill_acceleration_enabled?: "chill_acceleration_enabled";

        /** ParentalControlsSettings optional_require_safety_settings_enabled. */
        optional_require_safety_settings_enabled?: "require_safety_settings_enabled";

        /** ParentalControlsSettings optional_curfew_enabled. */
        optional_curfew_enabled?: "curfew_enabled";

        /** ParentalControlsSettings optional_curfew_start_time. */
        optional_curfew_start_time?: "curfew_start_time";

        /** ParentalControlsSettings optional_curfew_end_time. */
        optional_curfew_end_time?: "curfew_end_time";

        /**
         * Encodes the specified ParentalControlsSettings message. Does not implicitly {@link CarServer.ParentalControlsSettings.verify|verify} messages.
         * @param m ParentalControlsSettings message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsSettings.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsSettings message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsSettings & CarServer.ParentalControlsSettings.$Shape} ParentalControlsSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsSettings & CarServer.ParentalControlsSettings.$Shape;

        /**
         * Gets the type url for ParentalControlsSettings
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsSettings {

        /** Properties of a ParentalControlsSettings. */
        interface $Properties {

            /** ParentalControlsSettings speed_limit_enabled */
            speed_limit_enabled?: (boolean|null);

            /** ParentalControlsSettings max_limit_mph */
            max_limit_mph?: (number|null);

            /** ParentalControlsSettings min_limit_mph */
            min_limit_mph?: (number|null);

            /** ParentalControlsSettings current_limit_mph */
            current_limit_mph?: (number|null);

            /** ParentalControlsSettings chill_acceleration_enabled */
            chill_acceleration_enabled?: (boolean|null);

            /** ParentalControlsSettings require_safety_settings_enabled */
            require_safety_settings_enabled?: (boolean|null);

            /** ParentalControlsSettings curfew_enabled */
            curfew_enabled?: (boolean|null);

            /** ParentalControlsSettings curfew_start_time */
            curfew_start_time?: (number|null);

            /** ParentalControlsSettings curfew_end_time */
            curfew_end_time?: (number|null);

            /** ParentalControlsSettings optional_speed_limit_enabled */
            optional_speed_limit_enabled?: "speed_limit_enabled";

            /** ParentalControlsSettings optional_max_limit_mph */
            optional_max_limit_mph?: "max_limit_mph";

            /** ParentalControlsSettings optional_min_limit_mph */
            optional_min_limit_mph?: "min_limit_mph";

            /** ParentalControlsSettings optional_current_limit_mph */
            optional_current_limit_mph?: "current_limit_mph";

            /** ParentalControlsSettings optional_chill_acceleration_enabled */
            optional_chill_acceleration_enabled?: "chill_acceleration_enabled";

            /** ParentalControlsSettings optional_require_safety_settings_enabled */
            optional_require_safety_settings_enabled?: "require_safety_settings_enabled";

            /** ParentalControlsSettings optional_curfew_enabled */
            optional_curfew_enabled?: "curfew_enabled";

            /** ParentalControlsSettings optional_curfew_start_time */
            optional_curfew_start_time?: "curfew_start_time";

            /** ParentalControlsSettings optional_curfew_end_time */
            optional_curfew_end_time?: "curfew_end_time";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ParentalControlsSettings. */
        type $Shape = {
          speed_limit_enabled?: boolean|null;
          max_limit_mph?: number|null;
          min_limit_mph?: number|null;
          current_limit_mph?: number|null;
          chill_acceleration_enabled?: boolean|null;
          require_safety_settings_enabled?: boolean|null;
          curfew_enabled?: boolean|null;
          curfew_start_time?: number|null;
          curfew_end_time?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_speed_limit_enabled?: undefined; speed_limit_enabled?: null }|{ optional_speed_limit_enabled?: "speed_limit_enabled"; speed_limit_enabled: boolean })
        ) & (
          ({ optional_max_limit_mph?: undefined; max_limit_mph?: null }|{ optional_max_limit_mph?: "max_limit_mph"; max_limit_mph: number })
        ) & (
          ({ optional_min_limit_mph?: undefined; min_limit_mph?: null }|{ optional_min_limit_mph?: "min_limit_mph"; min_limit_mph: number })
        ) & (
          ({ optional_current_limit_mph?: undefined; current_limit_mph?: null }|{ optional_current_limit_mph?: "current_limit_mph"; current_limit_mph: number })
        ) & (
          ({ optional_chill_acceleration_enabled?: undefined; chill_acceleration_enabled?: null }|{ optional_chill_acceleration_enabled?: "chill_acceleration_enabled"; chill_acceleration_enabled: boolean })
        ) & (
          ({ optional_require_safety_settings_enabled?: undefined; require_safety_settings_enabled?: null }|{ optional_require_safety_settings_enabled?: "require_safety_settings_enabled"; require_safety_settings_enabled: boolean })
        ) & (
          ({ optional_curfew_enabled?: undefined; curfew_enabled?: null }|{ optional_curfew_enabled?: "curfew_enabled"; curfew_enabled: boolean })
        ) & (
          ({ optional_curfew_start_time?: undefined; curfew_start_time?: null }|{ optional_curfew_start_time?: "curfew_start_time"; curfew_start_time: number })
        ) & (
          ({ optional_curfew_end_time?: undefined; curfew_end_time?: null }|{ optional_curfew_end_time?: "curfew_end_time"; curfew_end_time: number })
        );
    }

    /**
     * Properties of a ParentalControlsState.
     * @deprecated Use CarServer.ParentalControlsState.$Properties instead.
     */
    interface IParentalControlsState extends CarServer.ParentalControlsState.$Properties {
    }

    /** Represents a ParentalControlsState. */
    class ParentalControlsState {

        /**
         * Constructs a new ParentalControlsState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ParentalControlsState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ParentalControlsState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** ParentalControlsState parental_controls_active. */
        parental_controls_active?: (boolean|null);

        /** ParentalControlsState parental_controls_pin_set. */
        parental_controls_pin_set?: (boolean|null);

        /** ParentalControlsState parental_controls_settings. */
        parental_controls_settings?: (CarServer.ParentalControlsSettings.$Properties|null);

        /** ParentalControlsState optional_parental_controls_active. */
        optional_parental_controls_active?: "parental_controls_active";

        /** ParentalControlsState optional_parental_controls_pin_set. */
        optional_parental_controls_pin_set?: "parental_controls_pin_set";

        /**
         * Encodes the specified ParentalControlsState message. Does not implicitly {@link CarServer.ParentalControlsState.verify|verify} messages.
         * @param m ParentalControlsState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ParentalControlsState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentalControlsState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ParentalControlsState & CarServer.ParentalControlsState.$Shape} ParentalControlsState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ParentalControlsState & CarServer.ParentalControlsState.$Shape;

        /**
         * Gets the type url for ParentalControlsState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ParentalControlsState {

        /** Properties of a ParentalControlsState. */
        interface $Properties {

            /** ParentalControlsState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** ParentalControlsState parental_controls_active */
            parental_controls_active?: (boolean|null);

            /** ParentalControlsState parental_controls_pin_set */
            parental_controls_pin_set?: (boolean|null);

            /** ParentalControlsState parental_controls_settings */
            parental_controls_settings?: (CarServer.ParentalControlsSettings.$Properties|null);

            /** ParentalControlsState optional_parental_controls_active */
            optional_parental_controls_active?: "parental_controls_active";

            /** ParentalControlsState optional_parental_controls_pin_set */
            optional_parental_controls_pin_set?: "parental_controls_pin_set";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ParentalControlsState. */
        type $Shape = {
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          parental_controls_active?: boolean|null;
          parental_controls_pin_set?: boolean|null;
          parental_controls_settings?: CarServer.ParentalControlsSettings.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_parental_controls_active?: undefined; parental_controls_active?: null }|{ optional_parental_controls_active?: "parental_controls_active"; parental_controls_active: boolean })
        ) & (
          ({ optional_parental_controls_pin_set?: undefined; parental_controls_pin_set?: null }|{ optional_parental_controls_pin_set?: "parental_controls_pin_set"; parental_controls_pin_set: boolean })
        );
    }

    /**
     * Properties of a SoftwareUpdateState.
     * @deprecated Use CarServer.SoftwareUpdateState.$Properties instead.
     */
    interface ISoftwareUpdateState extends CarServer.SoftwareUpdateState.$Properties {
    }

    /** Represents a SoftwareUpdateState. */
    class SoftwareUpdateState {

        /**
         * Constructs a new SoftwareUpdateState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.SoftwareUpdateState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SoftwareUpdateState status. */
        status?: (CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Properties|null);

        /** SoftwareUpdateState scheduled_time_ms. */
        scheduled_time_ms?: (number|null);

        /** SoftwareUpdateState warning_time_remaining_ms. */
        warning_time_remaining_ms?: (number|null);

        /** SoftwareUpdateState expected_duration_sec. */
        expected_duration_sec?: (number|null);

        /** SoftwareUpdateState download_perc. */
        download_perc?: (number|null);

        /** SoftwareUpdateState install_perc. */
        install_perc?: (number|null);

        /** SoftwareUpdateState version. */
        version?: (string|null);

        /** SoftwareUpdateState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** SoftwareUpdateState optional_scheduled_time_ms. */
        optional_scheduled_time_ms?: "scheduled_time_ms";

        /** SoftwareUpdateState optional_warning_time_remaining_ms. */
        optional_warning_time_remaining_ms?: "warning_time_remaining_ms";

        /** SoftwareUpdateState optional_expected_duration_sec. */
        optional_expected_duration_sec?: "expected_duration_sec";

        /** SoftwareUpdateState optional_download_perc. */
        optional_download_perc?: "download_perc";

        /** SoftwareUpdateState optional_install_perc. */
        optional_install_perc?: "install_perc";

        /** SoftwareUpdateState optional_version. */
        optional_version?: "version";

        /**
         * Encodes the specified SoftwareUpdateState message. Does not implicitly {@link CarServer.SoftwareUpdateState.verify|verify} messages.
         * @param m SoftwareUpdateState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.SoftwareUpdateState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SoftwareUpdateState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.SoftwareUpdateState & CarServer.SoftwareUpdateState.$Shape} SoftwareUpdateState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SoftwareUpdateState & CarServer.SoftwareUpdateState.$Shape;

        /**
         * Gets the type url for SoftwareUpdateState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SoftwareUpdateState {

        /** Properties of a SoftwareUpdateState. */
        interface $Properties {

            /** SoftwareUpdateState status */
            status?: (CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Properties|null);

            /** SoftwareUpdateState scheduled_time_ms */
            scheduled_time_ms?: (number|null);

            /** SoftwareUpdateState warning_time_remaining_ms */
            warning_time_remaining_ms?: (number|null);

            /** SoftwareUpdateState expected_duration_sec */
            expected_duration_sec?: (number|null);

            /** SoftwareUpdateState download_perc */
            download_perc?: (number|null);

            /** SoftwareUpdateState install_perc */
            install_perc?: (number|null);

            /** SoftwareUpdateState version */
            version?: (string|null);

            /** SoftwareUpdateState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** SoftwareUpdateState optional_scheduled_time_ms */
            optional_scheduled_time_ms?: "scheduled_time_ms";

            /** SoftwareUpdateState optional_warning_time_remaining_ms */
            optional_warning_time_remaining_ms?: "warning_time_remaining_ms";

            /** SoftwareUpdateState optional_expected_duration_sec */
            optional_expected_duration_sec?: "expected_duration_sec";

            /** SoftwareUpdateState optional_download_perc */
            optional_download_perc?: "download_perc";

            /** SoftwareUpdateState optional_install_perc */
            optional_install_perc?: "install_perc";

            /** SoftwareUpdateState optional_version */
            optional_version?: "version";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a SoftwareUpdateState. */
        type $Shape = {
          status?: CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Shape|null;
          scheduled_time_ms?: number|null;
          warning_time_remaining_ms?: number|null;
          expected_duration_sec?: number|null;
          download_perc?: number|null;
          install_perc?: number|null;
          version?: string|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_scheduled_time_ms?: undefined; scheduled_time_ms?: null }|{ optional_scheduled_time_ms?: "scheduled_time_ms"; scheduled_time_ms: number })
        ) & (
          ({ optional_warning_time_remaining_ms?: undefined; warning_time_remaining_ms?: null }|{ optional_warning_time_remaining_ms?: "warning_time_remaining_ms"; warning_time_remaining_ms: number })
        ) & (
          ({ optional_expected_duration_sec?: undefined; expected_duration_sec?: null }|{ optional_expected_duration_sec?: "expected_duration_sec"; expected_duration_sec: number })
        ) & (
          ({ optional_download_perc?: undefined; download_perc?: null }|{ optional_download_perc?: "download_perc"; download_perc: number })
        ) & (
          ({ optional_install_perc?: undefined; install_perc?: null }|{ optional_install_perc?: "install_perc"; install_perc: number })
        ) & (
          ({ optional_version?: undefined; version?: null }|{ optional_version?: "version"; version: string })
        );

        /**
         * Properties of a SoftwareUpdateStatus.
         * @deprecated Use CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Properties instead.
         */
        interface ISoftwareUpdateStatus extends CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Properties {
        }

        /** Represents a SoftwareUpdateStatus. */
        class SoftwareUpdateStatus {

            /**
             * Constructs a new SoftwareUpdateStatus.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SoftwareUpdateStatus Unknown. */
            Unknown?: (CarServer.Void.$Properties|null);

            /** SoftwareUpdateStatus Installing. */
            Installing?: (CarServer.Void.$Properties|null);

            /** SoftwareUpdateStatus Scheduled. */
            Scheduled?: (CarServer.Void.$Properties|null);

            /** SoftwareUpdateStatus Available. */
            Available?: (CarServer.Void.$Properties|null);

            /** SoftwareUpdateStatus DownloadingWifiWait. */
            DownloadingWifiWait?: (CarServer.Void.$Properties|null);

            /** SoftwareUpdateStatus Downloading. */
            Downloading?: (CarServer.Void.$Properties|null);

            /** SoftwareUpdateStatus type. */
            type?: ("Unknown"|"Installing"|"Scheduled"|"Available"|"DownloadingWifiWait"|"Downloading");

            /**
             * Encodes the specified SoftwareUpdateStatus message. Does not implicitly {@link CarServer.SoftwareUpdateState.SoftwareUpdateStatus.verify|verify} messages.
             * @param m SoftwareUpdateStatus message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SoftwareUpdateStatus message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.SoftwareUpdateState.SoftwareUpdateStatus & CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Shape} SoftwareUpdateStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.SoftwareUpdateState.SoftwareUpdateStatus & CarServer.SoftwareUpdateState.SoftwareUpdateStatus.$Shape;

            /**
             * Gets the type url for SoftwareUpdateStatus
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SoftwareUpdateStatus {

            /** Properties of a SoftwareUpdateStatus. */
            interface $Properties {

                /** SoftwareUpdateStatus Unknown */
                Unknown?: (CarServer.Void.$Properties|null);

                /** SoftwareUpdateStatus Installing */
                Installing?: (CarServer.Void.$Properties|null);

                /** SoftwareUpdateStatus Scheduled */
                Scheduled?: (CarServer.Void.$Properties|null);

                /** SoftwareUpdateStatus Available */
                Available?: (CarServer.Void.$Properties|null);

                /** SoftwareUpdateStatus DownloadingWifiWait */
                DownloadingWifiWait?: (CarServer.Void.$Properties|null);

                /** SoftwareUpdateStatus Downloading */
                Downloading?: (CarServer.Void.$Properties|null);

                /** SoftwareUpdateStatus type */
                type?: ("Unknown"|"Installing"|"Scheduled"|"Available"|"DownloadingWifiWait"|"Downloading");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a SoftwareUpdateStatus. */
            type $Shape = {
              Unknown?: CarServer.Void.$Shape|null;
              Installing?: CarServer.Void.$Shape|null;
              Scheduled?: CarServer.Void.$Shape|null;
              Available?: CarServer.Void.$Shape|null;
              DownloadingWifiWait?: CarServer.Void.$Shape|null;
              Downloading?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Unknown?: null; Installing?: null; Scheduled?: null; Available?: null; DownloadingWifiWait?: null; Downloading?: null }|{ type?: "Unknown"; Unknown: CarServer.Void.$Shape; Installing?: null; Scheduled?: null; Available?: null; DownloadingWifiWait?: null; Downloading?: null }|{ type?: "Installing"; Unknown?: null; Installing: CarServer.Void.$Shape; Scheduled?: null; Available?: null; DownloadingWifiWait?: null; Downloading?: null }|{ type?: "Scheduled"; Unknown?: null; Installing?: null; Scheduled: CarServer.Void.$Shape; Available?: null; DownloadingWifiWait?: null; Downloading?: null }|{ type?: "Available"; Unknown?: null; Installing?: null; Scheduled?: null; Available: CarServer.Void.$Shape; DownloadingWifiWait?: null; Downloading?: null }|{ type?: "DownloadingWifiWait"; Unknown?: null; Installing?: null; Scheduled?: null; Available?: null; DownloadingWifiWait: CarServer.Void.$Shape; Downloading?: null }|{ type?: "Downloading"; Unknown?: null; Installing?: null; Scheduled?: null; Available?: null; DownloadingWifiWait?: null; Downloading: CarServer.Void.$Shape })
            );
        }
    }

    /**
     * Properties of a DriveState.
     * @deprecated Use CarServer.DriveState.$Properties instead.
     */
    interface IDriveState extends CarServer.DriveState.$Properties {
    }

    /** Represents a DriveState. */
    class DriveState {

        /**
         * Constructs a new DriveState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.DriveState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DriveState shift_state. */
        shift_state?: (CarServer.ShiftState.$Properties|null);

        /** DriveState speed. */
        speed?: (number|null);

        /** DriveState power. */
        power?: (number|null);

        /** DriveState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** DriveState odometer_in_hundredths_of_a_mile. */
        odometer_in_hundredths_of_a_mile?: (number|null);

        /** DriveState speed_float. */
        speed_float?: (number|null);

        /** DriveState active_route_destination. */
        active_route_destination?: (string|null);

        /** DriveState active_route_minutes_to_arrival. */
        active_route_minutes_to_arrival?: (number|null);

        /** DriveState active_route_miles_to_arrival. */
        active_route_miles_to_arrival?: (number|null);

        /** DriveState active_route_traffic_minutes_delay. */
        active_route_traffic_minutes_delay?: (number|null);

        /** DriveState active_route_energy_at_arrival. */
        active_route_energy_at_arrival?: (number|null);

        /** DriveState last_route_update. */
        last_route_update?: (number|null);

        /** DriveState last_traffic_update. */
        last_traffic_update?: (google.protobuf.Timestamp.$Properties|null);

        /** DriveState active_route_coordinates. */
        active_route_coordinates?: (CarServer.LatLong.$Properties|null);

        /** DriveState optional_speed. */
        optional_speed?: "speed";

        /** DriveState optional_power. */
        optional_power?: "power";

        /** DriveState optional_odometer_in_hundredths_of_a_mile. */
        optional_odometer_in_hundredths_of_a_mile?: "odometer_in_hundredths_of_a_mile";

        /** DriveState optional_speed_float. */
        optional_speed_float?: "speed_float";

        /** DriveState optional_active_route_destination. */
        optional_active_route_destination?: "active_route_destination";

        /** DriveState optional_active_route_minutes_to_arrival. */
        optional_active_route_minutes_to_arrival?: "active_route_minutes_to_arrival";

        /** DriveState optional_active_route_miles_to_arrival. */
        optional_active_route_miles_to_arrival?: "active_route_miles_to_arrival";

        /** DriveState optional_active_route_traffic_minutes_delay. */
        optional_active_route_traffic_minutes_delay?: "active_route_traffic_minutes_delay";

        /** DriveState optional_active_route_energy_at_arrival. */
        optional_active_route_energy_at_arrival?: "active_route_energy_at_arrival";

        /** DriveState optional_last_route_update. */
        optional_last_route_update?: "last_route_update";

        /**
         * Encodes the specified DriveState message. Does not implicitly {@link CarServer.DriveState.verify|verify} messages.
         * @param m DriveState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.DriveState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DriveState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.DriveState & CarServer.DriveState.$Shape} DriveState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.DriveState & CarServer.DriveState.$Shape;

        /**
         * Gets the type url for DriveState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DriveState {

        /** Properties of a DriveState. */
        interface $Properties {

            /** DriveState shift_state */
            shift_state?: (CarServer.ShiftState.$Properties|null);

            /** DriveState speed */
            speed?: (number|null);

            /** DriveState power */
            power?: (number|null);

            /** DriveState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** DriveState odometer_in_hundredths_of_a_mile */
            odometer_in_hundredths_of_a_mile?: (number|null);

            /** DriveState speed_float */
            speed_float?: (number|null);

            /** DriveState active_route_destination */
            active_route_destination?: (string|null);

            /** DriveState active_route_minutes_to_arrival */
            active_route_minutes_to_arrival?: (number|null);

            /** DriveState active_route_miles_to_arrival */
            active_route_miles_to_arrival?: (number|null);

            /** DriveState active_route_traffic_minutes_delay */
            active_route_traffic_minutes_delay?: (number|null);

            /** DriveState active_route_energy_at_arrival */
            active_route_energy_at_arrival?: (number|null);

            /** DriveState last_route_update */
            last_route_update?: (number|null);

            /** DriveState last_traffic_update */
            last_traffic_update?: (google.protobuf.Timestamp.$Properties|null);

            /** DriveState active_route_coordinates */
            active_route_coordinates?: (CarServer.LatLong.$Properties|null);

            /** DriveState optional_speed */
            optional_speed?: "speed";

            /** DriveState optional_power */
            optional_power?: "power";

            /** DriveState optional_odometer_in_hundredths_of_a_mile */
            optional_odometer_in_hundredths_of_a_mile?: "odometer_in_hundredths_of_a_mile";

            /** DriveState optional_speed_float */
            optional_speed_float?: "speed_float";

            /** DriveState optional_active_route_destination */
            optional_active_route_destination?: "active_route_destination";

            /** DriveState optional_active_route_minutes_to_arrival */
            optional_active_route_minutes_to_arrival?: "active_route_minutes_to_arrival";

            /** DriveState optional_active_route_miles_to_arrival */
            optional_active_route_miles_to_arrival?: "active_route_miles_to_arrival";

            /** DriveState optional_active_route_traffic_minutes_delay */
            optional_active_route_traffic_minutes_delay?: "active_route_traffic_minutes_delay";

            /** DriveState optional_active_route_energy_at_arrival */
            optional_active_route_energy_at_arrival?: "active_route_energy_at_arrival";

            /** DriveState optional_last_route_update */
            optional_last_route_update?: "last_route_update";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a DriveState. */
        type $Shape = {
          shift_state?: CarServer.ShiftState.$Shape|null;
          speed?: number|null;
          power?: number|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          odometer_in_hundredths_of_a_mile?: number|null;
          speed_float?: number|null;
          active_route_destination?: string|null;
          active_route_minutes_to_arrival?: number|null;
          active_route_miles_to_arrival?: number|null;
          active_route_traffic_minutes_delay?: number|null;
          active_route_energy_at_arrival?: number|null;
          last_route_update?: number|null;
          last_traffic_update?: google.protobuf.Timestamp.$Shape|null;
          active_route_coordinates?: CarServer.LatLong.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_speed?: undefined; speed?: null }|{ optional_speed?: "speed"; speed: number })
        ) & (
          ({ optional_power?: undefined; power?: null }|{ optional_power?: "power"; power: number })
        ) & (
          ({ optional_odometer_in_hundredths_of_a_mile?: undefined; odometer_in_hundredths_of_a_mile?: null }|{ optional_odometer_in_hundredths_of_a_mile?: "odometer_in_hundredths_of_a_mile"; odometer_in_hundredths_of_a_mile: number })
        ) & (
          ({ optional_speed_float?: undefined; speed_float?: null }|{ optional_speed_float?: "speed_float"; speed_float: number })
        ) & (
          ({ optional_active_route_destination?: undefined; active_route_destination?: null }|{ optional_active_route_destination?: "active_route_destination"; active_route_destination: string })
        ) & (
          ({ optional_active_route_minutes_to_arrival?: undefined; active_route_minutes_to_arrival?: null }|{ optional_active_route_minutes_to_arrival?: "active_route_minutes_to_arrival"; active_route_minutes_to_arrival: number })
        ) & (
          ({ optional_active_route_miles_to_arrival?: undefined; active_route_miles_to_arrival?: null }|{ optional_active_route_miles_to_arrival?: "active_route_miles_to_arrival"; active_route_miles_to_arrival: number })
        ) & (
          ({ optional_active_route_traffic_minutes_delay?: undefined; active_route_traffic_minutes_delay?: null }|{ optional_active_route_traffic_minutes_delay?: "active_route_traffic_minutes_delay"; active_route_traffic_minutes_delay: number })
        ) & (
          ({ optional_active_route_energy_at_arrival?: undefined; active_route_energy_at_arrival?: null }|{ optional_active_route_energy_at_arrival?: "active_route_energy_at_arrival"; active_route_energy_at_arrival: number })
        ) & (
          ({ optional_last_route_update?: undefined; last_route_update?: null }|{ optional_last_route_update?: "last_route_update"; last_route_update: number })
        );
    }

    /**
     * Properties of a ChargeState.
     * @deprecated Use CarServer.ChargeState.$Properties instead.
     */
    interface IChargeState extends CarServer.ChargeState.$Properties {
    }

    /** Represents a ChargeState. */
    class ChargeState {

        /**
         * Constructs a new ChargeState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargeState charging_state. */
        charging_state?: (CarServer.ChargeState.ChargingState.$Properties|null);

        /** ChargeState fast_charger_type. */
        fast_charger_type?: (CarServer.ChargeState.ChargerType.$Properties|null);

        /** ChargeState fast_charger_brand. */
        fast_charger_brand?: (CarServer.ChargeState.ChargerBrand.$Properties|null);

        /** ChargeState charge_limit_soc. */
        charge_limit_soc?: (number|null);

        /** ChargeState charge_limit_soc_std. */
        charge_limit_soc_std?: (number|null);

        /** ChargeState charge_limit_soc_min. */
        charge_limit_soc_min?: (number|null);

        /** ChargeState charge_limit_soc_max. */
        charge_limit_soc_max?: (number|null);

        /** ChargeState max_range_charge_counter. */
        max_range_charge_counter?: (number|null);

        /** ChargeState fast_charger_present. */
        fast_charger_present?: (boolean|null);

        /** ChargeState battery_range. */
        battery_range?: (number|null);

        /** ChargeState est_battery_range. */
        est_battery_range?: (number|null);

        /** ChargeState ideal_battery_range. */
        ideal_battery_range?: (number|null);

        /** ChargeState battery_level. */
        battery_level?: (number|null);

        /** ChargeState usable_battery_level. */
        usable_battery_level?: (number|null);

        /** ChargeState charge_energy_added. */
        charge_energy_added?: (number|null);

        /** ChargeState charge_miles_added_rated. */
        charge_miles_added_rated?: (number|null);

        /** ChargeState charge_miles_added_ideal. */
        charge_miles_added_ideal?: (number|null);

        /** ChargeState charger_voltage. */
        charger_voltage?: (number|null);

        /** ChargeState charger_pilot_current. */
        charger_pilot_current?: (number|null);

        /** ChargeState charger_actual_current. */
        charger_actual_current?: (number|null);

        /** ChargeState charger_power. */
        charger_power?: (number|null);

        /** ChargeState minutes_to_full_charge. */
        minutes_to_full_charge?: (number|null);

        /** ChargeState minutes_to_charge_limit. */
        minutes_to_charge_limit?: (number|null);

        /** ChargeState trip_charging. */
        trip_charging?: (boolean|null);

        /** ChargeState charge_rate_mph. */
        charge_rate_mph?: (number|null);

        /** ChargeState charge_port_door_open. */
        charge_port_door_open?: (boolean|null);

        /** ChargeState conn_charge_cable. */
        conn_charge_cable?: (CarServer.ChargeState.CableType.$Properties|null);

        /** ChargeState scheduled_charging_start_time. */
        scheduled_charging_start_time?: (number|null);

        /** ChargeState scheduled_charging_pending. */
        scheduled_charging_pending?: (boolean|null);

        /** ChargeState scheduled_departure_time. */
        scheduled_departure_time?: (google.protobuf.Timestamp.$Properties|null);

        /** ChargeState user_charge_enable_request. */
        user_charge_enable_request?: (boolean|null);

        /** ChargeState charge_enable_request. */
        charge_enable_request?: (boolean|null);

        /** ChargeState charger_phases. */
        charger_phases?: (number|null);

        /** ChargeState charge_port_latch. */
        charge_port_latch?: (CarServer.ChargePortLatchState.$Properties|null);

        /** ChargeState charge_port_cold_weather_mode. */
        charge_port_cold_weather_mode?: (boolean|null);

        /** ChargeState charge_current_request. */
        charge_current_request?: (number|null);

        /** ChargeState charge_current_request_max. */
        charge_current_request_max?: (number|null);

        /** ChargeState managed_charging_active. */
        managed_charging_active?: (boolean|null);

        /** ChargeState managed_charging_user_canceled. */
        managed_charging_user_canceled?: (boolean|null);

        /** ChargeState managed_charging_start_time. */
        managed_charging_start_time?: (number|null);

        /** ChargeState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** ChargeState preconditioning_times. */
        preconditioning_times?: (CarServer.PreconditioningTimes.$Properties|null);

        /** ChargeState off_peak_charging_times. */
        off_peak_charging_times?: (CarServer.OffPeakChargingTimes.$Properties|null);

        /** ChargeState off_peak_hours_end_time. */
        off_peak_hours_end_time?: (number|null);

        /** ChargeState scheduled_charging_mode. */
        scheduled_charging_mode?: (CarServer.ChargeState.ScheduledChargingMode|null);

        /** ChargeState charging_amps. */
        charging_amps?: (number|null);

        /** ChargeState scheduled_charging_start_time_minutes. */
        scheduled_charging_start_time_minutes?: (number|null);

        /** ChargeState scheduled_departure_time_minutes. */
        scheduled_departure_time_minutes?: (number|null);

        /** ChargeState preconditioning_enabled. */
        preconditioning_enabled?: (boolean|null);

        /** ChargeState scheduled_charging_start_time_app. */
        scheduled_charging_start_time_app?: (number|null);

        /** ChargeState supercharger_session_trip_planner. */
        supercharger_session_trip_planner?: (boolean|null);

        /** ChargeState charge_port_color. */
        charge_port_color?: (CarServer.ChargeState.ChargePortColor_E|null);

        /** ChargeState charge_rate_mph_float. */
        charge_rate_mph_float?: (number|null);

        /** ChargeState charge_limit_reason. */
        charge_limit_reason?: (CarServer.ChargeState.ChargeLimitReason|null);

        /** ChargeState managed_charging_state. */
        managed_charging_state?: (CarServer.ManagedChargingState.$Properties|null);

        /** ChargeState charge_cable_unlatched. */
        charge_cable_unlatched?: (boolean|null);

        /** ChargeState outlet_state. */
        outlet_state?: (CarServer.ChargeState.OutletState|null);

        /** ChargeState power_feed_state. */
        power_feed_state?: (CarServer.ChargeState.PowerFeedState|null);

        /** ChargeState outlet_soc_limit. */
        outlet_soc_limit?: (number|null);

        /** ChargeState power_feed_soc_limit. */
        power_feed_soc_limit?: (number|null);

        /** ChargeState outlet_time_remaining. */
        outlet_time_remaining?: (number|null);

        /** ChargeState power_feed_time_remaining. */
        power_feed_time_remaining?: (number|null);

        /** ChargeState powershare_feature_allowed. */
        powershare_feature_allowed?: (boolean|null);

        /** ChargeState powershare_feature_enabled. */
        powershare_feature_enabled?: (boolean|null);

        /** ChargeState powershare_request. */
        powershare_request?: (boolean|null);

        /** ChargeState powershare_type. */
        powershare_type?: (CarServer.ChargeState.PowershareType|null);

        /** ChargeState powershare_status. */
        powershare_status?: (CarServer.ChargeState.PowershareStatus|null);

        /** ChargeState powershare_stop_reason. */
        powershare_stop_reason?: (CarServer.ChargeState.PowershareStopReason|null);

        /** ChargeState powershare_instantaneous_load_kw. */
        powershare_instantaneous_load_kw?: (number|null);

        /** ChargeState powershare_vehicle_energy_left_hr. */
        powershare_vehicle_energy_left_hr?: (number|null);

        /** ChargeState powershare_soc_limit. */
        powershare_soc_limit?: (number|null);

        /** ChargeState one_time_soc_limit. */
        one_time_soc_limit?: (number|null);

        /** ChargeState home_location. */
        home_location?: (CarServer.LatLong.$Properties|null);

        /** ChargeState work_location. */
        work_location?: (CarServer.LatLong.$Properties|null);

        /** ChargeState outlet_max_timer_minutes. */
        outlet_max_timer_minutes?: (number|null);

        /** ChargeState optional_charge_limit_soc. */
        optional_charge_limit_soc?: "charge_limit_soc";

        /** ChargeState optional_charge_limit_soc_std. */
        optional_charge_limit_soc_std?: "charge_limit_soc_std";

        /** ChargeState optional_charge_limit_soc_min. */
        optional_charge_limit_soc_min?: "charge_limit_soc_min";

        /** ChargeState optional_charge_limit_soc_max. */
        optional_charge_limit_soc_max?: "charge_limit_soc_max";

        /** ChargeState optional_max_range_charge_counter. */
        optional_max_range_charge_counter?: "max_range_charge_counter";

        /** ChargeState optional_fast_charger_present. */
        optional_fast_charger_present?: "fast_charger_present";

        /** ChargeState optional_battery_range. */
        optional_battery_range?: "battery_range";

        /** ChargeState optional_est_battery_range. */
        optional_est_battery_range?: "est_battery_range";

        /** ChargeState optional_ideal_battery_range. */
        optional_ideal_battery_range?: "ideal_battery_range";

        /** ChargeState optional_battery_level. */
        optional_battery_level?: "battery_level";

        /** ChargeState optional_usable_battery_level. */
        optional_usable_battery_level?: "usable_battery_level";

        /** ChargeState optional_charge_energy_added. */
        optional_charge_energy_added?: "charge_energy_added";

        /** ChargeState optional_charge_miles_added_rated. */
        optional_charge_miles_added_rated?: "charge_miles_added_rated";

        /** ChargeState optional_charge_miles_added_ideal. */
        optional_charge_miles_added_ideal?: "charge_miles_added_ideal";

        /** ChargeState optional_charger_voltage. */
        optional_charger_voltage?: "charger_voltage";

        /** ChargeState optional_charger_pilot_current. */
        optional_charger_pilot_current?: "charger_pilot_current";

        /** ChargeState optional_charger_actual_current. */
        optional_charger_actual_current?: "charger_actual_current";

        /** ChargeState optional_charger_power. */
        optional_charger_power?: "charger_power";

        /** ChargeState optional_minutes_to_full_charge. */
        optional_minutes_to_full_charge?: "minutes_to_full_charge";

        /** ChargeState optional_minutes_to_charge_limit. */
        optional_minutes_to_charge_limit?: "minutes_to_charge_limit";

        /** ChargeState optional_trip_charging. */
        optional_trip_charging?: "trip_charging";

        /** ChargeState optional_charge_rate_mph. */
        optional_charge_rate_mph?: "charge_rate_mph";

        /** ChargeState optional_charge_port_door_open. */
        optional_charge_port_door_open?: "charge_port_door_open";

        /** ChargeState optional_scheduled_charging_start_time. */
        optional_scheduled_charging_start_time?: "scheduled_charging_start_time";

        /** ChargeState optional_scheduled_charging_pending. */
        optional_scheduled_charging_pending?: "scheduled_charging_pending";

        /** ChargeState optional_user_charge_enable_request. */
        optional_user_charge_enable_request?: "user_charge_enable_request";

        /** ChargeState optional_charge_enable_request. */
        optional_charge_enable_request?: "charge_enable_request";

        /** ChargeState optional_charger_phases. */
        optional_charger_phases?: "charger_phases";

        /** ChargeState optional_charge_port_cold_weather_mode. */
        optional_charge_port_cold_weather_mode?: "charge_port_cold_weather_mode";

        /** ChargeState optional_charge_current_request. */
        optional_charge_current_request?: "charge_current_request";

        /** ChargeState optional_charge_current_request_max. */
        optional_charge_current_request_max?: "charge_current_request_max";

        /** ChargeState optional_managed_charging_active. */
        optional_managed_charging_active?: "managed_charging_active";

        /** ChargeState optional_managed_charging_user_canceled. */
        optional_managed_charging_user_canceled?: "managed_charging_user_canceled";

        /** ChargeState optional_managed_charging_start_time. */
        optional_managed_charging_start_time?: "managed_charging_start_time";

        /** ChargeState optional_off_peak_hours_end_time. */
        optional_off_peak_hours_end_time?: "off_peak_hours_end_time";

        /** ChargeState optional_scheduled_charging_mode. */
        optional_scheduled_charging_mode?: "scheduled_charging_mode";

        /** ChargeState optional_charging_amps. */
        optional_charging_amps?: "charging_amps";

        /** ChargeState optional_scheduled_charging_start_time_minutes. */
        optional_scheduled_charging_start_time_minutes?: "scheduled_charging_start_time_minutes";

        /** ChargeState optional_scheduled_departure_time_minutes. */
        optional_scheduled_departure_time_minutes?: "scheduled_departure_time_minutes";

        /** ChargeState optional_preconditioning_enabled. */
        optional_preconditioning_enabled?: "preconditioning_enabled";

        /** ChargeState optional_scheduled_charging_start_time_app. */
        optional_scheduled_charging_start_time_app?: "scheduled_charging_start_time_app";

        /** ChargeState optional_supercharger_session_trip_planner. */
        optional_supercharger_session_trip_planner?: "supercharger_session_trip_planner";

        /** ChargeState optional_charge_port_color. */
        optional_charge_port_color?: "charge_port_color";

        /** ChargeState optional_charge_rate_mph_float. */
        optional_charge_rate_mph_float?: "charge_rate_mph_float";

        /** ChargeState optional_charge_limit_reason. */
        optional_charge_limit_reason?: "charge_limit_reason";

        /** ChargeState optional_charge_cable_unlatched. */
        optional_charge_cable_unlatched?: "charge_cable_unlatched";

        /** ChargeState optional_outlet_state. */
        optional_outlet_state?: "outlet_state";

        /** ChargeState optional_power_feed_state. */
        optional_power_feed_state?: "power_feed_state";

        /** ChargeState option_outlet_soc_limit. */
        option_outlet_soc_limit?: "outlet_soc_limit";

        /** ChargeState option_power_feed_soc_limit. */
        option_power_feed_soc_limit?: "power_feed_soc_limit";

        /** ChargeState option_outlet_time_remaining. */
        option_outlet_time_remaining?: "outlet_time_remaining";

        /** ChargeState option_power_feed_time_remaining. */
        option_power_feed_time_remaining?: "power_feed_time_remaining";

        /** ChargeState optional_powershare_feature_allowed. */
        optional_powershare_feature_allowed?: "powershare_feature_allowed";

        /** ChargeState optional_powershare_feature_enabled. */
        optional_powershare_feature_enabled?: "powershare_feature_enabled";

        /** ChargeState optional_powershare_request. */
        optional_powershare_request?: "powershare_request";

        /** ChargeState optional_powershare_type. */
        optional_powershare_type?: "powershare_type";

        /** ChargeState optional_powershare_status. */
        optional_powershare_status?: "powershare_status";

        /** ChargeState optional_powershare_stop_reason. */
        optional_powershare_stop_reason?: "powershare_stop_reason";

        /** ChargeState optional_powershare_instantaneous_load_kw. */
        optional_powershare_instantaneous_load_kw?: "powershare_instantaneous_load_kw";

        /** ChargeState optional_powershare_vehicle_energy_left_hr. */
        optional_powershare_vehicle_energy_left_hr?: "powershare_vehicle_energy_left_hr";

        /** ChargeState optional_powershare_soc_limit. */
        optional_powershare_soc_limit?: "powershare_soc_limit";

        /** ChargeState optional_one_time_soc_limit. */
        optional_one_time_soc_limit?: "one_time_soc_limit";

        /** ChargeState optional_home_location. */
        optional_home_location?: "home_location";

        /** ChargeState optional_work_location. */
        optional_work_location?: "work_location";

        /** ChargeState optional_outlet_max_timer_minutes. */
        optional_outlet_max_timer_minutes?: "outlet_max_timer_minutes";

        /**
         * Encodes the specified ChargeState message. Does not implicitly {@link CarServer.ChargeState.verify|verify} messages.
         * @param m ChargeState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeState & CarServer.ChargeState.$Shape} ChargeState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeState & CarServer.ChargeState.$Shape;

        /**
         * Gets the type url for ChargeState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeState {

        /** Properties of a ChargeState. */
        interface $Properties {

            /** ChargeState charging_state */
            charging_state?: (CarServer.ChargeState.ChargingState.$Properties|null);

            /** ChargeState fast_charger_type */
            fast_charger_type?: (CarServer.ChargeState.ChargerType.$Properties|null);

            /** ChargeState fast_charger_brand */
            fast_charger_brand?: (CarServer.ChargeState.ChargerBrand.$Properties|null);

            /** ChargeState charge_limit_soc */
            charge_limit_soc?: (number|null);

            /** ChargeState charge_limit_soc_std */
            charge_limit_soc_std?: (number|null);

            /** ChargeState charge_limit_soc_min */
            charge_limit_soc_min?: (number|null);

            /** ChargeState charge_limit_soc_max */
            charge_limit_soc_max?: (number|null);

            /** ChargeState max_range_charge_counter */
            max_range_charge_counter?: (number|null);

            /** ChargeState fast_charger_present */
            fast_charger_present?: (boolean|null);

            /** ChargeState battery_range */
            battery_range?: (number|null);

            /** ChargeState est_battery_range */
            est_battery_range?: (number|null);

            /** ChargeState ideal_battery_range */
            ideal_battery_range?: (number|null);

            /** ChargeState battery_level */
            battery_level?: (number|null);

            /** ChargeState usable_battery_level */
            usable_battery_level?: (number|null);

            /** ChargeState charge_energy_added */
            charge_energy_added?: (number|null);

            /** ChargeState charge_miles_added_rated */
            charge_miles_added_rated?: (number|null);

            /** ChargeState charge_miles_added_ideal */
            charge_miles_added_ideal?: (number|null);

            /** ChargeState charger_voltage */
            charger_voltage?: (number|null);

            /** ChargeState charger_pilot_current */
            charger_pilot_current?: (number|null);

            /** ChargeState charger_actual_current */
            charger_actual_current?: (number|null);

            /** ChargeState charger_power */
            charger_power?: (number|null);

            /** ChargeState minutes_to_full_charge */
            minutes_to_full_charge?: (number|null);

            /** ChargeState minutes_to_charge_limit */
            minutes_to_charge_limit?: (number|null);

            /** ChargeState trip_charging */
            trip_charging?: (boolean|null);

            /** ChargeState charge_rate_mph */
            charge_rate_mph?: (number|null);

            /** ChargeState charge_port_door_open */
            charge_port_door_open?: (boolean|null);

            /** ChargeState conn_charge_cable */
            conn_charge_cable?: (CarServer.ChargeState.CableType.$Properties|null);

            /** ChargeState scheduled_charging_start_time */
            scheduled_charging_start_time?: (number|null);

            /** ChargeState scheduled_charging_pending */
            scheduled_charging_pending?: (boolean|null);

            /** ChargeState scheduled_departure_time */
            scheduled_departure_time?: (google.protobuf.Timestamp.$Properties|null);

            /** ChargeState user_charge_enable_request */
            user_charge_enable_request?: (boolean|null);

            /** ChargeState charge_enable_request */
            charge_enable_request?: (boolean|null);

            /** ChargeState charger_phases */
            charger_phases?: (number|null);

            /** ChargeState charge_port_latch */
            charge_port_latch?: (CarServer.ChargePortLatchState.$Properties|null);

            /** ChargeState charge_port_cold_weather_mode */
            charge_port_cold_weather_mode?: (boolean|null);

            /** ChargeState charge_current_request */
            charge_current_request?: (number|null);

            /** ChargeState charge_current_request_max */
            charge_current_request_max?: (number|null);

            /** ChargeState managed_charging_active */
            managed_charging_active?: (boolean|null);

            /** ChargeState managed_charging_user_canceled */
            managed_charging_user_canceled?: (boolean|null);

            /** ChargeState managed_charging_start_time */
            managed_charging_start_time?: (number|null);

            /** ChargeState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** ChargeState preconditioning_times */
            preconditioning_times?: (CarServer.PreconditioningTimes.$Properties|null);

            /** ChargeState off_peak_charging_times */
            off_peak_charging_times?: (CarServer.OffPeakChargingTimes.$Properties|null);

            /** ChargeState off_peak_hours_end_time */
            off_peak_hours_end_time?: (number|null);

            /** ChargeState scheduled_charging_mode */
            scheduled_charging_mode?: (CarServer.ChargeState.ScheduledChargingMode|null);

            /** ChargeState charging_amps */
            charging_amps?: (number|null);

            /** ChargeState scheduled_charging_start_time_minutes */
            scheduled_charging_start_time_minutes?: (number|null);

            /** ChargeState scheduled_departure_time_minutes */
            scheduled_departure_time_minutes?: (number|null);

            /** ChargeState preconditioning_enabled */
            preconditioning_enabled?: (boolean|null);

            /** ChargeState scheduled_charging_start_time_app */
            scheduled_charging_start_time_app?: (number|null);

            /** ChargeState supercharger_session_trip_planner */
            supercharger_session_trip_planner?: (boolean|null);

            /** ChargeState charge_port_color */
            charge_port_color?: (CarServer.ChargeState.ChargePortColor_E|null);

            /** ChargeState charge_rate_mph_float */
            charge_rate_mph_float?: (number|null);

            /** ChargeState charge_limit_reason */
            charge_limit_reason?: (CarServer.ChargeState.ChargeLimitReason|null);

            /** ChargeState managed_charging_state */
            managed_charging_state?: (CarServer.ManagedChargingState.$Properties|null);

            /** ChargeState charge_cable_unlatched */
            charge_cable_unlatched?: (boolean|null);

            /** ChargeState outlet_state */
            outlet_state?: (CarServer.ChargeState.OutletState|null);

            /** ChargeState power_feed_state */
            power_feed_state?: (CarServer.ChargeState.PowerFeedState|null);

            /** ChargeState outlet_soc_limit */
            outlet_soc_limit?: (number|null);

            /** ChargeState power_feed_soc_limit */
            power_feed_soc_limit?: (number|null);

            /** ChargeState outlet_time_remaining */
            outlet_time_remaining?: (number|null);

            /** ChargeState power_feed_time_remaining */
            power_feed_time_remaining?: (number|null);

            /** ChargeState powershare_feature_allowed */
            powershare_feature_allowed?: (boolean|null);

            /** ChargeState powershare_feature_enabled */
            powershare_feature_enabled?: (boolean|null);

            /** ChargeState powershare_request */
            powershare_request?: (boolean|null);

            /** ChargeState powershare_type */
            powershare_type?: (CarServer.ChargeState.PowershareType|null);

            /** ChargeState powershare_status */
            powershare_status?: (CarServer.ChargeState.PowershareStatus|null);

            /** ChargeState powershare_stop_reason */
            powershare_stop_reason?: (CarServer.ChargeState.PowershareStopReason|null);

            /** ChargeState powershare_instantaneous_load_kw */
            powershare_instantaneous_load_kw?: (number|null);

            /** ChargeState powershare_vehicle_energy_left_hr */
            powershare_vehicle_energy_left_hr?: (number|null);

            /** ChargeState powershare_soc_limit */
            powershare_soc_limit?: (number|null);

            /** ChargeState one_time_soc_limit */
            one_time_soc_limit?: (number|null);

            /** ChargeState home_location */
            home_location?: (CarServer.LatLong.$Properties|null);

            /** ChargeState work_location */
            work_location?: (CarServer.LatLong.$Properties|null);

            /** ChargeState outlet_max_timer_minutes */
            outlet_max_timer_minutes?: (number|null);

            /** ChargeState optional_charge_limit_soc */
            optional_charge_limit_soc?: "charge_limit_soc";

            /** ChargeState optional_charge_limit_soc_std */
            optional_charge_limit_soc_std?: "charge_limit_soc_std";

            /** ChargeState optional_charge_limit_soc_min */
            optional_charge_limit_soc_min?: "charge_limit_soc_min";

            /** ChargeState optional_charge_limit_soc_max */
            optional_charge_limit_soc_max?: "charge_limit_soc_max";

            /** ChargeState optional_max_range_charge_counter */
            optional_max_range_charge_counter?: "max_range_charge_counter";

            /** ChargeState optional_fast_charger_present */
            optional_fast_charger_present?: "fast_charger_present";

            /** ChargeState optional_battery_range */
            optional_battery_range?: "battery_range";

            /** ChargeState optional_est_battery_range */
            optional_est_battery_range?: "est_battery_range";

            /** ChargeState optional_ideal_battery_range */
            optional_ideal_battery_range?: "ideal_battery_range";

            /** ChargeState optional_battery_level */
            optional_battery_level?: "battery_level";

            /** ChargeState optional_usable_battery_level */
            optional_usable_battery_level?: "usable_battery_level";

            /** ChargeState optional_charge_energy_added */
            optional_charge_energy_added?: "charge_energy_added";

            /** ChargeState optional_charge_miles_added_rated */
            optional_charge_miles_added_rated?: "charge_miles_added_rated";

            /** ChargeState optional_charge_miles_added_ideal */
            optional_charge_miles_added_ideal?: "charge_miles_added_ideal";

            /** ChargeState optional_charger_voltage */
            optional_charger_voltage?: "charger_voltage";

            /** ChargeState optional_charger_pilot_current */
            optional_charger_pilot_current?: "charger_pilot_current";

            /** ChargeState optional_charger_actual_current */
            optional_charger_actual_current?: "charger_actual_current";

            /** ChargeState optional_charger_power */
            optional_charger_power?: "charger_power";

            /** ChargeState optional_minutes_to_full_charge */
            optional_minutes_to_full_charge?: "minutes_to_full_charge";

            /** ChargeState optional_minutes_to_charge_limit */
            optional_minutes_to_charge_limit?: "minutes_to_charge_limit";

            /** ChargeState optional_trip_charging */
            optional_trip_charging?: "trip_charging";

            /** ChargeState optional_charge_rate_mph */
            optional_charge_rate_mph?: "charge_rate_mph";

            /** ChargeState optional_charge_port_door_open */
            optional_charge_port_door_open?: "charge_port_door_open";

            /** ChargeState optional_scheduled_charging_start_time */
            optional_scheduled_charging_start_time?: "scheduled_charging_start_time";

            /** ChargeState optional_scheduled_charging_pending */
            optional_scheduled_charging_pending?: "scheduled_charging_pending";

            /** ChargeState optional_user_charge_enable_request */
            optional_user_charge_enable_request?: "user_charge_enable_request";

            /** ChargeState optional_charge_enable_request */
            optional_charge_enable_request?: "charge_enable_request";

            /** ChargeState optional_charger_phases */
            optional_charger_phases?: "charger_phases";

            /** ChargeState optional_charge_port_cold_weather_mode */
            optional_charge_port_cold_weather_mode?: "charge_port_cold_weather_mode";

            /** ChargeState optional_charge_current_request */
            optional_charge_current_request?: "charge_current_request";

            /** ChargeState optional_charge_current_request_max */
            optional_charge_current_request_max?: "charge_current_request_max";

            /** ChargeState optional_managed_charging_active */
            optional_managed_charging_active?: "managed_charging_active";

            /** ChargeState optional_managed_charging_user_canceled */
            optional_managed_charging_user_canceled?: "managed_charging_user_canceled";

            /** ChargeState optional_managed_charging_start_time */
            optional_managed_charging_start_time?: "managed_charging_start_time";

            /** ChargeState optional_off_peak_hours_end_time */
            optional_off_peak_hours_end_time?: "off_peak_hours_end_time";

            /** ChargeState optional_scheduled_charging_mode */
            optional_scheduled_charging_mode?: "scheduled_charging_mode";

            /** ChargeState optional_charging_amps */
            optional_charging_amps?: "charging_amps";

            /** ChargeState optional_scheduled_charging_start_time_minutes */
            optional_scheduled_charging_start_time_minutes?: "scheduled_charging_start_time_minutes";

            /** ChargeState optional_scheduled_departure_time_minutes */
            optional_scheduled_departure_time_minutes?: "scheduled_departure_time_minutes";

            /** ChargeState optional_preconditioning_enabled */
            optional_preconditioning_enabled?: "preconditioning_enabled";

            /** ChargeState optional_scheduled_charging_start_time_app */
            optional_scheduled_charging_start_time_app?: "scheduled_charging_start_time_app";

            /** ChargeState optional_supercharger_session_trip_planner */
            optional_supercharger_session_trip_planner?: "supercharger_session_trip_planner";

            /** ChargeState optional_charge_port_color */
            optional_charge_port_color?: "charge_port_color";

            /** ChargeState optional_charge_rate_mph_float */
            optional_charge_rate_mph_float?: "charge_rate_mph_float";

            /** ChargeState optional_charge_limit_reason */
            optional_charge_limit_reason?: "charge_limit_reason";

            /** ChargeState optional_charge_cable_unlatched */
            optional_charge_cable_unlatched?: "charge_cable_unlatched";

            /** ChargeState optional_outlet_state */
            optional_outlet_state?: "outlet_state";

            /** ChargeState optional_power_feed_state */
            optional_power_feed_state?: "power_feed_state";

            /** ChargeState option_outlet_soc_limit */
            option_outlet_soc_limit?: "outlet_soc_limit";

            /** ChargeState option_power_feed_soc_limit */
            option_power_feed_soc_limit?: "power_feed_soc_limit";

            /** ChargeState option_outlet_time_remaining */
            option_outlet_time_remaining?: "outlet_time_remaining";

            /** ChargeState option_power_feed_time_remaining */
            option_power_feed_time_remaining?: "power_feed_time_remaining";

            /** ChargeState optional_powershare_feature_allowed */
            optional_powershare_feature_allowed?: "powershare_feature_allowed";

            /** ChargeState optional_powershare_feature_enabled */
            optional_powershare_feature_enabled?: "powershare_feature_enabled";

            /** ChargeState optional_powershare_request */
            optional_powershare_request?: "powershare_request";

            /** ChargeState optional_powershare_type */
            optional_powershare_type?: "powershare_type";

            /** ChargeState optional_powershare_status */
            optional_powershare_status?: "powershare_status";

            /** ChargeState optional_powershare_stop_reason */
            optional_powershare_stop_reason?: "powershare_stop_reason";

            /** ChargeState optional_powershare_instantaneous_load_kw */
            optional_powershare_instantaneous_load_kw?: "powershare_instantaneous_load_kw";

            /** ChargeState optional_powershare_vehicle_energy_left_hr */
            optional_powershare_vehicle_energy_left_hr?: "powershare_vehicle_energy_left_hr";

            /** ChargeState optional_powershare_soc_limit */
            optional_powershare_soc_limit?: "powershare_soc_limit";

            /** ChargeState optional_one_time_soc_limit */
            optional_one_time_soc_limit?: "one_time_soc_limit";

            /** ChargeState optional_home_location */
            optional_home_location?: "home_location";

            /** ChargeState optional_work_location */
            optional_work_location?: "work_location";

            /** ChargeState optional_outlet_max_timer_minutes */
            optional_outlet_max_timer_minutes?: "outlet_max_timer_minutes";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ChargeState. */
        type $Shape = {
          charging_state?: CarServer.ChargeState.ChargingState.$Shape|null;
          fast_charger_type?: CarServer.ChargeState.ChargerType.$Shape|null;
          fast_charger_brand?: CarServer.ChargeState.ChargerBrand.$Shape|null;
          charge_limit_soc?: number|null;
          charge_limit_soc_std?: number|null;
          charge_limit_soc_min?: number|null;
          charge_limit_soc_max?: number|null;
          max_range_charge_counter?: number|null;
          fast_charger_present?: boolean|null;
          battery_range?: number|null;
          est_battery_range?: number|null;
          ideal_battery_range?: number|null;
          battery_level?: number|null;
          usable_battery_level?: number|null;
          charge_energy_added?: number|null;
          charge_miles_added_rated?: number|null;
          charge_miles_added_ideal?: number|null;
          charger_voltage?: number|null;
          charger_pilot_current?: number|null;
          charger_actual_current?: number|null;
          charger_power?: number|null;
          minutes_to_full_charge?: number|null;
          minutes_to_charge_limit?: number|null;
          trip_charging?: boolean|null;
          charge_rate_mph?: number|null;
          charge_port_door_open?: boolean|null;
          conn_charge_cable?: CarServer.ChargeState.CableType.$Shape|null;
          scheduled_charging_start_time?: number|null;
          scheduled_charging_pending?: boolean|null;
          scheduled_departure_time?: google.protobuf.Timestamp.$Shape|null;
          user_charge_enable_request?: boolean|null;
          charge_enable_request?: boolean|null;
          charger_phases?: number|null;
          charge_port_latch?: CarServer.ChargePortLatchState.$Shape|null;
          charge_port_cold_weather_mode?: boolean|null;
          charge_current_request?: number|null;
          charge_current_request_max?: number|null;
          managed_charging_active?: boolean|null;
          managed_charging_user_canceled?: boolean|null;
          managed_charging_start_time?: number|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          preconditioning_times?: CarServer.PreconditioningTimes.$Shape|null;
          off_peak_charging_times?: CarServer.OffPeakChargingTimes.$Shape|null;
          off_peak_hours_end_time?: number|null;
          scheduled_charging_mode?: CarServer.ChargeState.ScheduledChargingMode|null;
          charging_amps?: number|null;
          scheduled_charging_start_time_minutes?: number|null;
          scheduled_departure_time_minutes?: number|null;
          preconditioning_enabled?: boolean|null;
          scheduled_charging_start_time_app?: number|null;
          supercharger_session_trip_planner?: boolean|null;
          charge_port_color?: CarServer.ChargeState.ChargePortColor_E|null;
          charge_rate_mph_float?: number|null;
          charge_limit_reason?: CarServer.ChargeState.ChargeLimitReason|null;
          managed_charging_state?: CarServer.ManagedChargingState.$Shape|null;
          charge_cable_unlatched?: boolean|null;
          outlet_state?: CarServer.ChargeState.OutletState|null;
          power_feed_state?: CarServer.ChargeState.PowerFeedState|null;
          outlet_soc_limit?: number|null;
          power_feed_soc_limit?: number|null;
          outlet_time_remaining?: number|null;
          power_feed_time_remaining?: number|null;
          powershare_feature_allowed?: boolean|null;
          powershare_feature_enabled?: boolean|null;
          powershare_request?: boolean|null;
          powershare_type?: CarServer.ChargeState.PowershareType|null;
          powershare_status?: CarServer.ChargeState.PowershareStatus|null;
          powershare_stop_reason?: CarServer.ChargeState.PowershareStopReason|null;
          powershare_instantaneous_load_kw?: number|null;
          powershare_vehicle_energy_left_hr?: number|null;
          powershare_soc_limit?: number|null;
          one_time_soc_limit?: number|null;
          home_location?: CarServer.LatLong.$Shape|null;
          work_location?: CarServer.LatLong.$Shape|null;
          outlet_max_timer_minutes?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_charge_limit_soc?: undefined; charge_limit_soc?: null }|{ optional_charge_limit_soc?: "charge_limit_soc"; charge_limit_soc: number })
        ) & (
          ({ optional_charge_limit_soc_std?: undefined; charge_limit_soc_std?: null }|{ optional_charge_limit_soc_std?: "charge_limit_soc_std"; charge_limit_soc_std: number })
        ) & (
          ({ optional_charge_limit_soc_min?: undefined; charge_limit_soc_min?: null }|{ optional_charge_limit_soc_min?: "charge_limit_soc_min"; charge_limit_soc_min: number })
        ) & (
          ({ optional_charge_limit_soc_max?: undefined; charge_limit_soc_max?: null }|{ optional_charge_limit_soc_max?: "charge_limit_soc_max"; charge_limit_soc_max: number })
        ) & (
          ({ optional_max_range_charge_counter?: undefined; max_range_charge_counter?: null }|{ optional_max_range_charge_counter?: "max_range_charge_counter"; max_range_charge_counter: number })
        ) & (
          ({ optional_fast_charger_present?: undefined; fast_charger_present?: null }|{ optional_fast_charger_present?: "fast_charger_present"; fast_charger_present: boolean })
        ) & (
          ({ optional_battery_range?: undefined; battery_range?: null }|{ optional_battery_range?: "battery_range"; battery_range: number })
        ) & (
          ({ optional_est_battery_range?: undefined; est_battery_range?: null }|{ optional_est_battery_range?: "est_battery_range"; est_battery_range: number })
        ) & (
          ({ optional_ideal_battery_range?: undefined; ideal_battery_range?: null }|{ optional_ideal_battery_range?: "ideal_battery_range"; ideal_battery_range: number })
        ) & (
          ({ optional_battery_level?: undefined; battery_level?: null }|{ optional_battery_level?: "battery_level"; battery_level: number })
        ) & (
          ({ optional_usable_battery_level?: undefined; usable_battery_level?: null }|{ optional_usable_battery_level?: "usable_battery_level"; usable_battery_level: number })
        ) & (
          ({ optional_charge_energy_added?: undefined; charge_energy_added?: null }|{ optional_charge_energy_added?: "charge_energy_added"; charge_energy_added: number })
        ) & (
          ({ optional_charge_miles_added_rated?: undefined; charge_miles_added_rated?: null }|{ optional_charge_miles_added_rated?: "charge_miles_added_rated"; charge_miles_added_rated: number })
        ) & (
          ({ optional_charge_miles_added_ideal?: undefined; charge_miles_added_ideal?: null }|{ optional_charge_miles_added_ideal?: "charge_miles_added_ideal"; charge_miles_added_ideal: number })
        ) & (
          ({ optional_charger_voltage?: undefined; charger_voltage?: null }|{ optional_charger_voltage?: "charger_voltage"; charger_voltage: number })
        ) & (
          ({ optional_charger_pilot_current?: undefined; charger_pilot_current?: null }|{ optional_charger_pilot_current?: "charger_pilot_current"; charger_pilot_current: number })
        ) & (
          ({ optional_charger_actual_current?: undefined; charger_actual_current?: null }|{ optional_charger_actual_current?: "charger_actual_current"; charger_actual_current: number })
        ) & (
          ({ optional_charger_power?: undefined; charger_power?: null }|{ optional_charger_power?: "charger_power"; charger_power: number })
        ) & (
          ({ optional_minutes_to_full_charge?: undefined; minutes_to_full_charge?: null }|{ optional_minutes_to_full_charge?: "minutes_to_full_charge"; minutes_to_full_charge: number })
        ) & (
          ({ optional_minutes_to_charge_limit?: undefined; minutes_to_charge_limit?: null }|{ optional_minutes_to_charge_limit?: "minutes_to_charge_limit"; minutes_to_charge_limit: number })
        ) & (
          ({ optional_trip_charging?: undefined; trip_charging?: null }|{ optional_trip_charging?: "trip_charging"; trip_charging: boolean })
        ) & (
          ({ optional_charge_rate_mph?: undefined; charge_rate_mph?: null }|{ optional_charge_rate_mph?: "charge_rate_mph"; charge_rate_mph: number })
        ) & (
          ({ optional_charge_port_door_open?: undefined; charge_port_door_open?: null }|{ optional_charge_port_door_open?: "charge_port_door_open"; charge_port_door_open: boolean })
        ) & (
          ({ optional_scheduled_charging_start_time?: undefined; scheduled_charging_start_time?: null }|{ optional_scheduled_charging_start_time?: "scheduled_charging_start_time"; scheduled_charging_start_time: number })
        ) & (
          ({ optional_scheduled_charging_pending?: undefined; scheduled_charging_pending?: null }|{ optional_scheduled_charging_pending?: "scheduled_charging_pending"; scheduled_charging_pending: boolean })
        ) & (
          ({ optional_user_charge_enable_request?: undefined; user_charge_enable_request?: null }|{ optional_user_charge_enable_request?: "user_charge_enable_request"; user_charge_enable_request: boolean })
        ) & (
          ({ optional_charge_enable_request?: undefined; charge_enable_request?: null }|{ optional_charge_enable_request?: "charge_enable_request"; charge_enable_request: boolean })
        ) & (
          ({ optional_charger_phases?: undefined; charger_phases?: null }|{ optional_charger_phases?: "charger_phases"; charger_phases: number })
        ) & (
          ({ optional_charge_port_cold_weather_mode?: undefined; charge_port_cold_weather_mode?: null }|{ optional_charge_port_cold_weather_mode?: "charge_port_cold_weather_mode"; charge_port_cold_weather_mode: boolean })
        ) & (
          ({ optional_charge_current_request?: undefined; charge_current_request?: null }|{ optional_charge_current_request?: "charge_current_request"; charge_current_request: number })
        ) & (
          ({ optional_charge_current_request_max?: undefined; charge_current_request_max?: null }|{ optional_charge_current_request_max?: "charge_current_request_max"; charge_current_request_max: number })
        ) & (
          ({ optional_managed_charging_active?: undefined; managed_charging_active?: null }|{ optional_managed_charging_active?: "managed_charging_active"; managed_charging_active: boolean })
        ) & (
          ({ optional_managed_charging_user_canceled?: undefined; managed_charging_user_canceled?: null }|{ optional_managed_charging_user_canceled?: "managed_charging_user_canceled"; managed_charging_user_canceled: boolean })
        ) & (
          ({ optional_managed_charging_start_time?: undefined; managed_charging_start_time?: null }|{ optional_managed_charging_start_time?: "managed_charging_start_time"; managed_charging_start_time: number })
        ) & (
          ({ optional_off_peak_hours_end_time?: undefined; off_peak_hours_end_time?: null }|{ optional_off_peak_hours_end_time?: "off_peak_hours_end_time"; off_peak_hours_end_time: number })
        ) & (
          ({ optional_scheduled_charging_mode?: undefined; scheduled_charging_mode?: null }|{ optional_scheduled_charging_mode?: "scheduled_charging_mode"; scheduled_charging_mode: CarServer.ChargeState.ScheduledChargingMode })
        ) & (
          ({ optional_charging_amps?: undefined; charging_amps?: null }|{ optional_charging_amps?: "charging_amps"; charging_amps: number })
        ) & (
          ({ optional_scheduled_charging_start_time_minutes?: undefined; scheduled_charging_start_time_minutes?: null }|{ optional_scheduled_charging_start_time_minutes?: "scheduled_charging_start_time_minutes"; scheduled_charging_start_time_minutes: number })
        ) & (
          ({ optional_scheduled_departure_time_minutes?: undefined; scheduled_departure_time_minutes?: null }|{ optional_scheduled_departure_time_minutes?: "scheduled_departure_time_minutes"; scheduled_departure_time_minutes: number })
        ) & (
          ({ optional_preconditioning_enabled?: undefined; preconditioning_enabled?: null }|{ optional_preconditioning_enabled?: "preconditioning_enabled"; preconditioning_enabled: boolean })
        ) & (
          ({ optional_scheduled_charging_start_time_app?: undefined; scheduled_charging_start_time_app?: null }|{ optional_scheduled_charging_start_time_app?: "scheduled_charging_start_time_app"; scheduled_charging_start_time_app: number })
        ) & (
          ({ optional_supercharger_session_trip_planner?: undefined; supercharger_session_trip_planner?: null }|{ optional_supercharger_session_trip_planner?: "supercharger_session_trip_planner"; supercharger_session_trip_planner: boolean })
        ) & (
          ({ optional_charge_port_color?: undefined; charge_port_color?: null }|{ optional_charge_port_color?: "charge_port_color"; charge_port_color: CarServer.ChargeState.ChargePortColor_E })
        ) & (
          ({ optional_charge_rate_mph_float?: undefined; charge_rate_mph_float?: null }|{ optional_charge_rate_mph_float?: "charge_rate_mph_float"; charge_rate_mph_float: number })
        ) & (
          ({ optional_charge_limit_reason?: undefined; charge_limit_reason?: null }|{ optional_charge_limit_reason?: "charge_limit_reason"; charge_limit_reason: CarServer.ChargeState.ChargeLimitReason })
        ) & (
          ({ optional_charge_cable_unlatched?: undefined; charge_cable_unlatched?: null }|{ optional_charge_cable_unlatched?: "charge_cable_unlatched"; charge_cable_unlatched: boolean })
        ) & (
          ({ optional_outlet_state?: undefined; outlet_state?: null }|{ optional_outlet_state?: "outlet_state"; outlet_state: CarServer.ChargeState.OutletState })
        ) & (
          ({ optional_power_feed_state?: undefined; power_feed_state?: null }|{ optional_power_feed_state?: "power_feed_state"; power_feed_state: CarServer.ChargeState.PowerFeedState })
        ) & (
          ({ option_outlet_soc_limit?: undefined; outlet_soc_limit?: null }|{ option_outlet_soc_limit?: "outlet_soc_limit"; outlet_soc_limit: number })
        ) & (
          ({ option_power_feed_soc_limit?: undefined; power_feed_soc_limit?: null }|{ option_power_feed_soc_limit?: "power_feed_soc_limit"; power_feed_soc_limit: number })
        ) & (
          ({ option_outlet_time_remaining?: undefined; outlet_time_remaining?: null }|{ option_outlet_time_remaining?: "outlet_time_remaining"; outlet_time_remaining: number })
        ) & (
          ({ option_power_feed_time_remaining?: undefined; power_feed_time_remaining?: null }|{ option_power_feed_time_remaining?: "power_feed_time_remaining"; power_feed_time_remaining: number })
        ) & (
          ({ optional_powershare_feature_allowed?: undefined; powershare_feature_allowed?: null }|{ optional_powershare_feature_allowed?: "powershare_feature_allowed"; powershare_feature_allowed: boolean })
        ) & (
          ({ optional_powershare_feature_enabled?: undefined; powershare_feature_enabled?: null }|{ optional_powershare_feature_enabled?: "powershare_feature_enabled"; powershare_feature_enabled: boolean })
        ) & (
          ({ optional_powershare_request?: undefined; powershare_request?: null }|{ optional_powershare_request?: "powershare_request"; powershare_request: boolean })
        ) & (
          ({ optional_powershare_type?: undefined; powershare_type?: null }|{ optional_powershare_type?: "powershare_type"; powershare_type: CarServer.ChargeState.PowershareType })
        ) & (
          ({ optional_powershare_status?: undefined; powershare_status?: null }|{ optional_powershare_status?: "powershare_status"; powershare_status: CarServer.ChargeState.PowershareStatus })
        ) & (
          ({ optional_powershare_stop_reason?: undefined; powershare_stop_reason?: null }|{ optional_powershare_stop_reason?: "powershare_stop_reason"; powershare_stop_reason: CarServer.ChargeState.PowershareStopReason })
        ) & (
          ({ optional_powershare_instantaneous_load_kw?: undefined; powershare_instantaneous_load_kw?: null }|{ optional_powershare_instantaneous_load_kw?: "powershare_instantaneous_load_kw"; powershare_instantaneous_load_kw: number })
        ) & (
          ({ optional_powershare_vehicle_energy_left_hr?: undefined; powershare_vehicle_energy_left_hr?: null }|{ optional_powershare_vehicle_energy_left_hr?: "powershare_vehicle_energy_left_hr"; powershare_vehicle_energy_left_hr: number })
        ) & (
          ({ optional_powershare_soc_limit?: undefined; powershare_soc_limit?: null }|{ optional_powershare_soc_limit?: "powershare_soc_limit"; powershare_soc_limit: number })
        ) & (
          ({ optional_one_time_soc_limit?: undefined; one_time_soc_limit?: null }|{ optional_one_time_soc_limit?: "one_time_soc_limit"; one_time_soc_limit: number })
        ) & (
          ({ optional_home_location?: undefined; home_location?: null }|{ optional_home_location?: "home_location"; home_location: CarServer.LatLong.$Shape })
        ) & (
          ({ optional_work_location?: undefined; work_location?: null }|{ optional_work_location?: "work_location"; work_location: CarServer.LatLong.$Shape })
        ) & (
          ({ optional_outlet_max_timer_minutes?: undefined; outlet_max_timer_minutes?: null }|{ optional_outlet_max_timer_minutes?: "outlet_max_timer_minutes"; outlet_max_timer_minutes: number })
        );

        /**
         * Properties of a CableType.
         * @deprecated Use CarServer.ChargeState.CableType.$Properties instead.
         */
        interface ICableType extends CarServer.ChargeState.CableType.$Properties {
        }

        /** Represents a CableType. */
        class CableType {

            /**
             * Constructs a new CableType.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ChargeState.CableType.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CableType SNA. */
            SNA?: (CarServer.Void.$Properties|null);

            /** CableType IEC. */
            IEC?: (CarServer.Void.$Properties|null);

            /** CableType SAE. */
            SAE?: (CarServer.Void.$Properties|null);

            /** CableType GB_AC. */
            GB_AC?: (CarServer.Void.$Properties|null);

            /** CableType GB_DC. */
            GB_DC?: (CarServer.Void.$Properties|null);

            /** CableType type. */
            type?: ("SNA"|"IEC"|"SAE"|"GB_AC"|"GB_DC");

            /**
             * Encodes the specified CableType message. Does not implicitly {@link CarServer.ChargeState.CableType.verify|verify} messages.
             * @param m CableType message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ChargeState.CableType.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CableType message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ChargeState.CableType & CarServer.ChargeState.CableType.$Shape} CableType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeState.CableType & CarServer.ChargeState.CableType.$Shape;

            /**
             * Gets the type url for CableType
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CableType {

            /** Properties of a CableType. */
            interface $Properties {

                /** CableType SNA */
                SNA?: (CarServer.Void.$Properties|null);

                /** CableType IEC */
                IEC?: (CarServer.Void.$Properties|null);

                /** CableType SAE */
                SAE?: (CarServer.Void.$Properties|null);

                /** CableType GB_AC */
                GB_AC?: (CarServer.Void.$Properties|null);

                /** CableType GB_DC */
                GB_DC?: (CarServer.Void.$Properties|null);

                /** CableType type */
                type?: ("SNA"|"IEC"|"SAE"|"GB_AC"|"GB_DC");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a CableType. */
            type $Shape = {
              SNA?: CarServer.Void.$Shape|null;
              IEC?: CarServer.Void.$Shape|null;
              SAE?: CarServer.Void.$Shape|null;
              GB_AC?: CarServer.Void.$Shape|null;
              GB_DC?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; SNA?: null; IEC?: null; SAE?: null; GB_AC?: null; GB_DC?: null }|{ type?: "SNA"; SNA: CarServer.Void.$Shape; IEC?: null; SAE?: null; GB_AC?: null; GB_DC?: null }|{ type?: "IEC"; SNA?: null; IEC: CarServer.Void.$Shape; SAE?: null; GB_AC?: null; GB_DC?: null }|{ type?: "SAE"; SNA?: null; IEC?: null; SAE: CarServer.Void.$Shape; GB_AC?: null; GB_DC?: null }|{ type?: "GB_AC"; SNA?: null; IEC?: null; SAE?: null; GB_AC: CarServer.Void.$Shape; GB_DC?: null }|{ type?: "GB_DC"; SNA?: null; IEC?: null; SAE?: null; GB_AC?: null; GB_DC: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a ChargerType.
         * @deprecated Use CarServer.ChargeState.ChargerType.$Properties instead.
         */
        interface IChargerType extends CarServer.ChargeState.ChargerType.$Properties {
        }

        /** Represents a ChargerType. */
        class ChargerType {

            /**
             * Constructs a new ChargerType.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ChargeState.ChargerType.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ChargerType SNA. */
            SNA?: (CarServer.Void.$Properties|null);

            /** ChargerType Supercharger. */
            Supercharger?: (CarServer.Void.$Properties|null);

            /** ChargerType Chademo. */
            Chademo?: (CarServer.Void.$Properties|null);

            /** ChargerType Gb. */
            Gb?: (CarServer.Void.$Properties|null);

            /** ChargerType ACSingleWireCAN. */
            ACSingleWireCAN?: (CarServer.Void.$Properties|null);

            /** ChargerType Combo. */
            Combo?: (CarServer.Void.$Properties|null);

            /** ChargerType MCSingleWireCAN. */
            MCSingleWireCAN?: (CarServer.Void.$Properties|null);

            /** ChargerType Other. */
            Other?: (CarServer.Void.$Properties|null);

            /** ChargerType Tesla. */
            Tesla?: (CarServer.Void.$Properties|null);

            /** ChargerType type. */
            type?: ("SNA"|"Supercharger"|"Chademo"|"Gb"|"ACSingleWireCAN"|"Combo"|"MCSingleWireCAN"|"Other"|"Tesla");

            /**
             * Encodes the specified ChargerType message. Does not implicitly {@link CarServer.ChargeState.ChargerType.verify|verify} messages.
             * @param m ChargerType message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ChargeState.ChargerType.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChargerType message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ChargeState.ChargerType & CarServer.ChargeState.ChargerType.$Shape} ChargerType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeState.ChargerType & CarServer.ChargeState.ChargerType.$Shape;

            /**
             * Gets the type url for ChargerType
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ChargerType {

            /** Properties of a ChargerType. */
            interface $Properties {

                /** ChargerType SNA */
                SNA?: (CarServer.Void.$Properties|null);

                /** ChargerType Supercharger */
                Supercharger?: (CarServer.Void.$Properties|null);

                /** ChargerType Chademo */
                Chademo?: (CarServer.Void.$Properties|null);

                /** ChargerType Gb */
                Gb?: (CarServer.Void.$Properties|null);

                /** ChargerType ACSingleWireCAN */
                ACSingleWireCAN?: (CarServer.Void.$Properties|null);

                /** ChargerType Combo */
                Combo?: (CarServer.Void.$Properties|null);

                /** ChargerType MCSingleWireCAN */
                MCSingleWireCAN?: (CarServer.Void.$Properties|null);

                /** ChargerType Other */
                Other?: (CarServer.Void.$Properties|null);

                /** ChargerType Tesla */
                Tesla?: (CarServer.Void.$Properties|null);

                /** ChargerType type */
                type?: ("SNA"|"Supercharger"|"Chademo"|"Gb"|"ACSingleWireCAN"|"Combo"|"MCSingleWireCAN"|"Other"|"Tesla");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a ChargerType. */
            type $Shape = {
              SNA?: CarServer.Void.$Shape|null;
              Supercharger?: CarServer.Void.$Shape|null;
              Chademo?: CarServer.Void.$Shape|null;
              Gb?: CarServer.Void.$Shape|null;
              ACSingleWireCAN?: CarServer.Void.$Shape|null;
              Combo?: CarServer.Void.$Shape|null;
              MCSingleWireCAN?: CarServer.Void.$Shape|null;
              Other?: CarServer.Void.$Shape|null;
              Tesla?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; SNA?: null; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "SNA"; SNA: CarServer.Void.$Shape; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "Supercharger"; SNA?: null; Supercharger: CarServer.Void.$Shape; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "Chademo"; SNA?: null; Supercharger?: null; Chademo: CarServer.Void.$Shape; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "Gb"; SNA?: null; Supercharger?: null; Chademo?: null; Gb: CarServer.Void.$Shape; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "ACSingleWireCAN"; SNA?: null; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN: CarServer.Void.$Shape; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "Combo"; SNA?: null; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo: CarServer.Void.$Shape; MCSingleWireCAN?: null; Other?: null; Tesla?: null }|{ type?: "MCSingleWireCAN"; SNA?: null; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN: CarServer.Void.$Shape; Other?: null; Tesla?: null }|{ type?: "Other"; SNA?: null; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other: CarServer.Void.$Shape; Tesla?: null }|{ type?: "Tesla"; SNA?: null; Supercharger?: null; Chademo?: null; Gb?: null; ACSingleWireCAN?: null; Combo?: null; MCSingleWireCAN?: null; Other?: null; Tesla: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a ChargingState.
         * @deprecated Use CarServer.ChargeState.ChargingState.$Properties instead.
         */
        interface IChargingState extends CarServer.ChargeState.ChargingState.$Properties {
        }

        /** Represents a ChargingState. */
        class ChargingState {

            /**
             * Constructs a new ChargingState.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ChargeState.ChargingState.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ChargingState Unknown. */
            Unknown?: (CarServer.Void.$Properties|null);

            /** ChargingState Disconnected. */
            Disconnected?: (CarServer.Void.$Properties|null);

            /** ChargingState NoPower. */
            NoPower?: (CarServer.Void.$Properties|null);

            /** ChargingState Starting. */
            Starting?: (CarServer.Void.$Properties|null);

            /** ChargingState Charging. */
            Charging?: (CarServer.Void.$Properties|null);

            /** ChargingState Complete. */
            Complete?: (CarServer.Void.$Properties|null);

            /** ChargingState Stopped. */
            Stopped?: (CarServer.Void.$Properties|null);

            /** ChargingState Calibrating. */
            Calibrating?: (CarServer.Void.$Properties|null);

            /** ChargingState type. */
            type?: ("Unknown"|"Disconnected"|"NoPower"|"Starting"|"Charging"|"Complete"|"Stopped"|"Calibrating");

            /**
             * Encodes the specified ChargingState message. Does not implicitly {@link CarServer.ChargeState.ChargingState.verify|verify} messages.
             * @param m ChargingState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ChargeState.ChargingState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChargingState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ChargeState.ChargingState & CarServer.ChargeState.ChargingState.$Shape} ChargingState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeState.ChargingState & CarServer.ChargeState.ChargingState.$Shape;

            /**
             * Gets the type url for ChargingState
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ChargingState {

            /** Properties of a ChargingState. */
            interface $Properties {

                /** ChargingState Unknown */
                Unknown?: (CarServer.Void.$Properties|null);

                /** ChargingState Disconnected */
                Disconnected?: (CarServer.Void.$Properties|null);

                /** ChargingState NoPower */
                NoPower?: (CarServer.Void.$Properties|null);

                /** ChargingState Starting */
                Starting?: (CarServer.Void.$Properties|null);

                /** ChargingState Charging */
                Charging?: (CarServer.Void.$Properties|null);

                /** ChargingState Complete */
                Complete?: (CarServer.Void.$Properties|null);

                /** ChargingState Stopped */
                Stopped?: (CarServer.Void.$Properties|null);

                /** ChargingState Calibrating */
                Calibrating?: (CarServer.Void.$Properties|null);

                /** ChargingState type */
                type?: ("Unknown"|"Disconnected"|"NoPower"|"Starting"|"Charging"|"Complete"|"Stopped"|"Calibrating");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a ChargingState. */
            type $Shape = {
              Unknown?: CarServer.Void.$Shape|null;
              Disconnected?: CarServer.Void.$Shape|null;
              NoPower?: CarServer.Void.$Shape|null;
              Starting?: CarServer.Void.$Shape|null;
              Charging?: CarServer.Void.$Shape|null;
              Complete?: CarServer.Void.$Shape|null;
              Stopped?: CarServer.Void.$Shape|null;
              Calibrating?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Unknown?: null; Disconnected?: null; NoPower?: null; Starting?: null; Charging?: null; Complete?: null; Stopped?: null; Calibrating?: null }|{ type?: "Unknown"; Unknown: CarServer.Void.$Shape; Disconnected?: null; NoPower?: null; Starting?: null; Charging?: null; Complete?: null; Stopped?: null; Calibrating?: null }|{ type?: "Disconnected"; Unknown?: null; Disconnected: CarServer.Void.$Shape; NoPower?: null; Starting?: null; Charging?: null; Complete?: null; Stopped?: null; Calibrating?: null }|{ type?: "NoPower"; Unknown?: null; Disconnected?: null; NoPower: CarServer.Void.$Shape; Starting?: null; Charging?: null; Complete?: null; Stopped?: null; Calibrating?: null }|{ type?: "Starting"; Unknown?: null; Disconnected?: null; NoPower?: null; Starting: CarServer.Void.$Shape; Charging?: null; Complete?: null; Stopped?: null; Calibrating?: null }|{ type?: "Charging"; Unknown?: null; Disconnected?: null; NoPower?: null; Starting?: null; Charging: CarServer.Void.$Shape; Complete?: null; Stopped?: null; Calibrating?: null }|{ type?: "Complete"; Unknown?: null; Disconnected?: null; NoPower?: null; Starting?: null; Charging?: null; Complete: CarServer.Void.$Shape; Stopped?: null; Calibrating?: null }|{ type?: "Stopped"; Unknown?: null; Disconnected?: null; NoPower?: null; Starting?: null; Charging?: null; Complete?: null; Stopped: CarServer.Void.$Shape; Calibrating?: null }|{ type?: "Calibrating"; Unknown?: null; Disconnected?: null; NoPower?: null; Starting?: null; Charging?: null; Complete?: null; Stopped?: null; Calibrating: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a ChargerBrand.
         * @deprecated Use CarServer.ChargeState.ChargerBrand.$Properties instead.
         */
        interface IChargerBrand extends CarServer.ChargeState.ChargerBrand.$Properties {
        }

        /** Represents a ChargerBrand. */
        class ChargerBrand {

            /**
             * Constructs a new ChargerBrand.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ChargeState.ChargerBrand.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ChargerBrand Tesla. */
            Tesla?: (CarServer.Void.$Properties|null);

            /** ChargerBrand SNA. */
            SNA?: (CarServer.Void.$Properties|null);

            /** ChargerBrand type. */
            type?: ("Tesla"|"SNA");

            /**
             * Encodes the specified ChargerBrand message. Does not implicitly {@link CarServer.ChargeState.ChargerBrand.verify|verify} messages.
             * @param m ChargerBrand message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ChargeState.ChargerBrand.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChargerBrand message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ChargeState.ChargerBrand & CarServer.ChargeState.ChargerBrand.$Shape} ChargerBrand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeState.ChargerBrand & CarServer.ChargeState.ChargerBrand.$Shape;

            /**
             * Gets the type url for ChargerBrand
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ChargerBrand {

            /** Properties of a ChargerBrand. */
            interface $Properties {

                /** ChargerBrand Tesla */
                Tesla?: (CarServer.Void.$Properties|null);

                /** ChargerBrand SNA */
                SNA?: (CarServer.Void.$Properties|null);

                /** ChargerBrand type */
                type?: ("Tesla"|"SNA");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a ChargerBrand. */
            type $Shape = {
              Tesla?: CarServer.Void.$Shape|null;
              SNA?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Tesla?: null; SNA?: null }|{ type?: "Tesla"; Tesla: CarServer.Void.$Shape; SNA?: null }|{ type?: "SNA"; Tesla?: null; SNA: CarServer.Void.$Shape })
            );
        }

        /** ScheduledChargingMode enum. */
        enum ScheduledChargingMode {

            /** ScheduledChargingModeOff value */
            ScheduledChargingModeOff = 0,

            /** ScheduledChargingModeStartAt value */
            ScheduledChargingModeStartAt = 1,

            /** ScheduledChargingModeDepartBy value */
            ScheduledChargingModeDepartBy = 2
        }

        /** ChargePortColor_E enum. */
        enum ChargePortColor_E {

            /** ChargePortColorOff value */
            ChargePortColorOff = 0,

            /** ChargePortColorRed value */
            ChargePortColorRed = 1,

            /** ChargePortColorGreen value */
            ChargePortColorGreen = 2,

            /** ChargePortColorBlue value */
            ChargePortColorBlue = 3,

            /** ChargePortColorWhite value */
            ChargePortColorWhite = 4,

            /** ChargePortColorFlashingGreen value */
            ChargePortColorFlashingGreen = 5,

            /** ChargePortColorFlashingAmber value */
            ChargePortColorFlashingAmber = 6,

            /** ChargePortColorAmber value */
            ChargePortColorAmber = 7,

            /** ChargePortColorRave value */
            ChargePortColorRave = 8,

            /** ChargePortColorDebug value */
            ChargePortColorDebug = 9,

            /** ChargePortColorFlashingBlue value */
            ChargePortColorFlashingBlue = 10
        }

        /** ChargeLimitReason enum. */
        enum ChargeLimitReason {

            /** ChargeLimitReasonUnknown value */
            ChargeLimitReasonUnknown = 0,

            /** ChargeLimitReasonNone value */
            ChargeLimitReasonNone = 1,

            /** ChargeLimitReasonEvse value */
            ChargeLimitReasonEvse = 2,

            /** ChargeLimitReasonBattTempLow value */
            ChargeLimitReasonBattTempLow = 3,

            /** ChargeLimitReasonHighSoc value */
            ChargeLimitReasonHighSoc = 4,

            /** ChargeLimitReasonCabin value */
            ChargeLimitReasonCabin = 5
        }

        /** OutletState enum. */
        enum OutletState {

            /** OutletStateOff value */
            OutletStateOff = 0,

            /** OutletStateCabinAndBed value */
            OutletStateCabinAndBed = 1,

            /** OutletStateCabin value */
            OutletStateCabin = 2
        }

        /** PowerFeedState enum. */
        enum PowerFeedState {

            /** PowerFeedStateOff value */
            PowerFeedStateOff = 0,

            /** PowerFeedStateCabinAndBed value */
            PowerFeedStateCabinAndBed = 1,

            /** PowerFeedStateCabin value */
            PowerFeedStateCabin = 2
        }

        /** PowershareStatus enum. */
        enum PowershareStatus {

            /** PowershareStatusInactive value */
            PowershareStatusInactive = 0,

            /** PowershareStatusInit value */
            PowershareStatusInit = 1,

            /** PowershareStatusActive value */
            PowershareStatusActive = 2,

            /** PowershareStatusStopped value */
            PowershareStatusStopped = 3,

            /** PowershareStatusHandshaking value */
            PowershareStatusHandshaking = 4,

            /** PowershareStatusActiveReconnectingSoon value */
            PowershareStatusActiveReconnectingSoon = 5
        }

        /** PowershareType enum. */
        enum PowershareType {

            /** PowershareTypeNone value */
            PowershareTypeNone = 0,

            /** PowershareTypeLoad value */
            PowershareTypeLoad = 1,

            /** PowershareTypeHome value */
            PowershareTypeHome = 2
        }

        /** PowershareStopReason enum. */
        enum PowershareStopReason {

            /** PowershareStopReasonNone value */
            PowershareStopReasonNone = 0,

            /** PowershareStopReasonSOCTooLow value */
            PowershareStopReasonSOCTooLow = 1,

            /** PowershareStopReasonRetry value */
            PowershareStopReasonRetry = 2,

            /** PowershareStopReasonFault value */
            PowershareStopReasonFault = 3,

            /** PowershareStopReasonUser value */
            PowershareStopReasonUser = 4,

            /** PowershareStopReasonReconnecting value */
            PowershareStopReasonReconnecting = 5,

            /** PowershareStopReasonAuthentication value */
            PowershareStopReasonAuthentication = 6
        }
    }

    /**
     * Properties of a ManagedChargingState.
     * @deprecated Use CarServer.ManagedChargingState.$Properties instead.
     */
    interface IManagedChargingState extends CarServer.ManagedChargingState.$Properties {
    }

    /** Represents a ManagedChargingState. */
    class ManagedChargingState {

        /**
         * Constructs a new ManagedChargingState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ManagedChargingState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ManagedChargingState charge_on_solar_state. */
        charge_on_solar_state?: (CarServer.ChargeOnSolarState.$Properties|null);

        /** ManagedChargingState charge_on_solar_gateway_din. */
        charge_on_solar_gateway_din?: (string|null);

        /** ManagedChargingState tesla_electric_asset_id. */
        tesla_electric_asset_id?: (string|null);

        /** ManagedChargingState minutes_to_lower_limit. */
        minutes_to_lower_limit?: (number|null);

        /** ManagedChargingState optional_charge_on_solar_gateway_din. */
        optional_charge_on_solar_gateway_din?: "charge_on_solar_gateway_din";

        /** ManagedChargingState optional_tesla_electric_asset_id. */
        optional_tesla_electric_asset_id?: "tesla_electric_asset_id";

        /** ManagedChargingState optional_minutes_to_lower_limit. */
        optional_minutes_to_lower_limit?: "minutes_to_lower_limit";

        /**
         * Encodes the specified ManagedChargingState message. Does not implicitly {@link CarServer.ManagedChargingState.verify|verify} messages.
         * @param m ManagedChargingState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ManagedChargingState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManagedChargingState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ManagedChargingState & CarServer.ManagedChargingState.$Shape} ManagedChargingState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ManagedChargingState & CarServer.ManagedChargingState.$Shape;

        /**
         * Gets the type url for ManagedChargingState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ManagedChargingState {

        /** Properties of a ManagedChargingState. */
        interface $Properties {

            /** ManagedChargingState charge_on_solar_state */
            charge_on_solar_state?: (CarServer.ChargeOnSolarState.$Properties|null);

            /** ManagedChargingState charge_on_solar_gateway_din */
            charge_on_solar_gateway_din?: (string|null);

            /** ManagedChargingState tesla_electric_asset_id */
            tesla_electric_asset_id?: (string|null);

            /** ManagedChargingState minutes_to_lower_limit */
            minutes_to_lower_limit?: (number|null);

            /** ManagedChargingState optional_charge_on_solar_gateway_din */
            optional_charge_on_solar_gateway_din?: "charge_on_solar_gateway_din";

            /** ManagedChargingState optional_tesla_electric_asset_id */
            optional_tesla_electric_asset_id?: "tesla_electric_asset_id";

            /** ManagedChargingState optional_minutes_to_lower_limit */
            optional_minutes_to_lower_limit?: "minutes_to_lower_limit";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ManagedChargingState. */
        type $Shape = {
          charge_on_solar_state?: CarServer.ChargeOnSolarState.$Shape|null;
          charge_on_solar_gateway_din?: string|null;
          tesla_electric_asset_id?: string|null;
          minutes_to_lower_limit?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_charge_on_solar_gateway_din?: undefined; charge_on_solar_gateway_din?: null }|{ optional_charge_on_solar_gateway_din?: "charge_on_solar_gateway_din"; charge_on_solar_gateway_din: string })
        ) & (
          ({ optional_tesla_electric_asset_id?: undefined; tesla_electric_asset_id?: null }|{ optional_tesla_electric_asset_id?: "tesla_electric_asset_id"; tesla_electric_asset_id: string })
        ) & (
          ({ optional_minutes_to_lower_limit?: undefined; minutes_to_lower_limit?: null }|{ optional_minutes_to_lower_limit?: "minutes_to_lower_limit"; minutes_to_lower_limit: number })
        );
    }

    /**
     * Properties of a ChargeOnSolarState.
     * @deprecated Use CarServer.ChargeOnSolarState.$Properties instead.
     */
    interface IChargeOnSolarState extends CarServer.ChargeOnSolarState.$Properties {
    }

    /** Represents a ChargeOnSolarState. */
    class ChargeOnSolarState {

        /**
         * Constructs a new ChargeOnSolarState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargeOnSolarState not_allowed. */
        not_allowed?: (CarServer.ChargeOnSolarStateNotAllowed.$Properties|null);

        /** ChargeOnSolarState no_charge_recommended. */
        no_charge_recommended?: (CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties|null);

        /** ChargeOnSolarState charging_on_excess_solar. */
        charging_on_excess_solar?: (CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties|null);

        /** ChargeOnSolarState charging_on_anything. */
        charging_on_anything?: (CarServer.ChargeOnSolarStateChargingOnAnything.$Properties|null);

        /** ChargeOnSolarState user_disabled. */
        user_disabled?: (CarServer.ChargeOnSolarStateUserDisabled.$Properties|null);

        /** ChargeOnSolarState waiting_for_server. */
        waiting_for_server?: (CarServer.ChargeOnSolarStateWaitingForServer.$Properties|null);

        /** ChargeOnSolarState error. */
        error?: (CarServer.ChargeOnSolarStateError.$Properties|null);

        /** ChargeOnSolarState user_stopped. */
        user_stopped?: (CarServer.ChargeOnSolarStateUserStopped.$Properties|null);

        /** ChargeOnSolarState state. */
        state?: ("not_allowed"|"no_charge_recommended"|"charging_on_excess_solar"|"charging_on_anything"|"user_disabled"|"waiting_for_server"|"error"|"user_stopped");

        /**
         * Encodes the specified ChargeOnSolarState message. Does not implicitly {@link CarServer.ChargeOnSolarState.verify|verify} messages.
         * @param m ChargeOnSolarState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarState & CarServer.ChargeOnSolarState.$Shape} ChargeOnSolarState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarState & CarServer.ChargeOnSolarState.$Shape;

        /**
         * Gets the type url for ChargeOnSolarState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarState {

        /** Properties of a ChargeOnSolarState. */
        interface $Properties {

            /** ChargeOnSolarState not_allowed */
            not_allowed?: (CarServer.ChargeOnSolarStateNotAllowed.$Properties|null);

            /** ChargeOnSolarState no_charge_recommended */
            no_charge_recommended?: (CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties|null);

            /** ChargeOnSolarState charging_on_excess_solar */
            charging_on_excess_solar?: (CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties|null);

            /** ChargeOnSolarState charging_on_anything */
            charging_on_anything?: (CarServer.ChargeOnSolarStateChargingOnAnything.$Properties|null);

            /** ChargeOnSolarState user_disabled */
            user_disabled?: (CarServer.ChargeOnSolarStateUserDisabled.$Properties|null);

            /** ChargeOnSolarState waiting_for_server */
            waiting_for_server?: (CarServer.ChargeOnSolarStateWaitingForServer.$Properties|null);

            /** ChargeOnSolarState error */
            error?: (CarServer.ChargeOnSolarStateError.$Properties|null);

            /** ChargeOnSolarState user_stopped */
            user_stopped?: (CarServer.ChargeOnSolarStateUserStopped.$Properties|null);

            /** ChargeOnSolarState state */
            state?: ("not_allowed"|"no_charge_recommended"|"charging_on_excess_solar"|"charging_on_anything"|"user_disabled"|"waiting_for_server"|"error"|"user_stopped");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ChargeOnSolarState. */
        type $Shape = {
          not_allowed?: CarServer.ChargeOnSolarStateNotAllowed.$Shape|null;
          no_charge_recommended?: CarServer.ChargeOnSolarStateNoChargeRecommended.$Shape|null;
          charging_on_excess_solar?: CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Shape|null;
          charging_on_anything?: CarServer.ChargeOnSolarStateChargingOnAnything.$Shape|null;
          user_disabled?: CarServer.ChargeOnSolarStateUserDisabled.$Shape|null;
          waiting_for_server?: CarServer.ChargeOnSolarStateWaitingForServer.$Shape|null;
          error?: CarServer.ChargeOnSolarStateError.$Shape|null;
          user_stopped?: CarServer.ChargeOnSolarStateUserStopped.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ state?: undefined; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled?: null; waiting_for_server?: null; error?: null; user_stopped?: null }|{ state?: "not_allowed"; not_allowed: CarServer.ChargeOnSolarStateNotAllowed.$Shape; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled?: null; waiting_for_server?: null; error?: null; user_stopped?: null }|{ state?: "no_charge_recommended"; not_allowed?: null; no_charge_recommended: CarServer.ChargeOnSolarStateNoChargeRecommended.$Shape; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled?: null; waiting_for_server?: null; error?: null; user_stopped?: null }|{ state?: "charging_on_excess_solar"; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar: CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Shape; charging_on_anything?: null; user_disabled?: null; waiting_for_server?: null; error?: null; user_stopped?: null }|{ state?: "charging_on_anything"; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything: CarServer.ChargeOnSolarStateChargingOnAnything.$Shape; user_disabled?: null; waiting_for_server?: null; error?: null; user_stopped?: null }|{ state?: "user_disabled"; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled: CarServer.ChargeOnSolarStateUserDisabled.$Shape; waiting_for_server?: null; error?: null; user_stopped?: null }|{ state?: "waiting_for_server"; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled?: null; waiting_for_server: CarServer.ChargeOnSolarStateWaitingForServer.$Shape; error?: null; user_stopped?: null }|{ state?: "error"; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled?: null; waiting_for_server?: null; error: CarServer.ChargeOnSolarStateError.$Shape; user_stopped?: null }|{ state?: "user_stopped"; not_allowed?: null; no_charge_recommended?: null; charging_on_excess_solar?: null; charging_on_anything?: null; user_disabled?: null; waiting_for_server?: null; error?: null; user_stopped: CarServer.ChargeOnSolarStateUserStopped.$Shape })
        );
    }

    /**
     * Properties of a ChargeOnSolarStateNotAllowed.
     * @deprecated Use CarServer.ChargeOnSolarStateNotAllowed.$Properties instead.
     */
    interface IChargeOnSolarStateNotAllowed extends CarServer.ChargeOnSolarStateNotAllowed.$Properties {
    }

    /** Represents a ChargeOnSolarStateNotAllowed. */
    class ChargeOnSolarStateNotAllowed {

        /**
         * Constructs a new ChargeOnSolarStateNotAllowed.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateNotAllowed.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateNotAllowed message. Does not implicitly {@link CarServer.ChargeOnSolarStateNotAllowed.verify|verify} messages.
         * @param m ChargeOnSolarStateNotAllowed message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateNotAllowed.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateNotAllowed message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateNotAllowed & CarServer.ChargeOnSolarStateNotAllowed.$Shape} ChargeOnSolarStateNotAllowed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateNotAllowed & CarServer.ChargeOnSolarStateNotAllowed.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateNotAllowed
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateNotAllowed {

        /** Properties of a ChargeOnSolarStateNotAllowed. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateNotAllowed. */
        type $Shape = CarServer.ChargeOnSolarStateNotAllowed.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateNoChargeRecommended.
     * @deprecated Use CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties instead.
     */
    interface IChargeOnSolarStateNoChargeRecommended extends CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties {
    }

    /** Represents a ChargeOnSolarStateNoChargeRecommended. */
    class ChargeOnSolarStateNoChargeRecommended {

        /**
         * Constructs a new ChargeOnSolarStateNoChargeRecommended.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargeOnSolarStateNoChargeRecommended reason. */
        reason: ManagedCharging.ChargeOnSolarNoChargeReason;

        /**
         * Encodes the specified ChargeOnSolarStateNoChargeRecommended message. Does not implicitly {@link CarServer.ChargeOnSolarStateNoChargeRecommended.verify|verify} messages.
         * @param m ChargeOnSolarStateNoChargeRecommended message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateNoChargeRecommended message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateNoChargeRecommended & CarServer.ChargeOnSolarStateNoChargeRecommended.$Shape} ChargeOnSolarStateNoChargeRecommended
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateNoChargeRecommended & CarServer.ChargeOnSolarStateNoChargeRecommended.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateNoChargeRecommended
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateNoChargeRecommended {

        /** Properties of a ChargeOnSolarStateNoChargeRecommended. */
        interface $Properties {

            /** ChargeOnSolarStateNoChargeRecommended reason */
            reason?: (ManagedCharging.ChargeOnSolarNoChargeReason|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateNoChargeRecommended. */
        type $Shape = CarServer.ChargeOnSolarStateNoChargeRecommended.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateChargingOnExcessSolar.
     * @deprecated Use CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties instead.
     */
    interface IChargeOnSolarStateChargingOnExcessSolar extends CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties {
    }

    /** Represents a ChargeOnSolarStateChargingOnExcessSolar. */
    class ChargeOnSolarStateChargingOnExcessSolar {

        /**
         * Constructs a new ChargeOnSolarStateChargingOnExcessSolar.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateChargingOnExcessSolar message. Does not implicitly {@link CarServer.ChargeOnSolarStateChargingOnExcessSolar.verify|verify} messages.
         * @param m ChargeOnSolarStateChargingOnExcessSolar message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateChargingOnExcessSolar message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateChargingOnExcessSolar & CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Shape} ChargeOnSolarStateChargingOnExcessSolar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateChargingOnExcessSolar & CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateChargingOnExcessSolar
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateChargingOnExcessSolar {

        /** Properties of a ChargeOnSolarStateChargingOnExcessSolar. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateChargingOnExcessSolar. */
        type $Shape = CarServer.ChargeOnSolarStateChargingOnExcessSolar.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateChargingOnAnything.
     * @deprecated Use CarServer.ChargeOnSolarStateChargingOnAnything.$Properties instead.
     */
    interface IChargeOnSolarStateChargingOnAnything extends CarServer.ChargeOnSolarStateChargingOnAnything.$Properties {
    }

    /** Represents a ChargeOnSolarStateChargingOnAnything. */
    class ChargeOnSolarStateChargingOnAnything {

        /**
         * Constructs a new ChargeOnSolarStateChargingOnAnything.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateChargingOnAnything.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateChargingOnAnything message. Does not implicitly {@link CarServer.ChargeOnSolarStateChargingOnAnything.verify|verify} messages.
         * @param m ChargeOnSolarStateChargingOnAnything message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateChargingOnAnything.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateChargingOnAnything message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateChargingOnAnything & CarServer.ChargeOnSolarStateChargingOnAnything.$Shape} ChargeOnSolarStateChargingOnAnything
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateChargingOnAnything & CarServer.ChargeOnSolarStateChargingOnAnything.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateChargingOnAnything
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateChargingOnAnything {

        /** Properties of a ChargeOnSolarStateChargingOnAnything. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateChargingOnAnything. */
        type $Shape = CarServer.ChargeOnSolarStateChargingOnAnything.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateUserDisabled.
     * @deprecated Use CarServer.ChargeOnSolarStateUserDisabled.$Properties instead.
     */
    interface IChargeOnSolarStateUserDisabled extends CarServer.ChargeOnSolarStateUserDisabled.$Properties {
    }

    /** Represents a ChargeOnSolarStateUserDisabled. */
    class ChargeOnSolarStateUserDisabled {

        /**
         * Constructs a new ChargeOnSolarStateUserDisabled.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateUserDisabled.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateUserDisabled message. Does not implicitly {@link CarServer.ChargeOnSolarStateUserDisabled.verify|verify} messages.
         * @param m ChargeOnSolarStateUserDisabled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateUserDisabled.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateUserDisabled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateUserDisabled & CarServer.ChargeOnSolarStateUserDisabled.$Shape} ChargeOnSolarStateUserDisabled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateUserDisabled & CarServer.ChargeOnSolarStateUserDisabled.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateUserDisabled
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateUserDisabled {

        /** Properties of a ChargeOnSolarStateUserDisabled. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateUserDisabled. */
        type $Shape = CarServer.ChargeOnSolarStateUserDisabled.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateWaitingForServer.
     * @deprecated Use CarServer.ChargeOnSolarStateWaitingForServer.$Properties instead.
     */
    interface IChargeOnSolarStateWaitingForServer extends CarServer.ChargeOnSolarStateWaitingForServer.$Properties {
    }

    /** Represents a ChargeOnSolarStateWaitingForServer. */
    class ChargeOnSolarStateWaitingForServer {

        /**
         * Constructs a new ChargeOnSolarStateWaitingForServer.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateWaitingForServer.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateWaitingForServer message. Does not implicitly {@link CarServer.ChargeOnSolarStateWaitingForServer.verify|verify} messages.
         * @param m ChargeOnSolarStateWaitingForServer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateWaitingForServer.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateWaitingForServer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateWaitingForServer & CarServer.ChargeOnSolarStateWaitingForServer.$Shape} ChargeOnSolarStateWaitingForServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateWaitingForServer & CarServer.ChargeOnSolarStateWaitingForServer.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateWaitingForServer
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateWaitingForServer {

        /** Properties of a ChargeOnSolarStateWaitingForServer. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateWaitingForServer. */
        type $Shape = CarServer.ChargeOnSolarStateWaitingForServer.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateError.
     * @deprecated Use CarServer.ChargeOnSolarStateError.$Properties instead.
     */
    interface IChargeOnSolarStateError extends CarServer.ChargeOnSolarStateError.$Properties {
    }

    /** Represents a ChargeOnSolarStateError. */
    class ChargeOnSolarStateError {

        /**
         * Constructs a new ChargeOnSolarStateError.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateError.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateError message. Does not implicitly {@link CarServer.ChargeOnSolarStateError.verify|verify} messages.
         * @param m ChargeOnSolarStateError message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateError.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateError message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateError & CarServer.ChargeOnSolarStateError.$Shape} ChargeOnSolarStateError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateError & CarServer.ChargeOnSolarStateError.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateError
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateError {

        /** Properties of a ChargeOnSolarStateError. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateError. */
        type $Shape = CarServer.ChargeOnSolarStateError.$Properties;
    }

    /**
     * Properties of a ChargeOnSolarStateUserStopped.
     * @deprecated Use CarServer.ChargeOnSolarStateUserStopped.$Properties instead.
     */
    interface IChargeOnSolarStateUserStopped extends CarServer.ChargeOnSolarStateUserStopped.$Properties {
    }

    /** Represents a ChargeOnSolarStateUserStopped. */
    class ChargeOnSolarStateUserStopped {

        /**
         * Constructs a new ChargeOnSolarStateUserStopped.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeOnSolarStateUserStopped.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ChargeOnSolarStateUserStopped message. Does not implicitly {@link CarServer.ChargeOnSolarStateUserStopped.verify|verify} messages.
         * @param m ChargeOnSolarStateUserStopped message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeOnSolarStateUserStopped.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeOnSolarStateUserStopped message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeOnSolarStateUserStopped & CarServer.ChargeOnSolarStateUserStopped.$Shape} ChargeOnSolarStateUserStopped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeOnSolarStateUserStopped & CarServer.ChargeOnSolarStateUserStopped.$Shape;

        /**
         * Gets the type url for ChargeOnSolarStateUserStopped
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeOnSolarStateUserStopped {

        /** Properties of a ChargeOnSolarStateUserStopped. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeOnSolarStateUserStopped. */
        type $Shape = CarServer.ChargeOnSolarStateUserStopped.$Properties;
    }

    /**
     * Properties of a LocationState.
     * @deprecated Use CarServer.LocationState.$Properties instead.
     */
    interface ILocationState extends CarServer.LocationState.$Properties {
    }

    /** Represents a LocationState. */
    class LocationState {

        /**
         * Constructs a new LocationState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.LocationState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LocationState latitude. */
        latitude?: (number|null);

        /** LocationState longitude. */
        longitude?: (number|null);

        /** LocationState heading. */
        heading?: (number|null);

        /** LocationState gps_as_of. */
        gps_as_of?: (number|null);

        /** LocationState native_location_supported. */
        native_location_supported?: (boolean|null);

        /** LocationState native_latitude. */
        native_latitude?: (number|null);

        /** LocationState native_longitude. */
        native_longitude?: (number|null);

        /** LocationState native_type. */
        native_type?: (CarServer.LocationState.GPSCoordinateType.$Properties|null);

        /** LocationState corrected_latitude. */
        corrected_latitude?: (number|null);

        /** LocationState corrected_longitude. */
        corrected_longitude?: (number|null);

        /** LocationState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** LocationState homelink_nearby. */
        homelink_nearby?: (boolean|null);

        /** LocationState location_name. */
        location_name?: (string|null);

        /** LocationState geo_latitude. */
        geo_latitude?: (number|null);

        /** LocationState geo_longitude. */
        geo_longitude?: (number|null);

        /** LocationState geo_heading. */
        geo_heading?: (number|null);

        /** LocationState geo_elevation. */
        geo_elevation?: (number|null);

        /** LocationState geo_accuracy. */
        geo_accuracy?: (number|null);

        /** LocationState estimated_gps_valid. */
        estimated_gps_valid?: (boolean|null);

        /** LocationState estimated_to_raw_distance. */
        estimated_to_raw_distance?: (number|null);

        /** LocationState optional_latitude. */
        optional_latitude?: "latitude";

        /** LocationState optional_longitude. */
        optional_longitude?: "longitude";

        /** LocationState optional_heading. */
        optional_heading?: "heading";

        /** LocationState optional_gps_as_of. */
        optional_gps_as_of?: "gps_as_of";

        /** LocationState optional_native_location_supported. */
        optional_native_location_supported?: "native_location_supported";

        /** LocationState optional_native_latitude. */
        optional_native_latitude?: "native_latitude";

        /** LocationState optional_native_longitude. */
        optional_native_longitude?: "native_longitude";

        /** LocationState optional_corrected_latitude. */
        optional_corrected_latitude?: "corrected_latitude";

        /** LocationState optional_corrected_longitude. */
        optional_corrected_longitude?: "corrected_longitude";

        /** LocationState optional_homelink_nearby. */
        optional_homelink_nearby?: "homelink_nearby";

        /** LocationState optional_location_name. */
        optional_location_name?: "location_name";

        /** LocationState optional_geo_latitude. */
        optional_geo_latitude?: "geo_latitude";

        /** LocationState optional_geo_longitude. */
        optional_geo_longitude?: "geo_longitude";

        /** LocationState optional_geo_heading. */
        optional_geo_heading?: "geo_heading";

        /** LocationState optional_geo_elevation. */
        optional_geo_elevation?: "geo_elevation";

        /** LocationState optional_geo_accuracy. */
        optional_geo_accuracy?: "geo_accuracy";

        /** LocationState optional_estimated_gps_valid. */
        optional_estimated_gps_valid?: "estimated_gps_valid";

        /** LocationState optional_estimated_to_raw_distance. */
        optional_estimated_to_raw_distance?: "estimated_to_raw_distance";

        /**
         * Encodes the specified LocationState message. Does not implicitly {@link CarServer.LocationState.verify|verify} messages.
         * @param m LocationState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.LocationState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocationState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.LocationState & CarServer.LocationState.$Shape} LocationState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.LocationState & CarServer.LocationState.$Shape;

        /**
         * Gets the type url for LocationState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LocationState {

        /** Properties of a LocationState. */
        interface $Properties {

            /** LocationState latitude */
            latitude?: (number|null);

            /** LocationState longitude */
            longitude?: (number|null);

            /** LocationState heading */
            heading?: (number|null);

            /** LocationState gps_as_of */
            gps_as_of?: (number|null);

            /** LocationState native_location_supported */
            native_location_supported?: (boolean|null);

            /** LocationState native_latitude */
            native_latitude?: (number|null);

            /** LocationState native_longitude */
            native_longitude?: (number|null);

            /** LocationState native_type */
            native_type?: (CarServer.LocationState.GPSCoordinateType.$Properties|null);

            /** LocationState corrected_latitude */
            corrected_latitude?: (number|null);

            /** LocationState corrected_longitude */
            corrected_longitude?: (number|null);

            /** LocationState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** LocationState homelink_nearby */
            homelink_nearby?: (boolean|null);

            /** LocationState location_name */
            location_name?: (string|null);

            /** LocationState geo_latitude */
            geo_latitude?: (number|null);

            /** LocationState geo_longitude */
            geo_longitude?: (number|null);

            /** LocationState geo_heading */
            geo_heading?: (number|null);

            /** LocationState geo_elevation */
            geo_elevation?: (number|null);

            /** LocationState geo_accuracy */
            geo_accuracy?: (number|null);

            /** LocationState estimated_gps_valid */
            estimated_gps_valid?: (boolean|null);

            /** LocationState estimated_to_raw_distance */
            estimated_to_raw_distance?: (number|null);

            /** LocationState optional_latitude */
            optional_latitude?: "latitude";

            /** LocationState optional_longitude */
            optional_longitude?: "longitude";

            /** LocationState optional_heading */
            optional_heading?: "heading";

            /** LocationState optional_gps_as_of */
            optional_gps_as_of?: "gps_as_of";

            /** LocationState optional_native_location_supported */
            optional_native_location_supported?: "native_location_supported";

            /** LocationState optional_native_latitude */
            optional_native_latitude?: "native_latitude";

            /** LocationState optional_native_longitude */
            optional_native_longitude?: "native_longitude";

            /** LocationState optional_corrected_latitude */
            optional_corrected_latitude?: "corrected_latitude";

            /** LocationState optional_corrected_longitude */
            optional_corrected_longitude?: "corrected_longitude";

            /** LocationState optional_homelink_nearby */
            optional_homelink_nearby?: "homelink_nearby";

            /** LocationState optional_location_name */
            optional_location_name?: "location_name";

            /** LocationState optional_geo_latitude */
            optional_geo_latitude?: "geo_latitude";

            /** LocationState optional_geo_longitude */
            optional_geo_longitude?: "geo_longitude";

            /** LocationState optional_geo_heading */
            optional_geo_heading?: "geo_heading";

            /** LocationState optional_geo_elevation */
            optional_geo_elevation?: "geo_elevation";

            /** LocationState optional_geo_accuracy */
            optional_geo_accuracy?: "geo_accuracy";

            /** LocationState optional_estimated_gps_valid */
            optional_estimated_gps_valid?: "estimated_gps_valid";

            /** LocationState optional_estimated_to_raw_distance */
            optional_estimated_to_raw_distance?: "estimated_to_raw_distance";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a LocationState. */
        type $Shape = {
          latitude?: number|null;
          longitude?: number|null;
          heading?: number|null;
          gps_as_of?: number|null;
          native_location_supported?: boolean|null;
          native_latitude?: number|null;
          native_longitude?: number|null;
          native_type?: CarServer.LocationState.GPSCoordinateType.$Shape|null;
          corrected_latitude?: number|null;
          corrected_longitude?: number|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          homelink_nearby?: boolean|null;
          location_name?: string|null;
          geo_latitude?: number|null;
          geo_longitude?: number|null;
          geo_heading?: number|null;
          geo_elevation?: number|null;
          geo_accuracy?: number|null;
          estimated_gps_valid?: boolean|null;
          estimated_to_raw_distance?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_latitude?: undefined; latitude?: null }|{ optional_latitude?: "latitude"; latitude: number })
        ) & (
          ({ optional_longitude?: undefined; longitude?: null }|{ optional_longitude?: "longitude"; longitude: number })
        ) & (
          ({ optional_heading?: undefined; heading?: null }|{ optional_heading?: "heading"; heading: number })
        ) & (
          ({ optional_gps_as_of?: undefined; gps_as_of?: null }|{ optional_gps_as_of?: "gps_as_of"; gps_as_of: number })
        ) & (
          ({ optional_native_location_supported?: undefined; native_location_supported?: null }|{ optional_native_location_supported?: "native_location_supported"; native_location_supported: boolean })
        ) & (
          ({ optional_native_latitude?: undefined; native_latitude?: null }|{ optional_native_latitude?: "native_latitude"; native_latitude: number })
        ) & (
          ({ optional_native_longitude?: undefined; native_longitude?: null }|{ optional_native_longitude?: "native_longitude"; native_longitude: number })
        ) & (
          ({ optional_corrected_latitude?: undefined; corrected_latitude?: null }|{ optional_corrected_latitude?: "corrected_latitude"; corrected_latitude: number })
        ) & (
          ({ optional_corrected_longitude?: undefined; corrected_longitude?: null }|{ optional_corrected_longitude?: "corrected_longitude"; corrected_longitude: number })
        ) & (
          ({ optional_homelink_nearby?: undefined; homelink_nearby?: null }|{ optional_homelink_nearby?: "homelink_nearby"; homelink_nearby: boolean })
        ) & (
          ({ optional_location_name?: undefined; location_name?: null }|{ optional_location_name?: "location_name"; location_name: string })
        ) & (
          ({ optional_geo_latitude?: undefined; geo_latitude?: null }|{ optional_geo_latitude?: "geo_latitude"; geo_latitude: number })
        ) & (
          ({ optional_geo_longitude?: undefined; geo_longitude?: null }|{ optional_geo_longitude?: "geo_longitude"; geo_longitude: number })
        ) & (
          ({ optional_geo_heading?: undefined; geo_heading?: null }|{ optional_geo_heading?: "geo_heading"; geo_heading: number })
        ) & (
          ({ optional_geo_elevation?: undefined; geo_elevation?: null }|{ optional_geo_elevation?: "geo_elevation"; geo_elevation: number })
        ) & (
          ({ optional_geo_accuracy?: undefined; geo_accuracy?: null }|{ optional_geo_accuracy?: "geo_accuracy"; geo_accuracy: number })
        ) & (
          ({ optional_estimated_gps_valid?: undefined; estimated_gps_valid?: null }|{ optional_estimated_gps_valid?: "estimated_gps_valid"; estimated_gps_valid: boolean })
        ) & (
          ({ optional_estimated_to_raw_distance?: undefined; estimated_to_raw_distance?: null }|{ optional_estimated_to_raw_distance?: "estimated_to_raw_distance"; estimated_to_raw_distance: number })
        );

        /**
         * Properties of a GPSCoordinateType.
         * @deprecated Use CarServer.LocationState.GPSCoordinateType.$Properties instead.
         */
        interface IGPSCoordinateType extends CarServer.LocationState.GPSCoordinateType.$Properties {
        }

        /** Represents a GPSCoordinateType. */
        class GPSCoordinateType {

            /**
             * Constructs a new GPSCoordinateType.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.LocationState.GPSCoordinateType.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GPSCoordinateType GCJ. */
            GCJ?: (CarServer.Void.$Properties|null);

            /** GPSCoordinateType WGS. */
            WGS?: (CarServer.Void.$Properties|null);

            /** GPSCoordinateType type. */
            type?: ("GCJ"|"WGS");

            /**
             * Encodes the specified GPSCoordinateType message. Does not implicitly {@link CarServer.LocationState.GPSCoordinateType.verify|verify} messages.
             * @param m GPSCoordinateType message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.LocationState.GPSCoordinateType.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GPSCoordinateType message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.LocationState.GPSCoordinateType & CarServer.LocationState.GPSCoordinateType.$Shape} GPSCoordinateType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.LocationState.GPSCoordinateType & CarServer.LocationState.GPSCoordinateType.$Shape;

            /**
             * Gets the type url for GPSCoordinateType
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GPSCoordinateType {

            /** Properties of a GPSCoordinateType. */
            interface $Properties {

                /** GPSCoordinateType GCJ */
                GCJ?: (CarServer.Void.$Properties|null);

                /** GPSCoordinateType WGS */
                WGS?: (CarServer.Void.$Properties|null);

                /** GPSCoordinateType type */
                type?: ("GCJ"|"WGS");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a GPSCoordinateType. */
            type $Shape = {
              GCJ?: CarServer.Void.$Shape|null;
              WGS?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; GCJ?: null; WGS?: null }|{ type?: "GCJ"; GCJ: CarServer.Void.$Shape; WGS?: null }|{ type?: "WGS"; GCJ?: null; WGS: CarServer.Void.$Shape })
            );
        }
    }

    /**
     * Properties of a VehicleState.
     * @deprecated Use CarServer.VehicleState.$Properties instead.
     */
    interface IVehicleState extends CarServer.VehicleState.$Properties {
    }

    /** Represents a VehicleState. */
    class VehicleState {

        /**
         * Constructs a new VehicleState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.VehicleState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleState guestMode. */
        guestMode?: (CarServer.VehicleState.GuestMode.$Properties|null);

        /**
         * Encodes the specified VehicleState message. Does not implicitly {@link CarServer.VehicleState.verify|verify} messages.
         * @param m VehicleState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.VehicleState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.VehicleState & CarServer.VehicleState.$Shape} VehicleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleState & CarServer.VehicleState.$Shape;

        /**
         * Gets the type url for VehicleState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleState {

        /** Properties of a VehicleState. */
        interface $Properties {

            /** VehicleState guestMode */
            guestMode?: (CarServer.VehicleState.GuestMode.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleState. */
        type $Shape = CarServer.VehicleState.$Properties;

        /**
         * Properties of a GuestMode.
         * @deprecated Use CarServer.VehicleState.GuestMode.$Properties instead.
         */
        interface IGuestMode extends CarServer.VehicleState.GuestMode.$Properties {
        }

        /** Represents a GuestMode. */
        class GuestMode {

            /**
             * Constructs a new GuestMode.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.VehicleState.GuestMode.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GuestMode GuestModeActive. */
            GuestModeActive: boolean;

            /**
             * Encodes the specified GuestMode message. Does not implicitly {@link CarServer.VehicleState.GuestMode.verify|verify} messages.
             * @param m GuestMode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.VehicleState.GuestMode.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GuestMode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.VehicleState.GuestMode & CarServer.VehicleState.GuestMode.$Shape} GuestMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.VehicleState.GuestMode & CarServer.VehicleState.GuestMode.$Shape;

            /**
             * Gets the type url for GuestMode
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GuestMode {

            /** Properties of a GuestMode. */
            interface $Properties {

                /** GuestMode GuestModeActive */
                GuestModeActive?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GuestMode. */
            type $Shape = CarServer.VehicleState.GuestMode.$Properties;
        }
    }

    /**
     * Properties of a ClimateState.
     * @deprecated Use CarServer.ClimateState.$Properties instead.
     */
    interface IClimateState extends CarServer.ClimateState.$Properties {
    }

    /** Represents a ClimateState. */
    class ClimateState {

        /**
         * Constructs a new ClimateState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ClimateState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClimateState inside_temp_celsius. */
        inside_temp_celsius?: (number|null);

        /** ClimateState outside_temp_celsius. */
        outside_temp_celsius?: (number|null);

        /** ClimateState driver_temp_setting. */
        driver_temp_setting?: (number|null);

        /** ClimateState passenger_temp_setting. */
        passenger_temp_setting?: (number|null);

        /** ClimateState left_temp_direction. */
        left_temp_direction?: (number|null);

        /** ClimateState right_temp_direction. */
        right_temp_direction?: (number|null);

        /** ClimateState is_front_defroster_on. */
        is_front_defroster_on?: (boolean|null);

        /** ClimateState is_rear_defroster_on. */
        is_rear_defroster_on?: (boolean|null);

        /** ClimateState fan_status. */
        fan_status?: (number|null);

        /** ClimateState is_climate_on. */
        is_climate_on?: (boolean|null);

        /** ClimateState min_avail_temp_celsius. */
        min_avail_temp_celsius?: (number|null);

        /** ClimateState max_avail_temp_celsius. */
        max_avail_temp_celsius?: (number|null);

        /** ClimateState seat_heater_left. */
        seat_heater_left?: (number|null);

        /** ClimateState seat_heater_right. */
        seat_heater_right?: (number|null);

        /** ClimateState seat_heater_rear_left. */
        seat_heater_rear_left?: (number|null);

        /** ClimateState seat_heater_rear_right. */
        seat_heater_rear_right?: (number|null);

        /** ClimateState seat_heater_rear_center. */
        seat_heater_rear_center?: (number|null);

        /** ClimateState seat_heater_rear_right_back. */
        seat_heater_rear_right_back?: (number|null);

        /** ClimateState seat_heater_rear_left_back. */
        seat_heater_rear_left_back?: (number|null);

        /** ClimateState seat_heater_third_row_right. */
        seat_heater_third_row_right?: (number|null);

        /** ClimateState seat_heater_third_row_left. */
        seat_heater_third_row_left?: (number|null);

        /** ClimateState battery_heater. */
        battery_heater?: (boolean|null);

        /** ClimateState battery_heater_no_power. */
        battery_heater_no_power?: (boolean|null);

        /** ClimateState steering_wheel_heater. */
        steering_wheel_heater?: (boolean|null);

        /** ClimateState wiper_blade_heater. */
        wiper_blade_heater?: (boolean|null);

        /** ClimateState side_mirror_heaters. */
        side_mirror_heaters?: (boolean|null);

        /** ClimateState is_preconditioning. */
        is_preconditioning?: (boolean|null);

        /** ClimateState remote_heater_control_enabled. */
        remote_heater_control_enabled?: (boolean|null);

        /** ClimateState climate_keeper_mode. */
        climate_keeper_mode?: (CarServer.ClimateState.ClimateKeeperMode.$Properties|null);

        /** ClimateState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** ClimateState bioweapon_mode_on. */
        bioweapon_mode_on?: (boolean|null);

        /** ClimateState defrost_mode. */
        defrost_mode?: (CarServer.ClimateState.DefrostMode.$Properties|null);

        /** ClimateState is_auto_conditioning_on. */
        is_auto_conditioning_on?: (boolean|null);

        /** ClimateState auto_seat_climate_left. */
        auto_seat_climate_left?: (boolean|null);

        /** ClimateState auto_seat_climate_right. */
        auto_seat_climate_right?: (boolean|null);

        /** ClimateState seat_fan_front_left. */
        seat_fan_front_left?: (number|null);

        /** ClimateState seat_fan_front_right. */
        seat_fan_front_right?: (number|null);

        /** ClimateState allow_cabin_overheat_protection. */
        allow_cabin_overheat_protection?: (boolean|null);

        /** ClimateState supports_fan_only_cabin_overheat_protection. */
        supports_fan_only_cabin_overheat_protection?: (boolean|null);

        /** ClimateState cabin_overheat_protection. */
        cabin_overheat_protection?: (CarServer.ClimateState.CabinOverheatProtection_E|null);

        /** ClimateState cabin_overheat_protection_actively_cooling. */
        cabin_overheat_protection_actively_cooling?: (boolean|null);

        /** ClimateState cop_activation_temperature. */
        cop_activation_temperature?: (CarServer.ClimateState.CopActivationTemp|null);

        /** ClimateState auto_steering_wheel_heat. */
        auto_steering_wheel_heat?: (boolean|null);

        /** ClimateState steering_wheel_heat_level. */
        steering_wheel_heat_level?: (CarServer.StwHeatLevel|null);

        /** ClimateState hvac_auto_request. */
        hvac_auto_request?: (CarServer.ClimateState.HvacAutoRequest|null);

        /** ClimateState cop_not_running_reason. */
        cop_not_running_reason?: (CarServer.ClimateState.COPNotRunningReason|null);

        /** ClimateState optional_inside_temp_celsius. */
        optional_inside_temp_celsius?: "inside_temp_celsius";

        /** ClimateState optional_outside_temp_celsius. */
        optional_outside_temp_celsius?: "outside_temp_celsius";

        /** ClimateState optional_driver_temp_setting. */
        optional_driver_temp_setting?: "driver_temp_setting";

        /** ClimateState optional_passenger_temp_setting. */
        optional_passenger_temp_setting?: "passenger_temp_setting";

        /** ClimateState optional_left_temp_direction. */
        optional_left_temp_direction?: "left_temp_direction";

        /** ClimateState optional_right_temp_direction. */
        optional_right_temp_direction?: "right_temp_direction";

        /** ClimateState optional_is_front_defroster_on. */
        optional_is_front_defroster_on?: "is_front_defroster_on";

        /** ClimateState optional_is_rear_defroster_on. */
        optional_is_rear_defroster_on?: "is_rear_defroster_on";

        /** ClimateState optional_fan_status. */
        optional_fan_status?: "fan_status";

        /** ClimateState optional_is_climate_on. */
        optional_is_climate_on?: "is_climate_on";

        /** ClimateState optional_min_avail_temp_celsius. */
        optional_min_avail_temp_celsius?: "min_avail_temp_celsius";

        /** ClimateState optional_max_avail_temp_celsius. */
        optional_max_avail_temp_celsius?: "max_avail_temp_celsius";

        /** ClimateState optional_seat_heater_left. */
        optional_seat_heater_left?: "seat_heater_left";

        /** ClimateState optional_seat_heater_right. */
        optional_seat_heater_right?: "seat_heater_right";

        /** ClimateState optional_seat_heater_rear_left. */
        optional_seat_heater_rear_left?: "seat_heater_rear_left";

        /** ClimateState optional_seat_heater_rear_right. */
        optional_seat_heater_rear_right?: "seat_heater_rear_right";

        /** ClimateState optional_seat_heater_rear_center. */
        optional_seat_heater_rear_center?: "seat_heater_rear_center";

        /** ClimateState optional_seat_heater_rear_right_back. */
        optional_seat_heater_rear_right_back?: "seat_heater_rear_right_back";

        /** ClimateState optional_seat_heater_rear_left_back. */
        optional_seat_heater_rear_left_back?: "seat_heater_rear_left_back";

        /** ClimateState optional_seat_heater_third_row_right. */
        optional_seat_heater_third_row_right?: "seat_heater_third_row_right";

        /** ClimateState optional_seat_heater_third_row_left. */
        optional_seat_heater_third_row_left?: "seat_heater_third_row_left";

        /** ClimateState optional_battery_heater. */
        optional_battery_heater?: "battery_heater";

        /** ClimateState optional_battery_heater_no_power. */
        optional_battery_heater_no_power?: "battery_heater_no_power";

        /** ClimateState optional_steering_wheel_heater. */
        optional_steering_wheel_heater?: "steering_wheel_heater";

        /** ClimateState optional_wiper_blade_heater. */
        optional_wiper_blade_heater?: "wiper_blade_heater";

        /** ClimateState optional_side_mirror_heaters. */
        optional_side_mirror_heaters?: "side_mirror_heaters";

        /** ClimateState optional_is_preconditioning. */
        optional_is_preconditioning?: "is_preconditioning";

        /** ClimateState optional_remote_heater_control_enabled. */
        optional_remote_heater_control_enabled?: "remote_heater_control_enabled";

        /** ClimateState optional_bioweapon_mode_on. */
        optional_bioweapon_mode_on?: "bioweapon_mode_on";

        /** ClimateState optional_is_auto_conditioning_on. */
        optional_is_auto_conditioning_on?: "is_auto_conditioning_on";

        /** ClimateState optional_auto_seat_climate_left. */
        optional_auto_seat_climate_left?: "auto_seat_climate_left";

        /** ClimateState optional_auto_seat_climate_right. */
        optional_auto_seat_climate_right?: "auto_seat_climate_right";

        /** ClimateState optional_seat_fan_front_left. */
        optional_seat_fan_front_left?: "seat_fan_front_left";

        /** ClimateState optional_seat_fan_front_right. */
        optional_seat_fan_front_right?: "seat_fan_front_right";

        /** ClimateState optional_allow_cabin_overheat_protection. */
        optional_allow_cabin_overheat_protection?: "allow_cabin_overheat_protection";

        /** ClimateState optional_supports_fan_only_cabin_overheat_protection. */
        optional_supports_fan_only_cabin_overheat_protection?: "supports_fan_only_cabin_overheat_protection";

        /** ClimateState optional_cabin_overheat_protection. */
        optional_cabin_overheat_protection?: "cabin_overheat_protection";

        /** ClimateState optional_cabin_overheat_protection_actively_cooling. */
        optional_cabin_overheat_protection_actively_cooling?: "cabin_overheat_protection_actively_cooling";

        /** ClimateState optional_cop_activation_temperature. */
        optional_cop_activation_temperature?: "cop_activation_temperature";

        /** ClimateState optional_auto_steering_wheel_heat. */
        optional_auto_steering_wheel_heat?: "auto_steering_wheel_heat";

        /** ClimateState optional_steering_wheel_heat_level. */
        optional_steering_wheel_heat_level?: "steering_wheel_heat_level";

        /** ClimateState optional_hvac_auto_request. */
        optional_hvac_auto_request?: "hvac_auto_request";

        /** ClimateState optional_cop_not_running_reason. */
        optional_cop_not_running_reason?: "cop_not_running_reason";

        /**
         * Encodes the specified ClimateState message. Does not implicitly {@link CarServer.ClimateState.verify|verify} messages.
         * @param m ClimateState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ClimateState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClimateState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ClimateState & CarServer.ClimateState.$Shape} ClimateState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClimateState & CarServer.ClimateState.$Shape;

        /**
         * Gets the type url for ClimateState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClimateState {

        /** Properties of a ClimateState. */
        interface $Properties {

            /** ClimateState inside_temp_celsius */
            inside_temp_celsius?: (number|null);

            /** ClimateState outside_temp_celsius */
            outside_temp_celsius?: (number|null);

            /** ClimateState driver_temp_setting */
            driver_temp_setting?: (number|null);

            /** ClimateState passenger_temp_setting */
            passenger_temp_setting?: (number|null);

            /** ClimateState left_temp_direction */
            left_temp_direction?: (number|null);

            /** ClimateState right_temp_direction */
            right_temp_direction?: (number|null);

            /** ClimateState is_front_defroster_on */
            is_front_defroster_on?: (boolean|null);

            /** ClimateState is_rear_defroster_on */
            is_rear_defroster_on?: (boolean|null);

            /** ClimateState fan_status */
            fan_status?: (number|null);

            /** ClimateState is_climate_on */
            is_climate_on?: (boolean|null);

            /** ClimateState min_avail_temp_celsius */
            min_avail_temp_celsius?: (number|null);

            /** ClimateState max_avail_temp_celsius */
            max_avail_temp_celsius?: (number|null);

            /** ClimateState seat_heater_left */
            seat_heater_left?: (number|null);

            /** ClimateState seat_heater_right */
            seat_heater_right?: (number|null);

            /** ClimateState seat_heater_rear_left */
            seat_heater_rear_left?: (number|null);

            /** ClimateState seat_heater_rear_right */
            seat_heater_rear_right?: (number|null);

            /** ClimateState seat_heater_rear_center */
            seat_heater_rear_center?: (number|null);

            /** ClimateState seat_heater_rear_right_back */
            seat_heater_rear_right_back?: (number|null);

            /** ClimateState seat_heater_rear_left_back */
            seat_heater_rear_left_back?: (number|null);

            /** ClimateState seat_heater_third_row_right */
            seat_heater_third_row_right?: (number|null);

            /** ClimateState seat_heater_third_row_left */
            seat_heater_third_row_left?: (number|null);

            /** ClimateState battery_heater */
            battery_heater?: (boolean|null);

            /** ClimateState battery_heater_no_power */
            battery_heater_no_power?: (boolean|null);

            /** ClimateState steering_wheel_heater */
            steering_wheel_heater?: (boolean|null);

            /** ClimateState wiper_blade_heater */
            wiper_blade_heater?: (boolean|null);

            /** ClimateState side_mirror_heaters */
            side_mirror_heaters?: (boolean|null);

            /** ClimateState is_preconditioning */
            is_preconditioning?: (boolean|null);

            /** ClimateState remote_heater_control_enabled */
            remote_heater_control_enabled?: (boolean|null);

            /** ClimateState climate_keeper_mode */
            climate_keeper_mode?: (CarServer.ClimateState.ClimateKeeperMode.$Properties|null);

            /** ClimateState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** ClimateState bioweapon_mode_on */
            bioweapon_mode_on?: (boolean|null);

            /** ClimateState defrost_mode */
            defrost_mode?: (CarServer.ClimateState.DefrostMode.$Properties|null);

            /** ClimateState is_auto_conditioning_on */
            is_auto_conditioning_on?: (boolean|null);

            /** ClimateState auto_seat_climate_left */
            auto_seat_climate_left?: (boolean|null);

            /** ClimateState auto_seat_climate_right */
            auto_seat_climate_right?: (boolean|null);

            /** ClimateState seat_fan_front_left */
            seat_fan_front_left?: (number|null);

            /** ClimateState seat_fan_front_right */
            seat_fan_front_right?: (number|null);

            /** ClimateState allow_cabin_overheat_protection */
            allow_cabin_overheat_protection?: (boolean|null);

            /** ClimateState supports_fan_only_cabin_overheat_protection */
            supports_fan_only_cabin_overheat_protection?: (boolean|null);

            /** ClimateState cabin_overheat_protection */
            cabin_overheat_protection?: (CarServer.ClimateState.CabinOverheatProtection_E|null);

            /** ClimateState cabin_overheat_protection_actively_cooling */
            cabin_overheat_protection_actively_cooling?: (boolean|null);

            /** ClimateState cop_activation_temperature */
            cop_activation_temperature?: (CarServer.ClimateState.CopActivationTemp|null);

            /** ClimateState auto_steering_wheel_heat */
            auto_steering_wheel_heat?: (boolean|null);

            /** ClimateState steering_wheel_heat_level */
            steering_wheel_heat_level?: (CarServer.StwHeatLevel|null);

            /** ClimateState hvac_auto_request */
            hvac_auto_request?: (CarServer.ClimateState.HvacAutoRequest|null);

            /** ClimateState cop_not_running_reason */
            cop_not_running_reason?: (CarServer.ClimateState.COPNotRunningReason|null);

            /** ClimateState optional_inside_temp_celsius */
            optional_inside_temp_celsius?: "inside_temp_celsius";

            /** ClimateState optional_outside_temp_celsius */
            optional_outside_temp_celsius?: "outside_temp_celsius";

            /** ClimateState optional_driver_temp_setting */
            optional_driver_temp_setting?: "driver_temp_setting";

            /** ClimateState optional_passenger_temp_setting */
            optional_passenger_temp_setting?: "passenger_temp_setting";

            /** ClimateState optional_left_temp_direction */
            optional_left_temp_direction?: "left_temp_direction";

            /** ClimateState optional_right_temp_direction */
            optional_right_temp_direction?: "right_temp_direction";

            /** ClimateState optional_is_front_defroster_on */
            optional_is_front_defroster_on?: "is_front_defroster_on";

            /** ClimateState optional_is_rear_defroster_on */
            optional_is_rear_defroster_on?: "is_rear_defroster_on";

            /** ClimateState optional_fan_status */
            optional_fan_status?: "fan_status";

            /** ClimateState optional_is_climate_on */
            optional_is_climate_on?: "is_climate_on";

            /** ClimateState optional_min_avail_temp_celsius */
            optional_min_avail_temp_celsius?: "min_avail_temp_celsius";

            /** ClimateState optional_max_avail_temp_celsius */
            optional_max_avail_temp_celsius?: "max_avail_temp_celsius";

            /** ClimateState optional_seat_heater_left */
            optional_seat_heater_left?: "seat_heater_left";

            /** ClimateState optional_seat_heater_right */
            optional_seat_heater_right?: "seat_heater_right";

            /** ClimateState optional_seat_heater_rear_left */
            optional_seat_heater_rear_left?: "seat_heater_rear_left";

            /** ClimateState optional_seat_heater_rear_right */
            optional_seat_heater_rear_right?: "seat_heater_rear_right";

            /** ClimateState optional_seat_heater_rear_center */
            optional_seat_heater_rear_center?: "seat_heater_rear_center";

            /** ClimateState optional_seat_heater_rear_right_back */
            optional_seat_heater_rear_right_back?: "seat_heater_rear_right_back";

            /** ClimateState optional_seat_heater_rear_left_back */
            optional_seat_heater_rear_left_back?: "seat_heater_rear_left_back";

            /** ClimateState optional_seat_heater_third_row_right */
            optional_seat_heater_third_row_right?: "seat_heater_third_row_right";

            /** ClimateState optional_seat_heater_third_row_left */
            optional_seat_heater_third_row_left?: "seat_heater_third_row_left";

            /** ClimateState optional_battery_heater */
            optional_battery_heater?: "battery_heater";

            /** ClimateState optional_battery_heater_no_power */
            optional_battery_heater_no_power?: "battery_heater_no_power";

            /** ClimateState optional_steering_wheel_heater */
            optional_steering_wheel_heater?: "steering_wheel_heater";

            /** ClimateState optional_wiper_blade_heater */
            optional_wiper_blade_heater?: "wiper_blade_heater";

            /** ClimateState optional_side_mirror_heaters */
            optional_side_mirror_heaters?: "side_mirror_heaters";

            /** ClimateState optional_is_preconditioning */
            optional_is_preconditioning?: "is_preconditioning";

            /** ClimateState optional_remote_heater_control_enabled */
            optional_remote_heater_control_enabled?: "remote_heater_control_enabled";

            /** ClimateState optional_bioweapon_mode_on */
            optional_bioweapon_mode_on?: "bioweapon_mode_on";

            /** ClimateState optional_is_auto_conditioning_on */
            optional_is_auto_conditioning_on?: "is_auto_conditioning_on";

            /** ClimateState optional_auto_seat_climate_left */
            optional_auto_seat_climate_left?: "auto_seat_climate_left";

            /** ClimateState optional_auto_seat_climate_right */
            optional_auto_seat_climate_right?: "auto_seat_climate_right";

            /** ClimateState optional_seat_fan_front_left */
            optional_seat_fan_front_left?: "seat_fan_front_left";

            /** ClimateState optional_seat_fan_front_right */
            optional_seat_fan_front_right?: "seat_fan_front_right";

            /** ClimateState optional_allow_cabin_overheat_protection */
            optional_allow_cabin_overheat_protection?: "allow_cabin_overheat_protection";

            /** ClimateState optional_supports_fan_only_cabin_overheat_protection */
            optional_supports_fan_only_cabin_overheat_protection?: "supports_fan_only_cabin_overheat_protection";

            /** ClimateState optional_cabin_overheat_protection */
            optional_cabin_overheat_protection?: "cabin_overheat_protection";

            /** ClimateState optional_cabin_overheat_protection_actively_cooling */
            optional_cabin_overheat_protection_actively_cooling?: "cabin_overheat_protection_actively_cooling";

            /** ClimateState optional_cop_activation_temperature */
            optional_cop_activation_temperature?: "cop_activation_temperature";

            /** ClimateState optional_auto_steering_wheel_heat */
            optional_auto_steering_wheel_heat?: "auto_steering_wheel_heat";

            /** ClimateState optional_steering_wheel_heat_level */
            optional_steering_wheel_heat_level?: "steering_wheel_heat_level";

            /** ClimateState optional_hvac_auto_request */
            optional_hvac_auto_request?: "hvac_auto_request";

            /** ClimateState optional_cop_not_running_reason */
            optional_cop_not_running_reason?: "cop_not_running_reason";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ClimateState. */
        type $Shape = {
          inside_temp_celsius?: number|null;
          outside_temp_celsius?: number|null;
          driver_temp_setting?: number|null;
          passenger_temp_setting?: number|null;
          left_temp_direction?: number|null;
          right_temp_direction?: number|null;
          is_front_defroster_on?: boolean|null;
          is_rear_defroster_on?: boolean|null;
          fan_status?: number|null;
          is_climate_on?: boolean|null;
          min_avail_temp_celsius?: number|null;
          max_avail_temp_celsius?: number|null;
          seat_heater_left?: number|null;
          seat_heater_right?: number|null;
          seat_heater_rear_left?: number|null;
          seat_heater_rear_right?: number|null;
          seat_heater_rear_center?: number|null;
          seat_heater_rear_right_back?: number|null;
          seat_heater_rear_left_back?: number|null;
          seat_heater_third_row_right?: number|null;
          seat_heater_third_row_left?: number|null;
          battery_heater?: boolean|null;
          battery_heater_no_power?: boolean|null;
          steering_wheel_heater?: boolean|null;
          wiper_blade_heater?: boolean|null;
          side_mirror_heaters?: boolean|null;
          is_preconditioning?: boolean|null;
          remote_heater_control_enabled?: boolean|null;
          climate_keeper_mode?: CarServer.ClimateState.ClimateKeeperMode.$Shape|null;
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          bioweapon_mode_on?: boolean|null;
          defrost_mode?: CarServer.ClimateState.DefrostMode.$Shape|null;
          is_auto_conditioning_on?: boolean|null;
          auto_seat_climate_left?: boolean|null;
          auto_seat_climate_right?: boolean|null;
          seat_fan_front_left?: number|null;
          seat_fan_front_right?: number|null;
          allow_cabin_overheat_protection?: boolean|null;
          supports_fan_only_cabin_overheat_protection?: boolean|null;
          cabin_overheat_protection?: CarServer.ClimateState.CabinOverheatProtection_E|null;
          cabin_overheat_protection_actively_cooling?: boolean|null;
          cop_activation_temperature?: CarServer.ClimateState.CopActivationTemp|null;
          auto_steering_wheel_heat?: boolean|null;
          steering_wheel_heat_level?: CarServer.StwHeatLevel|null;
          hvac_auto_request?: CarServer.ClimateState.HvacAutoRequest|null;
          cop_not_running_reason?: CarServer.ClimateState.COPNotRunningReason|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_inside_temp_celsius?: undefined; inside_temp_celsius?: null }|{ optional_inside_temp_celsius?: "inside_temp_celsius"; inside_temp_celsius: number })
        ) & (
          ({ optional_outside_temp_celsius?: undefined; outside_temp_celsius?: null }|{ optional_outside_temp_celsius?: "outside_temp_celsius"; outside_temp_celsius: number })
        ) & (
          ({ optional_driver_temp_setting?: undefined; driver_temp_setting?: null }|{ optional_driver_temp_setting?: "driver_temp_setting"; driver_temp_setting: number })
        ) & (
          ({ optional_passenger_temp_setting?: undefined; passenger_temp_setting?: null }|{ optional_passenger_temp_setting?: "passenger_temp_setting"; passenger_temp_setting: number })
        ) & (
          ({ optional_left_temp_direction?: undefined; left_temp_direction?: null }|{ optional_left_temp_direction?: "left_temp_direction"; left_temp_direction: number })
        ) & (
          ({ optional_right_temp_direction?: undefined; right_temp_direction?: null }|{ optional_right_temp_direction?: "right_temp_direction"; right_temp_direction: number })
        ) & (
          ({ optional_is_front_defroster_on?: undefined; is_front_defroster_on?: null }|{ optional_is_front_defroster_on?: "is_front_defroster_on"; is_front_defroster_on: boolean })
        ) & (
          ({ optional_is_rear_defroster_on?: undefined; is_rear_defroster_on?: null }|{ optional_is_rear_defroster_on?: "is_rear_defroster_on"; is_rear_defroster_on: boolean })
        ) & (
          ({ optional_fan_status?: undefined; fan_status?: null }|{ optional_fan_status?: "fan_status"; fan_status: number })
        ) & (
          ({ optional_is_climate_on?: undefined; is_climate_on?: null }|{ optional_is_climate_on?: "is_climate_on"; is_climate_on: boolean })
        ) & (
          ({ optional_min_avail_temp_celsius?: undefined; min_avail_temp_celsius?: null }|{ optional_min_avail_temp_celsius?: "min_avail_temp_celsius"; min_avail_temp_celsius: number })
        ) & (
          ({ optional_max_avail_temp_celsius?: undefined; max_avail_temp_celsius?: null }|{ optional_max_avail_temp_celsius?: "max_avail_temp_celsius"; max_avail_temp_celsius: number })
        ) & (
          ({ optional_seat_heater_left?: undefined; seat_heater_left?: null }|{ optional_seat_heater_left?: "seat_heater_left"; seat_heater_left: number })
        ) & (
          ({ optional_seat_heater_right?: undefined; seat_heater_right?: null }|{ optional_seat_heater_right?: "seat_heater_right"; seat_heater_right: number })
        ) & (
          ({ optional_seat_heater_rear_left?: undefined; seat_heater_rear_left?: null }|{ optional_seat_heater_rear_left?: "seat_heater_rear_left"; seat_heater_rear_left: number })
        ) & (
          ({ optional_seat_heater_rear_right?: undefined; seat_heater_rear_right?: null }|{ optional_seat_heater_rear_right?: "seat_heater_rear_right"; seat_heater_rear_right: number })
        ) & (
          ({ optional_seat_heater_rear_center?: undefined; seat_heater_rear_center?: null }|{ optional_seat_heater_rear_center?: "seat_heater_rear_center"; seat_heater_rear_center: number })
        ) & (
          ({ optional_seat_heater_rear_right_back?: undefined; seat_heater_rear_right_back?: null }|{ optional_seat_heater_rear_right_back?: "seat_heater_rear_right_back"; seat_heater_rear_right_back: number })
        ) & (
          ({ optional_seat_heater_rear_left_back?: undefined; seat_heater_rear_left_back?: null }|{ optional_seat_heater_rear_left_back?: "seat_heater_rear_left_back"; seat_heater_rear_left_back: number })
        ) & (
          ({ optional_seat_heater_third_row_right?: undefined; seat_heater_third_row_right?: null }|{ optional_seat_heater_third_row_right?: "seat_heater_third_row_right"; seat_heater_third_row_right: number })
        ) & (
          ({ optional_seat_heater_third_row_left?: undefined; seat_heater_third_row_left?: null }|{ optional_seat_heater_third_row_left?: "seat_heater_third_row_left"; seat_heater_third_row_left: number })
        ) & (
          ({ optional_battery_heater?: undefined; battery_heater?: null }|{ optional_battery_heater?: "battery_heater"; battery_heater: boolean })
        ) & (
          ({ optional_battery_heater_no_power?: undefined; battery_heater_no_power?: null }|{ optional_battery_heater_no_power?: "battery_heater_no_power"; battery_heater_no_power: boolean })
        ) & (
          ({ optional_steering_wheel_heater?: undefined; steering_wheel_heater?: null }|{ optional_steering_wheel_heater?: "steering_wheel_heater"; steering_wheel_heater: boolean })
        ) & (
          ({ optional_wiper_blade_heater?: undefined; wiper_blade_heater?: null }|{ optional_wiper_blade_heater?: "wiper_blade_heater"; wiper_blade_heater: boolean })
        ) & (
          ({ optional_side_mirror_heaters?: undefined; side_mirror_heaters?: null }|{ optional_side_mirror_heaters?: "side_mirror_heaters"; side_mirror_heaters: boolean })
        ) & (
          ({ optional_is_preconditioning?: undefined; is_preconditioning?: null }|{ optional_is_preconditioning?: "is_preconditioning"; is_preconditioning: boolean })
        ) & (
          ({ optional_remote_heater_control_enabled?: undefined; remote_heater_control_enabled?: null }|{ optional_remote_heater_control_enabled?: "remote_heater_control_enabled"; remote_heater_control_enabled: boolean })
        ) & (
          ({ optional_bioweapon_mode_on?: undefined; bioweapon_mode_on?: null }|{ optional_bioweapon_mode_on?: "bioweapon_mode_on"; bioweapon_mode_on: boolean })
        ) & (
          ({ optional_is_auto_conditioning_on?: undefined; is_auto_conditioning_on?: null }|{ optional_is_auto_conditioning_on?: "is_auto_conditioning_on"; is_auto_conditioning_on: boolean })
        ) & (
          ({ optional_auto_seat_climate_left?: undefined; auto_seat_climate_left?: null }|{ optional_auto_seat_climate_left?: "auto_seat_climate_left"; auto_seat_climate_left: boolean })
        ) & (
          ({ optional_auto_seat_climate_right?: undefined; auto_seat_climate_right?: null }|{ optional_auto_seat_climate_right?: "auto_seat_climate_right"; auto_seat_climate_right: boolean })
        ) & (
          ({ optional_seat_fan_front_left?: undefined; seat_fan_front_left?: null }|{ optional_seat_fan_front_left?: "seat_fan_front_left"; seat_fan_front_left: number })
        ) & (
          ({ optional_seat_fan_front_right?: undefined; seat_fan_front_right?: null }|{ optional_seat_fan_front_right?: "seat_fan_front_right"; seat_fan_front_right: number })
        ) & (
          ({ optional_allow_cabin_overheat_protection?: undefined; allow_cabin_overheat_protection?: null }|{ optional_allow_cabin_overheat_protection?: "allow_cabin_overheat_protection"; allow_cabin_overheat_protection: boolean })
        ) & (
          ({ optional_supports_fan_only_cabin_overheat_protection?: undefined; supports_fan_only_cabin_overheat_protection?: null }|{ optional_supports_fan_only_cabin_overheat_protection?: "supports_fan_only_cabin_overheat_protection"; supports_fan_only_cabin_overheat_protection: boolean })
        ) & (
          ({ optional_cabin_overheat_protection?: undefined; cabin_overheat_protection?: null }|{ optional_cabin_overheat_protection?: "cabin_overheat_protection"; cabin_overheat_protection: CarServer.ClimateState.CabinOverheatProtection_E })
        ) & (
          ({ optional_cabin_overheat_protection_actively_cooling?: undefined; cabin_overheat_protection_actively_cooling?: null }|{ optional_cabin_overheat_protection_actively_cooling?: "cabin_overheat_protection_actively_cooling"; cabin_overheat_protection_actively_cooling: boolean })
        ) & (
          ({ optional_cop_activation_temperature?: undefined; cop_activation_temperature?: null }|{ optional_cop_activation_temperature?: "cop_activation_temperature"; cop_activation_temperature: CarServer.ClimateState.CopActivationTemp })
        ) & (
          ({ optional_auto_steering_wheel_heat?: undefined; auto_steering_wheel_heat?: null }|{ optional_auto_steering_wheel_heat?: "auto_steering_wheel_heat"; auto_steering_wheel_heat: boolean })
        ) & (
          ({ optional_steering_wheel_heat_level?: undefined; steering_wheel_heat_level?: null }|{ optional_steering_wheel_heat_level?: "steering_wheel_heat_level"; steering_wheel_heat_level: CarServer.StwHeatLevel })
        ) & (
          ({ optional_hvac_auto_request?: undefined; hvac_auto_request?: null }|{ optional_hvac_auto_request?: "hvac_auto_request"; hvac_auto_request: CarServer.ClimateState.HvacAutoRequest })
        ) & (
          ({ optional_cop_not_running_reason?: undefined; cop_not_running_reason?: null }|{ optional_cop_not_running_reason?: "cop_not_running_reason"; cop_not_running_reason: CarServer.ClimateState.COPNotRunningReason })
        );

        /**
         * Properties of a ClimateKeeperMode.
         * @deprecated Use CarServer.ClimateState.ClimateKeeperMode.$Properties instead.
         */
        interface IClimateKeeperMode extends CarServer.ClimateState.ClimateKeeperMode.$Properties {
        }

        /** Represents a ClimateKeeperMode. */
        class ClimateKeeperMode {

            /**
             * Constructs a new ClimateKeeperMode.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ClimateState.ClimateKeeperMode.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ClimateKeeperMode Unknown. */
            Unknown?: (CarServer.Void.$Properties|null);

            /** ClimateKeeperMode Off. */
            Off?: (CarServer.Void.$Properties|null);

            /** ClimateKeeperMode On. */
            On?: (CarServer.Void.$Properties|null);

            /** ClimateKeeperMode Dog. */
            Dog?: (CarServer.Void.$Properties|null);

            /** ClimateKeeperMode Party. */
            Party?: (CarServer.Void.$Properties|null);

            /** ClimateKeeperMode type. */
            type?: ("Unknown"|"Off"|"On"|"Dog"|"Party");

            /**
             * Encodes the specified ClimateKeeperMode message. Does not implicitly {@link CarServer.ClimateState.ClimateKeeperMode.verify|verify} messages.
             * @param m ClimateKeeperMode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ClimateState.ClimateKeeperMode.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClimateKeeperMode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ClimateState.ClimateKeeperMode & CarServer.ClimateState.ClimateKeeperMode.$Shape} ClimateKeeperMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClimateState.ClimateKeeperMode & CarServer.ClimateState.ClimateKeeperMode.$Shape;

            /**
             * Gets the type url for ClimateKeeperMode
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ClimateKeeperMode {

            /** Properties of a ClimateKeeperMode. */
            interface $Properties {

                /** ClimateKeeperMode Unknown */
                Unknown?: (CarServer.Void.$Properties|null);

                /** ClimateKeeperMode Off */
                Off?: (CarServer.Void.$Properties|null);

                /** ClimateKeeperMode On */
                On?: (CarServer.Void.$Properties|null);

                /** ClimateKeeperMode Dog */
                Dog?: (CarServer.Void.$Properties|null);

                /** ClimateKeeperMode Party */
                Party?: (CarServer.Void.$Properties|null);

                /** ClimateKeeperMode type */
                type?: ("Unknown"|"Off"|"On"|"Dog"|"Party");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a ClimateKeeperMode. */
            type $Shape = {
              Unknown?: CarServer.Void.$Shape|null;
              Off?: CarServer.Void.$Shape|null;
              On?: CarServer.Void.$Shape|null;
              Dog?: CarServer.Void.$Shape|null;
              Party?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Unknown?: null; Off?: null; On?: null; Dog?: null; Party?: null }|{ type?: "Unknown"; Unknown: CarServer.Void.$Shape; Off?: null; On?: null; Dog?: null; Party?: null }|{ type?: "Off"; Unknown?: null; Off: CarServer.Void.$Shape; On?: null; Dog?: null; Party?: null }|{ type?: "On"; Unknown?: null; Off?: null; On: CarServer.Void.$Shape; Dog?: null; Party?: null }|{ type?: "Dog"; Unknown?: null; Off?: null; On?: null; Dog: CarServer.Void.$Shape; Party?: null }|{ type?: "Party"; Unknown?: null; Off?: null; On?: null; Dog?: null; Party: CarServer.Void.$Shape })
            );
        }

        /**
         * Properties of a DefrostMode.
         * @deprecated Use CarServer.ClimateState.DefrostMode.$Properties instead.
         */
        interface IDefrostMode extends CarServer.ClimateState.DefrostMode.$Properties {
        }

        /** Represents a DefrostMode. */
        class DefrostMode {

            /**
             * Constructs a new DefrostMode.
             * @param [p] Properties to set
             */
            constructor(p?: CarServer.ClimateState.DefrostMode.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DefrostMode Off. */
            Off?: (CarServer.Void.$Properties|null);

            /** DefrostMode Normal. */
            Normal?: (CarServer.Void.$Properties|null);

            /** DefrostMode Max. */
            Max?: (CarServer.Void.$Properties|null);

            /** DefrostMode type. */
            type?: ("Off"|"Normal"|"Max");

            /**
             * Encodes the specified DefrostMode message. Does not implicitly {@link CarServer.ClimateState.DefrostMode.verify|verify} messages.
             * @param m DefrostMode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: CarServer.ClimateState.DefrostMode.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DefrostMode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {CarServer.ClimateState.DefrostMode & CarServer.ClimateState.DefrostMode.$Shape} DefrostMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ClimateState.DefrostMode & CarServer.ClimateState.DefrostMode.$Shape;

            /**
             * Gets the type url for DefrostMode
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DefrostMode {

            /** Properties of a DefrostMode. */
            interface $Properties {

                /** DefrostMode Off */
                Off?: (CarServer.Void.$Properties|null);

                /** DefrostMode Normal */
                Normal?: (CarServer.Void.$Properties|null);

                /** DefrostMode Max */
                Max?: (CarServer.Void.$Properties|null);

                /** DefrostMode type */
                type?: ("Off"|"Normal"|"Max");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a DefrostMode. */
            type $Shape = {
              Off?: CarServer.Void.$Shape|null;
              Normal?: CarServer.Void.$Shape|null;
              Max?: CarServer.Void.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ type?: undefined; Off?: null; Normal?: null; Max?: null }|{ type?: "Off"; Off: CarServer.Void.$Shape; Normal?: null; Max?: null }|{ type?: "Normal"; Off?: null; Normal: CarServer.Void.$Shape; Max?: null }|{ type?: "Max"; Off?: null; Normal?: null; Max: CarServer.Void.$Shape })
            );
        }

        /** HvacAutoRequest enum. */
        enum HvacAutoRequest {

            /** HvacAutoRequestOn value */
            HvacAutoRequestOn = 0,

            /** HvacAutoRequestOverride value */
            HvacAutoRequestOverride = 1
        }

        /** CabinOverheatProtection_E enum. */
        enum CabinOverheatProtection_E {

            /** CabinOverheatProtectionOff value */
            CabinOverheatProtectionOff = 0,

            /** CabinOverheatProtectionOn value */
            CabinOverheatProtectionOn = 1,

            /** CabinOverheatProtectionFanOnly value */
            CabinOverheatProtectionFanOnly = 2
        }

        /** SeatHeaterLevel_E enum. */
        enum SeatHeaterLevel_E {

            /** SeatHeaterLevelOff value */
            SeatHeaterLevelOff = 0,

            /** SeatHeaterLevelLow value */
            SeatHeaterLevelLow = 1,

            /** SeatHeaterLevelMed value */
            SeatHeaterLevelMed = 2,

            /** SeatHeaterLevelHigh value */
            SeatHeaterLevelHigh = 3
        }

        /** SeatCoolingLevel_E enum. */
        enum SeatCoolingLevel_E {

            /** SeatCoolingLevelOff value */
            SeatCoolingLevelOff = 0,

            /** SeatCoolingLevelLow value */
            SeatCoolingLevelLow = 1,

            /** SeatCoolingLevelMed value */
            SeatCoolingLevelMed = 2,

            /** SeatCoolingLevelHigh value */
            SeatCoolingLevelHigh = 3
        }

        /** CopActivationTemp enum. */
        enum CopActivationTemp {

            /** CopActivationTempUnspecified value */
            CopActivationTempUnspecified = 0,

            /** CopActivationTempLow value */
            CopActivationTempLow = 1,

            /** CopActivationTempMedium value */
            CopActivationTempMedium = 2,

            /** CopActivationTempHigh value */
            CopActivationTempHigh = 3
        }

        /** COPNotRunningReason enum. */
        enum COPNotRunningReason {

            /** COPNotRunningReasonNoReason value */
            COPNotRunningReasonNoReason = 0,

            /** COPNotRunningReasonUserInteraction value */
            COPNotRunningReasonUserInteraction = 1,

            /** COPNotRunningReasonEnergyConsumptionReached value */
            COPNotRunningReasonEnergyConsumptionReached = 2,

            /** COPNotRunningReasonTimeout value */
            COPNotRunningReasonTimeout = 3,

            /** COPNotRunningReasonLowSolarLoad value */
            COPNotRunningReasonLowSolarLoad = 4,

            /** COPNotRunningReasonFault value */
            COPNotRunningReasonFault = 5,

            /** COPNotRunningReasonCabinBelowThreshold value */
            COPNotRunningReasonCabinBelowThreshold = 6
        }
    }

    /**
     * Properties of a TirePressureState.
     * @deprecated Use CarServer.TirePressureState.$Properties instead.
     */
    interface ITirePressureState extends CarServer.TirePressureState.$Properties {
    }

    /** Represents a TirePressureState. */
    class TirePressureState {

        /**
         * Constructs a new TirePressureState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.TirePressureState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TirePressureState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** TirePressureState tpms_pressure_fl. */
        tpms_pressure_fl?: (number|null);

        /** TirePressureState tpms_pressure_fr. */
        tpms_pressure_fr?: (number|null);

        /** TirePressureState tpms_pressure_rl. */
        tpms_pressure_rl?: (number|null);

        /** TirePressureState tpms_pressure_rr. */
        tpms_pressure_rr?: (number|null);

        /** TirePressureState tpms_last_seen_pressure_time_fl. */
        tpms_last_seen_pressure_time_fl?: (google.protobuf.Timestamp.$Properties|null);

        /** TirePressureState tpms_last_seen_pressure_time_fr. */
        tpms_last_seen_pressure_time_fr?: (google.protobuf.Timestamp.$Properties|null);

        /** TirePressureState tpms_last_seen_pressure_time_rl. */
        tpms_last_seen_pressure_time_rl?: (google.protobuf.Timestamp.$Properties|null);

        /** TirePressureState tpms_last_seen_pressure_time_rr. */
        tpms_last_seen_pressure_time_rr?: (google.protobuf.Timestamp.$Properties|null);

        /** TirePressureState tpms_hard_warning_fl. */
        tpms_hard_warning_fl?: (boolean|null);

        /** TirePressureState tpms_hard_warning_fr. */
        tpms_hard_warning_fr?: (boolean|null);

        /** TirePressureState tpms_hard_warning_rl. */
        tpms_hard_warning_rl?: (boolean|null);

        /** TirePressureState tpms_hard_warning_rr. */
        tpms_hard_warning_rr?: (boolean|null);

        /** TirePressureState tpms_soft_warning_fl. */
        tpms_soft_warning_fl?: (boolean|null);

        /** TirePressureState tpms_soft_warning_fr. */
        tpms_soft_warning_fr?: (boolean|null);

        /** TirePressureState tpms_soft_warning_rl. */
        tpms_soft_warning_rl?: (boolean|null);

        /** TirePressureState tpms_soft_warning_rr. */
        tpms_soft_warning_rr?: (boolean|null);

        /** TirePressureState tpms_rcp_front_value. */
        tpms_rcp_front_value?: (number|null);

        /** TirePressureState tpms_rcp_rear_value. */
        tpms_rcp_rear_value?: (number|null);

        /** TirePressureState optional_tpms_pressure_fl. */
        optional_tpms_pressure_fl?: "tpms_pressure_fl";

        /** TirePressureState optional_tpms_pressure_fr. */
        optional_tpms_pressure_fr?: "tpms_pressure_fr";

        /** TirePressureState optional_tpms_pressure_rl. */
        optional_tpms_pressure_rl?: "tpms_pressure_rl";

        /** TirePressureState optional_tpms_pressure_rr. */
        optional_tpms_pressure_rr?: "tpms_pressure_rr";

        /** TirePressureState optional_tpms_hard_warning_fl. */
        optional_tpms_hard_warning_fl?: "tpms_hard_warning_fl";

        /** TirePressureState optional_tpms_hard_warning_fr. */
        optional_tpms_hard_warning_fr?: "tpms_hard_warning_fr";

        /** TirePressureState optional_tpms_hard_warning_rl. */
        optional_tpms_hard_warning_rl?: "tpms_hard_warning_rl";

        /** TirePressureState optional_tpms_hard_warning_rr. */
        optional_tpms_hard_warning_rr?: "tpms_hard_warning_rr";

        /** TirePressureState optional_tpms_soft_warning_fl. */
        optional_tpms_soft_warning_fl?: "tpms_soft_warning_fl";

        /** TirePressureState optional_tpms_soft_warning_fr. */
        optional_tpms_soft_warning_fr?: "tpms_soft_warning_fr";

        /** TirePressureState optional_tpms_soft_warning_rl. */
        optional_tpms_soft_warning_rl?: "tpms_soft_warning_rl";

        /** TirePressureState optional_tpms_soft_warning_rr. */
        optional_tpms_soft_warning_rr?: "tpms_soft_warning_rr";

        /** TirePressureState optional_tpms_rcp_front_value. */
        optional_tpms_rcp_front_value?: "tpms_rcp_front_value";

        /** TirePressureState optional_tpms_rcp_rear_value. */
        optional_tpms_rcp_rear_value?: "tpms_rcp_rear_value";

        /**
         * Encodes the specified TirePressureState message. Does not implicitly {@link CarServer.TirePressureState.verify|verify} messages.
         * @param m TirePressureState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.TirePressureState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TirePressureState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.TirePressureState & CarServer.TirePressureState.$Shape} TirePressureState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.TirePressureState & CarServer.TirePressureState.$Shape;

        /**
         * Gets the type url for TirePressureState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TirePressureState {

        /** Properties of a TirePressureState. */
        interface $Properties {

            /** TirePressureState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** TirePressureState tpms_pressure_fl */
            tpms_pressure_fl?: (number|null);

            /** TirePressureState tpms_pressure_fr */
            tpms_pressure_fr?: (number|null);

            /** TirePressureState tpms_pressure_rl */
            tpms_pressure_rl?: (number|null);

            /** TirePressureState tpms_pressure_rr */
            tpms_pressure_rr?: (number|null);

            /** TirePressureState tpms_last_seen_pressure_time_fl */
            tpms_last_seen_pressure_time_fl?: (google.protobuf.Timestamp.$Properties|null);

            /** TirePressureState tpms_last_seen_pressure_time_fr */
            tpms_last_seen_pressure_time_fr?: (google.protobuf.Timestamp.$Properties|null);

            /** TirePressureState tpms_last_seen_pressure_time_rl */
            tpms_last_seen_pressure_time_rl?: (google.protobuf.Timestamp.$Properties|null);

            /** TirePressureState tpms_last_seen_pressure_time_rr */
            tpms_last_seen_pressure_time_rr?: (google.protobuf.Timestamp.$Properties|null);

            /** TirePressureState tpms_hard_warning_fl */
            tpms_hard_warning_fl?: (boolean|null);

            /** TirePressureState tpms_hard_warning_fr */
            tpms_hard_warning_fr?: (boolean|null);

            /** TirePressureState tpms_hard_warning_rl */
            tpms_hard_warning_rl?: (boolean|null);

            /** TirePressureState tpms_hard_warning_rr */
            tpms_hard_warning_rr?: (boolean|null);

            /** TirePressureState tpms_soft_warning_fl */
            tpms_soft_warning_fl?: (boolean|null);

            /** TirePressureState tpms_soft_warning_fr */
            tpms_soft_warning_fr?: (boolean|null);

            /** TirePressureState tpms_soft_warning_rl */
            tpms_soft_warning_rl?: (boolean|null);

            /** TirePressureState tpms_soft_warning_rr */
            tpms_soft_warning_rr?: (boolean|null);

            /** TirePressureState tpms_rcp_front_value */
            tpms_rcp_front_value?: (number|null);

            /** TirePressureState tpms_rcp_rear_value */
            tpms_rcp_rear_value?: (number|null);

            /** TirePressureState optional_tpms_pressure_fl */
            optional_tpms_pressure_fl?: "tpms_pressure_fl";

            /** TirePressureState optional_tpms_pressure_fr */
            optional_tpms_pressure_fr?: "tpms_pressure_fr";

            /** TirePressureState optional_tpms_pressure_rl */
            optional_tpms_pressure_rl?: "tpms_pressure_rl";

            /** TirePressureState optional_tpms_pressure_rr */
            optional_tpms_pressure_rr?: "tpms_pressure_rr";

            /** TirePressureState optional_tpms_hard_warning_fl */
            optional_tpms_hard_warning_fl?: "tpms_hard_warning_fl";

            /** TirePressureState optional_tpms_hard_warning_fr */
            optional_tpms_hard_warning_fr?: "tpms_hard_warning_fr";

            /** TirePressureState optional_tpms_hard_warning_rl */
            optional_tpms_hard_warning_rl?: "tpms_hard_warning_rl";

            /** TirePressureState optional_tpms_hard_warning_rr */
            optional_tpms_hard_warning_rr?: "tpms_hard_warning_rr";

            /** TirePressureState optional_tpms_soft_warning_fl */
            optional_tpms_soft_warning_fl?: "tpms_soft_warning_fl";

            /** TirePressureState optional_tpms_soft_warning_fr */
            optional_tpms_soft_warning_fr?: "tpms_soft_warning_fr";

            /** TirePressureState optional_tpms_soft_warning_rl */
            optional_tpms_soft_warning_rl?: "tpms_soft_warning_rl";

            /** TirePressureState optional_tpms_soft_warning_rr */
            optional_tpms_soft_warning_rr?: "tpms_soft_warning_rr";

            /** TirePressureState optional_tpms_rcp_front_value */
            optional_tpms_rcp_front_value?: "tpms_rcp_front_value";

            /** TirePressureState optional_tpms_rcp_rear_value */
            optional_tpms_rcp_rear_value?: "tpms_rcp_rear_value";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a TirePressureState. */
        type $Shape = {
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          tpms_pressure_fl?: number|null;
          tpms_pressure_fr?: number|null;
          tpms_pressure_rl?: number|null;
          tpms_pressure_rr?: number|null;
          tpms_last_seen_pressure_time_fl?: google.protobuf.Timestamp.$Shape|null;
          tpms_last_seen_pressure_time_fr?: google.protobuf.Timestamp.$Shape|null;
          tpms_last_seen_pressure_time_rl?: google.protobuf.Timestamp.$Shape|null;
          tpms_last_seen_pressure_time_rr?: google.protobuf.Timestamp.$Shape|null;
          tpms_hard_warning_fl?: boolean|null;
          tpms_hard_warning_fr?: boolean|null;
          tpms_hard_warning_rl?: boolean|null;
          tpms_hard_warning_rr?: boolean|null;
          tpms_soft_warning_fl?: boolean|null;
          tpms_soft_warning_fr?: boolean|null;
          tpms_soft_warning_rl?: boolean|null;
          tpms_soft_warning_rr?: boolean|null;
          tpms_rcp_front_value?: number|null;
          tpms_rcp_rear_value?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_tpms_pressure_fl?: undefined; tpms_pressure_fl?: null }|{ optional_tpms_pressure_fl?: "tpms_pressure_fl"; tpms_pressure_fl: number })
        ) & (
          ({ optional_tpms_pressure_fr?: undefined; tpms_pressure_fr?: null }|{ optional_tpms_pressure_fr?: "tpms_pressure_fr"; tpms_pressure_fr: number })
        ) & (
          ({ optional_tpms_pressure_rl?: undefined; tpms_pressure_rl?: null }|{ optional_tpms_pressure_rl?: "tpms_pressure_rl"; tpms_pressure_rl: number })
        ) & (
          ({ optional_tpms_pressure_rr?: undefined; tpms_pressure_rr?: null }|{ optional_tpms_pressure_rr?: "tpms_pressure_rr"; tpms_pressure_rr: number })
        ) & (
          ({ optional_tpms_hard_warning_fl?: undefined; tpms_hard_warning_fl?: null }|{ optional_tpms_hard_warning_fl?: "tpms_hard_warning_fl"; tpms_hard_warning_fl: boolean })
        ) & (
          ({ optional_tpms_hard_warning_fr?: undefined; tpms_hard_warning_fr?: null }|{ optional_tpms_hard_warning_fr?: "tpms_hard_warning_fr"; tpms_hard_warning_fr: boolean })
        ) & (
          ({ optional_tpms_hard_warning_rl?: undefined; tpms_hard_warning_rl?: null }|{ optional_tpms_hard_warning_rl?: "tpms_hard_warning_rl"; tpms_hard_warning_rl: boolean })
        ) & (
          ({ optional_tpms_hard_warning_rr?: undefined; tpms_hard_warning_rr?: null }|{ optional_tpms_hard_warning_rr?: "tpms_hard_warning_rr"; tpms_hard_warning_rr: boolean })
        ) & (
          ({ optional_tpms_soft_warning_fl?: undefined; tpms_soft_warning_fl?: null }|{ optional_tpms_soft_warning_fl?: "tpms_soft_warning_fl"; tpms_soft_warning_fl: boolean })
        ) & (
          ({ optional_tpms_soft_warning_fr?: undefined; tpms_soft_warning_fr?: null }|{ optional_tpms_soft_warning_fr?: "tpms_soft_warning_fr"; tpms_soft_warning_fr: boolean })
        ) & (
          ({ optional_tpms_soft_warning_rl?: undefined; tpms_soft_warning_rl?: null }|{ optional_tpms_soft_warning_rl?: "tpms_soft_warning_rl"; tpms_soft_warning_rl: boolean })
        ) & (
          ({ optional_tpms_soft_warning_rr?: undefined; tpms_soft_warning_rr?: null }|{ optional_tpms_soft_warning_rr?: "tpms_soft_warning_rr"; tpms_soft_warning_rr: boolean })
        ) & (
          ({ optional_tpms_rcp_front_value?: undefined; tpms_rcp_front_value?: null }|{ optional_tpms_rcp_front_value?: "tpms_rcp_front_value"; tpms_rcp_front_value: number })
        ) & (
          ({ optional_tpms_rcp_rear_value?: undefined; tpms_rcp_rear_value?: null }|{ optional_tpms_rcp_rear_value?: "tpms_rcp_rear_value"; tpms_rcp_rear_value: number })
        );
    }

    /**
     * Properties of a MediaState.
     * @deprecated Use CarServer.MediaState.$Properties instead.
     */
    interface IMediaState extends CarServer.MediaState.$Properties {
    }

    /** Represents a MediaState. */
    class MediaState {

        /**
         * Constructs a new MediaState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MediaState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** MediaState remote_control_enabled. */
        remote_control_enabled?: (boolean|null);

        /** MediaState now_playing_artist. */
        now_playing_artist?: (string|null);

        /** MediaState now_playing_title. */
        now_playing_title?: (string|null);

        /** MediaState audio_volume. */
        audio_volume?: (number|null);

        /** MediaState audio_volume_increment. */
        audio_volume_increment?: (number|null);

        /** MediaState audio_volume_max. */
        audio_volume_max?: (number|null);

        /** MediaState now_playing_source. */
        now_playing_source?: (CarServer.MediaSourceType|null);

        /** MediaState media_playback_status. */
        media_playback_status?: (CarServer.MediaPlaybackStatus|null);

        /** MediaState optional_remote_control_enabled. */
        optional_remote_control_enabled?: "remote_control_enabled";

        /** MediaState optional_now_playing_artist. */
        optional_now_playing_artist?: "now_playing_artist";

        /** MediaState optional_now_playing_title. */
        optional_now_playing_title?: "now_playing_title";

        /** MediaState optional_audio_volume. */
        optional_audio_volume?: "audio_volume";

        /** MediaState optional_audio_volume_increment. */
        optional_audio_volume_increment?: "audio_volume_increment";

        /** MediaState optional_audio_volume_max. */
        optional_audio_volume_max?: "audio_volume_max";

        /** MediaState optional_now_playing_source. */
        optional_now_playing_source?: "now_playing_source";

        /** MediaState optional_media_playback_status. */
        optional_media_playback_status?: "media_playback_status";

        /**
         * Encodes the specified MediaState message. Does not implicitly {@link CarServer.MediaState.verify|verify} messages.
         * @param m MediaState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaState & CarServer.MediaState.$Shape} MediaState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaState & CarServer.MediaState.$Shape;

        /**
         * Gets the type url for MediaState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaState {

        /** Properties of a MediaState. */
        interface $Properties {

            /** MediaState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** MediaState remote_control_enabled */
            remote_control_enabled?: (boolean|null);

            /** MediaState now_playing_artist */
            now_playing_artist?: (string|null);

            /** MediaState now_playing_title */
            now_playing_title?: (string|null);

            /** MediaState audio_volume */
            audio_volume?: (number|null);

            /** MediaState audio_volume_increment */
            audio_volume_increment?: (number|null);

            /** MediaState audio_volume_max */
            audio_volume_max?: (number|null);

            /** MediaState now_playing_source */
            now_playing_source?: (CarServer.MediaSourceType|null);

            /** MediaState media_playback_status */
            media_playback_status?: (CarServer.MediaPlaybackStatus|null);

            /** MediaState optional_remote_control_enabled */
            optional_remote_control_enabled?: "remote_control_enabled";

            /** MediaState optional_now_playing_artist */
            optional_now_playing_artist?: "now_playing_artist";

            /** MediaState optional_now_playing_title */
            optional_now_playing_title?: "now_playing_title";

            /** MediaState optional_audio_volume */
            optional_audio_volume?: "audio_volume";

            /** MediaState optional_audio_volume_increment */
            optional_audio_volume_increment?: "audio_volume_increment";

            /** MediaState optional_audio_volume_max */
            optional_audio_volume_max?: "audio_volume_max";

            /** MediaState optional_now_playing_source */
            optional_now_playing_source?: "now_playing_source";

            /** MediaState optional_media_playback_status */
            optional_media_playback_status?: "media_playback_status";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a MediaState. */
        type $Shape = {
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          remote_control_enabled?: boolean|null;
          now_playing_artist?: string|null;
          now_playing_title?: string|null;
          audio_volume?: number|null;
          audio_volume_increment?: number|null;
          audio_volume_max?: number|null;
          now_playing_source?: CarServer.MediaSourceType|null;
          media_playback_status?: CarServer.MediaPlaybackStatus|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_remote_control_enabled?: undefined; remote_control_enabled?: null }|{ optional_remote_control_enabled?: "remote_control_enabled"; remote_control_enabled: boolean })
        ) & (
          ({ optional_now_playing_artist?: undefined; now_playing_artist?: null }|{ optional_now_playing_artist?: "now_playing_artist"; now_playing_artist: string })
        ) & (
          ({ optional_now_playing_title?: undefined; now_playing_title?: null }|{ optional_now_playing_title?: "now_playing_title"; now_playing_title: string })
        ) & (
          ({ optional_audio_volume?: undefined; audio_volume?: null }|{ optional_audio_volume?: "audio_volume"; audio_volume: number })
        ) & (
          ({ optional_audio_volume_increment?: undefined; audio_volume_increment?: null }|{ optional_audio_volume_increment?: "audio_volume_increment"; audio_volume_increment: number })
        ) & (
          ({ optional_audio_volume_max?: undefined; audio_volume_max?: null }|{ optional_audio_volume_max?: "audio_volume_max"; audio_volume_max: number })
        ) & (
          ({ optional_now_playing_source?: undefined; now_playing_source?: null }|{ optional_now_playing_source?: "now_playing_source"; now_playing_source: CarServer.MediaSourceType })
        ) & (
          ({ optional_media_playback_status?: undefined; media_playback_status?: null }|{ optional_media_playback_status?: "media_playback_status"; media_playback_status: CarServer.MediaPlaybackStatus })
        );
    }

    /**
     * Properties of a MediaDetailState.
     * @deprecated Use CarServer.MediaDetailState.$Properties instead.
     */
    interface IMediaDetailState extends CarServer.MediaDetailState.$Properties {
    }

    /** Represents a MediaDetailState. */
    class MediaDetailState {

        /**
         * Constructs a new MediaDetailState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.MediaDetailState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MediaDetailState timestamp. */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** MediaDetailState now_playing_duration. */
        now_playing_duration?: (number|null);

        /** MediaDetailState now_playing_elapsed. */
        now_playing_elapsed?: (number|null);

        /** MediaDetailState now_playing_source_string. */
        now_playing_source_string?: (string|null);

        /** MediaDetailState now_playing_album. */
        now_playing_album?: (string|null);

        /** MediaDetailState now_playing_station. */
        now_playing_station?: (string|null);

        /** MediaDetailState a2dp_source_name. */
        a2dp_source_name?: (string|null);

        /** MediaDetailState optional_now_playing_duration. */
        optional_now_playing_duration?: "now_playing_duration";

        /** MediaDetailState optional_now_playing_elapsed. */
        optional_now_playing_elapsed?: "now_playing_elapsed";

        /** MediaDetailState optional_now_playing_source_string. */
        optional_now_playing_source_string?: "now_playing_source_string";

        /** MediaDetailState optional_now_playing_album. */
        optional_now_playing_album?: "now_playing_album";

        /** MediaDetailState optional_now_playing_station. */
        optional_now_playing_station?: "now_playing_station";

        /** MediaDetailState optional_a2dp_source_name. */
        optional_a2dp_source_name?: "a2dp_source_name";

        /**
         * Encodes the specified MediaDetailState message. Does not implicitly {@link CarServer.MediaDetailState.verify|verify} messages.
         * @param m MediaDetailState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.MediaDetailState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaDetailState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.MediaDetailState & CarServer.MediaDetailState.$Shape} MediaDetailState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.MediaDetailState & CarServer.MediaDetailState.$Shape;

        /**
         * Gets the type url for MediaDetailState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MediaDetailState {

        /** Properties of a MediaDetailState. */
        interface $Properties {

            /** MediaDetailState timestamp */
            timestamp?: (google.protobuf.Timestamp.$Properties|null);

            /** MediaDetailState now_playing_duration */
            now_playing_duration?: (number|null);

            /** MediaDetailState now_playing_elapsed */
            now_playing_elapsed?: (number|null);

            /** MediaDetailState now_playing_source_string */
            now_playing_source_string?: (string|null);

            /** MediaDetailState now_playing_album */
            now_playing_album?: (string|null);

            /** MediaDetailState now_playing_station */
            now_playing_station?: (string|null);

            /** MediaDetailState a2dp_source_name */
            a2dp_source_name?: (string|null);

            /** MediaDetailState optional_now_playing_duration */
            optional_now_playing_duration?: "now_playing_duration";

            /** MediaDetailState optional_now_playing_elapsed */
            optional_now_playing_elapsed?: "now_playing_elapsed";

            /** MediaDetailState optional_now_playing_source_string */
            optional_now_playing_source_string?: "now_playing_source_string";

            /** MediaDetailState optional_now_playing_album */
            optional_now_playing_album?: "now_playing_album";

            /** MediaDetailState optional_now_playing_station */
            optional_now_playing_station?: "now_playing_station";

            /** MediaDetailState optional_a2dp_source_name */
            optional_a2dp_source_name?: "a2dp_source_name";

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a MediaDetailState. */
        type $Shape = {
          timestamp?: google.protobuf.Timestamp.$Shape|null;
          now_playing_duration?: number|null;
          now_playing_elapsed?: number|null;
          now_playing_source_string?: string|null;
          now_playing_album?: string|null;
          now_playing_station?: string|null;
          a2dp_source_name?: string|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ optional_now_playing_duration?: undefined; now_playing_duration?: null }|{ optional_now_playing_duration?: "now_playing_duration"; now_playing_duration: number })
        ) & (
          ({ optional_now_playing_elapsed?: undefined; now_playing_elapsed?: null }|{ optional_now_playing_elapsed?: "now_playing_elapsed"; now_playing_elapsed: number })
        ) & (
          ({ optional_now_playing_source_string?: undefined; now_playing_source_string?: null }|{ optional_now_playing_source_string?: "now_playing_source_string"; now_playing_source_string: string })
        ) & (
          ({ optional_now_playing_album?: undefined; now_playing_album?: null }|{ optional_now_playing_album?: "now_playing_album"; now_playing_album: string })
        ) & (
          ({ optional_now_playing_station?: undefined; now_playing_station?: null }|{ optional_now_playing_station?: "now_playing_station"; now_playing_station: string })
        ) & (
          ({ optional_a2dp_source_name?: undefined; a2dp_source_name?: null }|{ optional_a2dp_source_name?: "a2dp_source_name"; a2dp_source_name: string })
        );
    }

    /**
     * Properties of a ShiftState.
     * @deprecated Use CarServer.ShiftState.$Properties instead.
     */
    interface IShiftState extends CarServer.ShiftState.$Properties {
    }

    /** Represents a ShiftState. */
    class ShiftState {

        /**
         * Constructs a new ShiftState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ShiftState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ShiftState Invalid. */
        Invalid?: (CarServer.Void.$Properties|null);

        /** ShiftState P. */
        P?: (CarServer.Void.$Properties|null);

        /** ShiftState R. */
        R?: (CarServer.Void.$Properties|null);

        /** ShiftState N. */
        N?: (CarServer.Void.$Properties|null);

        /** ShiftState D. */
        D?: (CarServer.Void.$Properties|null);

        /** ShiftState SNA. */
        SNA?: (CarServer.Void.$Properties|null);

        /** ShiftState type. */
        type?: ("Invalid"|"P"|"R"|"N"|"D"|"SNA");

        /**
         * Encodes the specified ShiftState message. Does not implicitly {@link CarServer.ShiftState.verify|verify} messages.
         * @param m ShiftState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ShiftState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShiftState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ShiftState & CarServer.ShiftState.$Shape} ShiftState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ShiftState & CarServer.ShiftState.$Shape;

        /**
         * Gets the type url for ShiftState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ShiftState {

        /** Properties of a ShiftState. */
        interface $Properties {

            /** ShiftState Invalid */
            Invalid?: (CarServer.Void.$Properties|null);

            /** ShiftState P */
            P?: (CarServer.Void.$Properties|null);

            /** ShiftState R */
            R?: (CarServer.Void.$Properties|null);

            /** ShiftState N */
            N?: (CarServer.Void.$Properties|null);

            /** ShiftState D */
            D?: (CarServer.Void.$Properties|null);

            /** ShiftState SNA */
            SNA?: (CarServer.Void.$Properties|null);

            /** ShiftState type */
            type?: ("Invalid"|"P"|"R"|"N"|"D"|"SNA");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ShiftState. */
        type $Shape = {
          Invalid?: CarServer.Void.$Shape|null;
          P?: CarServer.Void.$Shape|null;
          R?: CarServer.Void.$Shape|null;
          N?: CarServer.Void.$Shape|null;
          D?: CarServer.Void.$Shape|null;
          SNA?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ type?: undefined; Invalid?: null; P?: null; R?: null; N?: null; D?: null; SNA?: null }|{ type?: "Invalid"; Invalid: CarServer.Void.$Shape; P?: null; R?: null; N?: null; D?: null; SNA?: null }|{ type?: "P"; Invalid?: null; P: CarServer.Void.$Shape; R?: null; N?: null; D?: null; SNA?: null }|{ type?: "R"; Invalid?: null; P?: null; R: CarServer.Void.$Shape; N?: null; D?: null; SNA?: null }|{ type?: "N"; Invalid?: null; P?: null; R?: null; N: CarServer.Void.$Shape; D?: null; SNA?: null }|{ type?: "D"; Invalid?: null; P?: null; R?: null; N?: null; D: CarServer.Void.$Shape; SNA?: null }|{ type?: "SNA"; Invalid?: null; P?: null; R?: null; N?: null; D?: null; SNA: CarServer.Void.$Shape })
        );
    }

    /** MediaSourceType enum. */
    enum MediaSourceType {

        /** MediaSourceType_None value */
        MediaSourceType_None = 0,

        /** MediaSourceType_AM value */
        MediaSourceType_AM = 1,

        /** MediaSourceType_FM value */
        MediaSourceType_FM = 2,

        /** MediaSourceType_XM value */
        MediaSourceType_XM = 3,

        /** MediaSourceType_Slacker value */
        MediaSourceType_Slacker = 5,

        /** MediaSourceType_LocalFiles value */
        MediaSourceType_LocalFiles = 6,

        /** MediaSourceType_iPod value */
        MediaSourceType_iPod = 7,

        /** MediaSourceType_Bluetooth value */
        MediaSourceType_Bluetooth = 8,

        /** MediaSourceType_AuxIn value */
        MediaSourceType_AuxIn = 9,

        /** MediaSourceType_DAB value */
        MediaSourceType_DAB = 10,

        /** MediaSourceType_Rdio value */
        MediaSourceType_Rdio = 11,

        /** MediaSourceType_Spotify value */
        MediaSourceType_Spotify = 12,

        /** MediaSourceType_USRadio value */
        MediaSourceType_USRadio = 13,

        /** MediaSourceType_EURadio value */
        MediaSourceType_EURadio = 14,

        /** MediaSourceType_MediaFile value */
        MediaSourceType_MediaFile = 16,

        /** MediaSourceType_TuneIn value */
        MediaSourceType_TuneIn = 17,

        /** MediaSourceType_Stingray value */
        MediaSourceType_Stingray = 18,

        /** MediaSourceType_SiriusXM value */
        MediaSourceType_SiriusXM = 19,

        /** MediaSourceType_Tidal value */
        MediaSourceType_Tidal = 20,

        /** MediaSourceType_QQMusic value */
        MediaSourceType_QQMusic = 21,

        /** MediaSourceType_QQMusic2 value */
        MediaSourceType_QQMusic2 = 22,

        /** MediaSourceType_Ximalaya value */
        MediaSourceType_Ximalaya = 23,

        /** MediaSourceType_OnlineRadio value */
        MediaSourceType_OnlineRadio = 24,

        /** MediaSourceType_OnlineRadio2 value */
        MediaSourceType_OnlineRadio2 = 25,

        /** MediaSourceType_NetEaseMusic value */
        MediaSourceType_NetEaseMusic = 26,

        /** MediaSourceType_Browser value */
        MediaSourceType_Browser = 28,

        /** MediaSourceType_Theater value */
        MediaSourceType_Theater = 29,

        /** MediaSourceType_Game value */
        MediaSourceType_Game = 30,

        /** MediaSourceType_Tutorial value */
        MediaSourceType_Tutorial = 31,

        /** MediaSourceType_Toybox value */
        MediaSourceType_Toybox = 32,

        /** MediaSourceType_RecentsFavorites value */
        MediaSourceType_RecentsFavorites = 33,

        /** MediaSourceType_HomeApps value */
        MediaSourceType_HomeApps = 34,

        /** MediaSourceType_Search value */
        MediaSourceType_Search = 35
    }

    /** Invalid enum. */
    enum Invalid {

        /** INVALID value */
        INVALID = 0
    }

    /**
     * Properties of a Void.
     * @deprecated Use CarServer.Void.$Properties instead.
     */
    interface IVoid extends CarServer.Void.$Properties {
    }

    /** Represents a Void. */
    class Void {

        /**
         * Constructs a new Void.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.Void.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified Void message. Does not implicitly {@link CarServer.Void.verify|verify} messages.
         * @param m Void message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.Void.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Void message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.Void & CarServer.Void.$Shape} Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.Void & CarServer.Void.$Shape;

        /**
         * Gets the type url for Void
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Void {

        /** Properties of a Void. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Void. */
        type $Shape = CarServer.Void.$Properties;
    }

    /**
     * Properties of a LatLong.
     * @deprecated Use CarServer.LatLong.$Properties instead.
     */
    interface ILatLong extends CarServer.LatLong.$Properties {
    }

    /** Represents a LatLong. */
    class LatLong {

        /**
         * Constructs a new LatLong.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.LatLong.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LatLong latitude. */
        latitude: number;

        /** LatLong longitude. */
        longitude: number;

        /**
         * Encodes the specified LatLong message. Does not implicitly {@link CarServer.LatLong.verify|verify} messages.
         * @param m LatLong message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.LatLong.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LatLong message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.LatLong & CarServer.LatLong.$Shape} LatLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.LatLong & CarServer.LatLong.$Shape;

        /**
         * Gets the type url for LatLong
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LatLong {

        /** Properties of a LatLong. */
        interface $Properties {

            /** LatLong latitude */
            latitude?: (number|null);

            /** LatLong longitude */
            longitude?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LatLong. */
        type $Shape = CarServer.LatLong.$Properties;
    }

    /**
     * Properties of a ChargePortLatchState.
     * @deprecated Use CarServer.ChargePortLatchState.$Properties instead.
     */
    interface IChargePortLatchState extends CarServer.ChargePortLatchState.$Properties {
    }

    /** Represents a ChargePortLatchState. */
    class ChargePortLatchState {

        /**
         * Constructs a new ChargePortLatchState.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargePortLatchState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargePortLatchState SNA. */
        SNA?: (CarServer.Void.$Properties|null);

        /** ChargePortLatchState Disengaged. */
        Disengaged?: (CarServer.Void.$Properties|null);

        /** ChargePortLatchState Engaged. */
        Engaged?: (CarServer.Void.$Properties|null);

        /** ChargePortLatchState Blocking. */
        Blocking?: (CarServer.Void.$Properties|null);

        /** ChargePortLatchState type. */
        type?: ("SNA"|"Disengaged"|"Engaged"|"Blocking");

        /**
         * Encodes the specified ChargePortLatchState message. Does not implicitly {@link CarServer.ChargePortLatchState.verify|verify} messages.
         * @param m ChargePortLatchState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargePortLatchState.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargePortLatchState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargePortLatchState & CarServer.ChargePortLatchState.$Shape} ChargePortLatchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargePortLatchState & CarServer.ChargePortLatchState.$Shape;

        /**
         * Gets the type url for ChargePortLatchState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargePortLatchState {

        /** Properties of a ChargePortLatchState. */
        interface $Properties {

            /** ChargePortLatchState SNA */
            SNA?: (CarServer.Void.$Properties|null);

            /** ChargePortLatchState Disengaged */
            Disengaged?: (CarServer.Void.$Properties|null);

            /** ChargePortLatchState Engaged */
            Engaged?: (CarServer.Void.$Properties|null);

            /** ChargePortLatchState Blocking */
            Blocking?: (CarServer.Void.$Properties|null);

            /** ChargePortLatchState type */
            type?: ("SNA"|"Disengaged"|"Engaged"|"Blocking");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ChargePortLatchState. */
        type $Shape = {
          SNA?: CarServer.Void.$Shape|null;
          Disengaged?: CarServer.Void.$Shape|null;
          Engaged?: CarServer.Void.$Shape|null;
          Blocking?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ type?: undefined; SNA?: null; Disengaged?: null; Engaged?: null; Blocking?: null }|{ type?: "SNA"; SNA: CarServer.Void.$Shape; Disengaged?: null; Engaged?: null; Blocking?: null }|{ type?: "Disengaged"; SNA?: null; Disengaged: CarServer.Void.$Shape; Engaged?: null; Blocking?: null }|{ type?: "Engaged"; SNA?: null; Disengaged?: null; Engaged: CarServer.Void.$Shape; Blocking?: null }|{ type?: "Blocking"; SNA?: null; Disengaged?: null; Engaged?: null; Blocking: CarServer.Void.$Shape })
        );
    }

    /**
     * Properties of a PreconditioningTimes.
     * @deprecated Use CarServer.PreconditioningTimes.$Properties instead.
     */
    interface IPreconditioningTimes extends CarServer.PreconditioningTimes.$Properties {
    }

    /** Represents a PreconditioningTimes. */
    class PreconditioningTimes {

        /**
         * Constructs a new PreconditioningTimes.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.PreconditioningTimes.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreconditioningTimes all_week. */
        all_week?: (CarServer.Void.$Properties|null);

        /** PreconditioningTimes weekdays. */
        weekdays?: (CarServer.Void.$Properties|null);

        /** PreconditioningTimes times. */
        times?: ("all_week"|"weekdays");

        /**
         * Encodes the specified PreconditioningTimes message. Does not implicitly {@link CarServer.PreconditioningTimes.verify|verify} messages.
         * @param m PreconditioningTimes message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.PreconditioningTimes.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreconditioningTimes message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.PreconditioningTimes & CarServer.PreconditioningTimes.$Shape} PreconditioningTimes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.PreconditioningTimes & CarServer.PreconditioningTimes.$Shape;

        /**
         * Gets the type url for PreconditioningTimes
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreconditioningTimes {

        /** Properties of a PreconditioningTimes. */
        interface $Properties {

            /** PreconditioningTimes all_week */
            all_week?: (CarServer.Void.$Properties|null);

            /** PreconditioningTimes weekdays */
            weekdays?: (CarServer.Void.$Properties|null);

            /** PreconditioningTimes times */
            times?: ("all_week"|"weekdays");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a PreconditioningTimes. */
        type $Shape = {
          all_week?: CarServer.Void.$Shape|null;
          weekdays?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ times?: undefined; all_week?: null; weekdays?: null }|{ times?: "all_week"; all_week: CarServer.Void.$Shape; weekdays?: null }|{ times?: "weekdays"; all_week?: null; weekdays: CarServer.Void.$Shape })
        );
    }

    /**
     * Properties of an OffPeakChargingTimes.
     * @deprecated Use CarServer.OffPeakChargingTimes.$Properties instead.
     */
    interface IOffPeakChargingTimes extends CarServer.OffPeakChargingTimes.$Properties {
    }

    /** Represents an OffPeakChargingTimes. */
    class OffPeakChargingTimes {

        /**
         * Constructs a new OffPeakChargingTimes.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.OffPeakChargingTimes.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** OffPeakChargingTimes all_week. */
        all_week?: (CarServer.Void.$Properties|null);

        /** OffPeakChargingTimes weekdays. */
        weekdays?: (CarServer.Void.$Properties|null);

        /** OffPeakChargingTimes times. */
        times?: ("all_week"|"weekdays");

        /**
         * Encodes the specified OffPeakChargingTimes message. Does not implicitly {@link CarServer.OffPeakChargingTimes.verify|verify} messages.
         * @param m OffPeakChargingTimes message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.OffPeakChargingTimes.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OffPeakChargingTimes message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.OffPeakChargingTimes & CarServer.OffPeakChargingTimes.$Shape} OffPeakChargingTimes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.OffPeakChargingTimes & CarServer.OffPeakChargingTimes.$Shape;

        /**
         * Gets the type url for OffPeakChargingTimes
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace OffPeakChargingTimes {

        /** Properties of an OffPeakChargingTimes. */
        interface $Properties {

            /** OffPeakChargingTimes all_week */
            all_week?: (CarServer.Void.$Properties|null);

            /** OffPeakChargingTimes weekdays */
            weekdays?: (CarServer.Void.$Properties|null);

            /** OffPeakChargingTimes times */
            times?: ("all_week"|"weekdays");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an OffPeakChargingTimes. */
        type $Shape = {
          all_week?: CarServer.Void.$Shape|null;
          weekdays?: CarServer.Void.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ times?: undefined; all_week?: null; weekdays?: null }|{ times?: "all_week"; all_week: CarServer.Void.$Shape; weekdays?: null }|{ times?: "weekdays"; all_week?: null; weekdays: CarServer.Void.$Shape })
        );
    }

    /** MediaPlaybackStatus enum. */
    enum MediaPlaybackStatus {

        /** Stopped value */
        Stopped = 0,

        /** Playing value */
        Playing = 1,

        /** Paused value */
        Paused = 2
    }

    /** StwHeatLevel enum. */
    enum StwHeatLevel {

        /** StwHeatLevel_Unknown value */
        StwHeatLevel_Unknown = 0,

        /** StwHeatLevel_Off value */
        StwHeatLevel_Off = 1,

        /** StwHeatLevel_Low value */
        StwHeatLevel_Low = 2,

        /** StwHeatLevel_High value */
        StwHeatLevel_High = 3
    }

    /**
     * Properties of a ChargeSchedule.
     * @deprecated Use CarServer.ChargeSchedule.$Properties instead.
     */
    interface IChargeSchedule extends CarServer.ChargeSchedule.$Properties {
    }

    /** Represents a ChargeSchedule. */
    class ChargeSchedule {

        /**
         * Constructs a new ChargeSchedule.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.ChargeSchedule.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChargeSchedule id. */
        id: number;

        /** ChargeSchedule name. */
        name: string;

        /** ChargeSchedule days_of_week. */
        days_of_week: number;

        /** ChargeSchedule start_enabled. */
        start_enabled: boolean;

        /** ChargeSchedule start_time. */
        start_time: number;

        /** ChargeSchedule end_enabled. */
        end_enabled: boolean;

        /** ChargeSchedule end_time. */
        end_time: number;

        /** ChargeSchedule one_time. */
        one_time: boolean;

        /** ChargeSchedule enabled. */
        enabled: boolean;

        /** ChargeSchedule latitude. */
        latitude: number;

        /** ChargeSchedule longitude. */
        longitude: number;

        /**
         * Encodes the specified ChargeSchedule message. Does not implicitly {@link CarServer.ChargeSchedule.verify|verify} messages.
         * @param m ChargeSchedule message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.ChargeSchedule.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChargeSchedule message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.ChargeSchedule & CarServer.ChargeSchedule.$Shape} ChargeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.ChargeSchedule & CarServer.ChargeSchedule.$Shape;

        /**
         * Gets the type url for ChargeSchedule
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChargeSchedule {

        /** Properties of a ChargeSchedule. */
        interface $Properties {

            /** ChargeSchedule id */
            id?: (number|null);

            /** ChargeSchedule name */
            name?: (string|null);

            /** ChargeSchedule days_of_week */
            days_of_week?: (number|null);

            /** ChargeSchedule start_enabled */
            start_enabled?: (boolean|null);

            /** ChargeSchedule start_time */
            start_time?: (number|null);

            /** ChargeSchedule end_enabled */
            end_enabled?: (boolean|null);

            /** ChargeSchedule end_time */
            end_time?: (number|null);

            /** ChargeSchedule one_time */
            one_time?: (boolean|null);

            /** ChargeSchedule enabled */
            enabled?: (boolean|null);

            /** ChargeSchedule latitude */
            latitude?: (number|null);

            /** ChargeSchedule longitude */
            longitude?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChargeSchedule. */
        type $Shape = CarServer.ChargeSchedule.$Properties;
    }

    /**
     * Properties of a PreconditionSchedule.
     * @deprecated Use CarServer.PreconditionSchedule.$Properties instead.
     */
    interface IPreconditionSchedule extends CarServer.PreconditionSchedule.$Properties {
    }

    /** Represents a PreconditionSchedule. */
    class PreconditionSchedule {

        /**
         * Constructs a new PreconditionSchedule.
         * @param [p] Properties to set
         */
        constructor(p?: CarServer.PreconditionSchedule.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreconditionSchedule id. */
        id: number;

        /** PreconditionSchedule name. */
        name: string;

        /** PreconditionSchedule days_of_week. */
        days_of_week: number;

        /** PreconditionSchedule precondition_time. */
        precondition_time: number;

        /** PreconditionSchedule one_time. */
        one_time: boolean;

        /** PreconditionSchedule enabled. */
        enabled: boolean;

        /** PreconditionSchedule latitude. */
        latitude: number;

        /** PreconditionSchedule longitude. */
        longitude: number;

        /**
         * Encodes the specified PreconditionSchedule message. Does not implicitly {@link CarServer.PreconditionSchedule.verify|verify} messages.
         * @param m PreconditionSchedule message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: CarServer.PreconditionSchedule.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreconditionSchedule message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {CarServer.PreconditionSchedule & CarServer.PreconditionSchedule.$Shape} PreconditionSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CarServer.PreconditionSchedule & CarServer.PreconditionSchedule.$Shape;

        /**
         * Gets the type url for PreconditionSchedule
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreconditionSchedule {

        /** Properties of a PreconditionSchedule. */
        interface $Properties {

            /** PreconditionSchedule id */
            id?: (number|null);

            /** PreconditionSchedule name */
            name?: (string|null);

            /** PreconditionSchedule days_of_week */
            days_of_week?: (number|null);

            /** PreconditionSchedule precondition_time */
            precondition_time?: (number|null);

            /** PreconditionSchedule one_time */
            one_time?: (boolean|null);

            /** PreconditionSchedule enabled */
            enabled?: (boolean|null);

            /** PreconditionSchedule latitude */
            latitude?: (number|null);

            /** PreconditionSchedule longitude */
            longitude?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PreconditionSchedule. */
        type $Shape = CarServer.PreconditionSchedule.$Properties;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.Timestamp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: number;

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param m Timestamp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            static encode(m: google.protobuf.Timestamp.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}

/** Namespace VCSEC. */
export namespace VCSEC {

    /** SignatureType enum. */
    enum SignatureType {

        /** SIGNATURE_TYPE_NONE value */
        SIGNATURE_TYPE_NONE = 0,

        /** SIGNATURE_TYPE_PRESENT_KEY value */
        SIGNATURE_TYPE_PRESENT_KEY = 2
    }

    /**
     * Properties of a SignedMessage.
     * @deprecated Use VCSEC.SignedMessage.$Properties instead.
     */
    interface ISignedMessage extends VCSEC.SignedMessage.$Properties {
    }

    /** Represents a SignedMessage. */
    class SignedMessage {

        /**
         * Constructs a new SignedMessage.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.SignedMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SignedMessage protobufMessageAsBytes. */
        protobufMessageAsBytes: Uint8Array;

        /** SignedMessage signatureType. */
        signatureType: VCSEC.SignatureType;

        /**
         * Encodes the specified SignedMessage message. Does not implicitly {@link VCSEC.SignedMessage.verify|verify} messages.
         * @param m SignedMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.SignedMessage.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.SignedMessage & VCSEC.SignedMessage.$Shape} SignedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.SignedMessage & VCSEC.SignedMessage.$Shape;

        /**
         * Gets the type url for SignedMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SignedMessage {

        /** Properties of a SignedMessage. */
        interface $Properties {

            /** SignedMessage protobufMessageAsBytes */
            protobufMessageAsBytes?: (Uint8Array|null);

            /** SignedMessage signatureType */
            signatureType?: (VCSEC.SignatureType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SignedMessage. */
        type $Shape = VCSEC.SignedMessage.$Properties;
    }

    /**
     * Properties of a ToVCSECMessage.
     * @deprecated Use VCSEC.ToVCSECMessage.$Properties instead.
     */
    interface IToVCSECMessage extends VCSEC.ToVCSECMessage.$Properties {
    }

    /** Represents a ToVCSECMessage. */
    class ToVCSECMessage {

        /**
         * Constructs a new ToVCSECMessage.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.ToVCSECMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ToVCSECMessage signedMessage. */
        signedMessage?: (VCSEC.SignedMessage.$Properties|null);

        /**
         * Encodes the specified ToVCSECMessage message. Does not implicitly {@link VCSEC.ToVCSECMessage.verify|verify} messages.
         * @param m ToVCSECMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.ToVCSECMessage.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToVCSECMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.ToVCSECMessage & VCSEC.ToVCSECMessage.$Shape} ToVCSECMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.ToVCSECMessage & VCSEC.ToVCSECMessage.$Shape;

        /**
         * Gets the type url for ToVCSECMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ToVCSECMessage {

        /** Properties of a ToVCSECMessage. */
        interface $Properties {

            /** ToVCSECMessage signedMessage */
            signedMessage?: (VCSEC.SignedMessage.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ToVCSECMessage. */
        type $Shape = VCSEC.ToVCSECMessage.$Properties;
    }

    /**
     * Properties of a KeyIdentifier.
     * @deprecated Use VCSEC.KeyIdentifier.$Properties instead.
     */
    interface IKeyIdentifier extends VCSEC.KeyIdentifier.$Properties {
    }

    /** Represents a KeyIdentifier. */
    class KeyIdentifier {

        /**
         * Constructs a new KeyIdentifier.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.KeyIdentifier.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyIdentifier publicKeySHA1. */
        publicKeySHA1: Uint8Array;

        /**
         * Encodes the specified KeyIdentifier message. Does not implicitly {@link VCSEC.KeyIdentifier.verify|verify} messages.
         * @param m KeyIdentifier message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.KeyIdentifier.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyIdentifier message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.KeyIdentifier & VCSEC.KeyIdentifier.$Shape} KeyIdentifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.KeyIdentifier & VCSEC.KeyIdentifier.$Shape;

        /**
         * Gets the type url for KeyIdentifier
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyIdentifier {

        /** Properties of a KeyIdentifier. */
        interface $Properties {

            /** KeyIdentifier publicKeySHA1 */
            publicKeySHA1?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KeyIdentifier. */
        type $Shape = VCSEC.KeyIdentifier.$Properties;
    }

    /** KeyFormFactor enum. */
    enum KeyFormFactor {

        /** KEY_FORM_FACTOR_UNKNOWN value */
        KEY_FORM_FACTOR_UNKNOWN = 0,

        /** KEY_FORM_FACTOR_NFC_CARD value */
        KEY_FORM_FACTOR_NFC_CARD = 1,

        /** KEY_FORM_FACTOR_IOS_DEVICE value */
        KEY_FORM_FACTOR_IOS_DEVICE = 6,

        /** KEY_FORM_FACTOR_ANDROID_DEVICE value */
        KEY_FORM_FACTOR_ANDROID_DEVICE = 7,

        /** KEY_FORM_FACTOR_CLOUD_KEY value */
        KEY_FORM_FACTOR_CLOUD_KEY = 9
    }

    /**
     * Properties of a KeyMetadata.
     * @deprecated Use VCSEC.KeyMetadata.$Properties instead.
     */
    interface IKeyMetadata extends VCSEC.KeyMetadata.$Properties {
    }

    /** Represents a KeyMetadata. */
    class KeyMetadata {

        /**
         * Constructs a new KeyMetadata.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.KeyMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyMetadata keyFormFactor. */
        keyFormFactor: VCSEC.KeyFormFactor;

        /**
         * Encodes the specified KeyMetadata message. Does not implicitly {@link VCSEC.KeyMetadata.verify|verify} messages.
         * @param m KeyMetadata message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.KeyMetadata.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyMetadata message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.KeyMetadata & VCSEC.KeyMetadata.$Shape} KeyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.KeyMetadata & VCSEC.KeyMetadata.$Shape;

        /**
         * Gets the type url for KeyMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyMetadata {

        /** Properties of a KeyMetadata. */
        interface $Properties {

            /** KeyMetadata keyFormFactor */
            keyFormFactor?: (VCSEC.KeyFormFactor|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KeyMetadata. */
        type $Shape = VCSEC.KeyMetadata.$Properties;
    }

    /**
     * Properties of a PublicKey.
     * @deprecated Use VCSEC.PublicKey.$Properties instead.
     */
    interface IPublicKey extends VCSEC.PublicKey.$Properties {
    }

    /** Represents a PublicKey. */
    class PublicKey {

        /**
         * Constructs a new PublicKey.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.PublicKey.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PublicKey PublicKeyRaw. */
        PublicKeyRaw: Uint8Array;

        /**
         * Encodes the specified PublicKey message. Does not implicitly {@link VCSEC.PublicKey.verify|verify} messages.
         * @param m PublicKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.PublicKey.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.PublicKey & VCSEC.PublicKey.$Shape} PublicKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.PublicKey & VCSEC.PublicKey.$Shape;

        /**
         * Gets the type url for PublicKey
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PublicKey {

        /** Properties of a PublicKey. */
        interface $Properties {

            /** PublicKey PublicKeyRaw */
            PublicKeyRaw?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PublicKey. */
        type $Shape = VCSEC.PublicKey.$Properties;
    }

    /** InformationRequestType enum. */
    enum InformationRequestType {

        /** INFORMATION_REQUEST_TYPE_GET_STATUS value */
        INFORMATION_REQUEST_TYPE_GET_STATUS = 0,

        /** INFORMATION_REQUEST_TYPE_GET_WHITELIST_INFO value */
        INFORMATION_REQUEST_TYPE_GET_WHITELIST_INFO = 5,

        /** INFORMATION_REQUEST_TYPE_GET_WHITELIST_ENTRY_INFO value */
        INFORMATION_REQUEST_TYPE_GET_WHITELIST_ENTRY_INFO = 6
    }

    /**
     * Properties of a WhitelistInfo.
     * @deprecated Use VCSEC.WhitelistInfo.$Properties instead.
     */
    interface IWhitelistInfo extends VCSEC.WhitelistInfo.$Properties {
    }

    /** Represents a WhitelistInfo. */
    class WhitelistInfo {

        /**
         * Constructs a new WhitelistInfo.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.WhitelistInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WhitelistInfo numberOfEntries. */
        numberOfEntries: number;

        /** WhitelistInfo whitelistEntries. */
        whitelistEntries: VCSEC.KeyIdentifier.$Properties[];

        /** WhitelistInfo slotMask. */
        slotMask: number;

        /**
         * Encodes the specified WhitelistInfo message. Does not implicitly {@link VCSEC.WhitelistInfo.verify|verify} messages.
         * @param m WhitelistInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.WhitelistInfo.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhitelistInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.WhitelistInfo & VCSEC.WhitelistInfo.$Shape} WhitelistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.WhitelistInfo & VCSEC.WhitelistInfo.$Shape;

        /**
         * Gets the type url for WhitelistInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WhitelistInfo {

        /** Properties of a WhitelistInfo. */
        interface $Properties {

            /** WhitelistInfo numberOfEntries */
            numberOfEntries?: (number|null);

            /** WhitelistInfo whitelistEntries */
            whitelistEntries?: (VCSEC.KeyIdentifier.$Properties[]|null);

            /** WhitelistInfo slotMask */
            slotMask?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WhitelistInfo. */
        type $Shape = VCSEC.WhitelistInfo.$Properties;
    }

    /**
     * Properties of a WhitelistEntryInfo.
     * @deprecated Use VCSEC.WhitelistEntryInfo.$Properties instead.
     */
    interface IWhitelistEntryInfo extends VCSEC.WhitelistEntryInfo.$Properties {
    }

    /** Represents a WhitelistEntryInfo. */
    class WhitelistEntryInfo {

        /**
         * Constructs a new WhitelistEntryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.WhitelistEntryInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WhitelistEntryInfo keyId. */
        keyId?: (VCSEC.KeyIdentifier.$Properties|null);

        /** WhitelistEntryInfo publicKey. */
        publicKey?: (VCSEC.PublicKey.$Properties|null);

        /** WhitelistEntryInfo metadataForKey. */
        metadataForKey?: (VCSEC.KeyMetadata.$Properties|null);

        /** WhitelistEntryInfo slot. */
        slot: number;

        /** WhitelistEntryInfo keyRole. */
        keyRole: Keys.Role;

        /**
         * Encodes the specified WhitelistEntryInfo message. Does not implicitly {@link VCSEC.WhitelistEntryInfo.verify|verify} messages.
         * @param m WhitelistEntryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.WhitelistEntryInfo.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhitelistEntryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.WhitelistEntryInfo & VCSEC.WhitelistEntryInfo.$Shape} WhitelistEntryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.WhitelistEntryInfo & VCSEC.WhitelistEntryInfo.$Shape;

        /**
         * Gets the type url for WhitelistEntryInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WhitelistEntryInfo {

        /** Properties of a WhitelistEntryInfo. */
        interface $Properties {

            /** WhitelistEntryInfo keyId */
            keyId?: (VCSEC.KeyIdentifier.$Properties|null);

            /** WhitelistEntryInfo publicKey */
            publicKey?: (VCSEC.PublicKey.$Properties|null);

            /** WhitelistEntryInfo metadataForKey */
            metadataForKey?: (VCSEC.KeyMetadata.$Properties|null);

            /** WhitelistEntryInfo slot */
            slot?: (number|null);

            /** WhitelistEntryInfo keyRole */
            keyRole?: (Keys.Role|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WhitelistEntryInfo. */
        type $Shape = VCSEC.WhitelistEntryInfo.$Properties;
    }

    /**
     * Properties of an InformationRequest.
     * @deprecated Use VCSEC.InformationRequest.$Properties instead.
     */
    interface IInformationRequest extends VCSEC.InformationRequest.$Properties {
    }

    /** Represents an InformationRequest. */
    class InformationRequest {

        /**
         * Constructs a new InformationRequest.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.InformationRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InformationRequest informationRequestType. */
        informationRequestType: VCSEC.InformationRequestType;

        /** InformationRequest keyId. */
        keyId?: (VCSEC.KeyIdentifier.$Properties|null);

        /** InformationRequest publicKey. */
        publicKey?: (Uint8Array|null);

        /** InformationRequest slot. */
        slot?: (number|null);

        /** InformationRequest key. */
        key?: ("keyId"|"publicKey"|"slot");

        /**
         * Encodes the specified InformationRequest message. Does not implicitly {@link VCSEC.InformationRequest.verify|verify} messages.
         * @param m InformationRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.InformationRequest.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InformationRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.InformationRequest & VCSEC.InformationRequest.$Shape} InformationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.InformationRequest & VCSEC.InformationRequest.$Shape;

        /**
         * Gets the type url for InformationRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InformationRequest {

        /** Properties of an InformationRequest. */
        interface $Properties {

            /** InformationRequest informationRequestType */
            informationRequestType?: (VCSEC.InformationRequestType|null);

            /** InformationRequest keyId */
            keyId?: (VCSEC.KeyIdentifier.$Properties|null);

            /** InformationRequest publicKey */
            publicKey?: (Uint8Array|null);

            /** InformationRequest slot */
            slot?: (number|null);

            /** InformationRequest key */
            key?: ("keyId"|"publicKey"|"slot");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an InformationRequest. */
        type $Shape = {
          informationRequestType?: VCSEC.InformationRequestType|null;
          keyId?: VCSEC.KeyIdentifier.$Shape|null;
          publicKey?: Uint8Array|null;
          slot?: number|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ key?: undefined; keyId?: null; publicKey?: null; slot?: null }|{ key?: "keyId"; keyId: VCSEC.KeyIdentifier.$Shape; publicKey?: null; slot?: null }|{ key?: "publicKey"; keyId?: null; publicKey: Uint8Array; slot?: null }|{ key?: "slot"; keyId?: null; publicKey?: null; slot: number })
        );
    }

    /** RKEAction_E enum. */
    enum RKEAction_E {

        /** RKE_ACTION_UNLOCK value */
        RKE_ACTION_UNLOCK = 0,

        /** RKE_ACTION_LOCK value */
        RKE_ACTION_LOCK = 1,

        /** RKE_ACTION_REMOTE_DRIVE value */
        RKE_ACTION_REMOTE_DRIVE = 20,

        /** RKE_ACTION_AUTO_SECURE_VEHICLE value */
        RKE_ACTION_AUTO_SECURE_VEHICLE = 29,

        /** RKE_ACTION_WAKE_VEHICLE value */
        RKE_ACTION_WAKE_VEHICLE = 30
    }

    /** ClosureMoveType_E enum. */
    enum ClosureMoveType_E {

        /** CLOSURE_MOVE_TYPE_NONE value */
        CLOSURE_MOVE_TYPE_NONE = 0,

        /** CLOSURE_MOVE_TYPE_MOVE value */
        CLOSURE_MOVE_TYPE_MOVE = 1,

        /** CLOSURE_MOVE_TYPE_STOP value */
        CLOSURE_MOVE_TYPE_STOP = 2,

        /** CLOSURE_MOVE_TYPE_OPEN value */
        CLOSURE_MOVE_TYPE_OPEN = 3,

        /** CLOSURE_MOVE_TYPE_CLOSE value */
        CLOSURE_MOVE_TYPE_CLOSE = 4
    }

    /**
     * Properties of a ClosureMoveRequest.
     * @deprecated Use VCSEC.ClosureMoveRequest.$Properties instead.
     */
    interface IClosureMoveRequest extends VCSEC.ClosureMoveRequest.$Properties {
    }

    /** Represents a ClosureMoveRequest. */
    class ClosureMoveRequest {

        /**
         * Constructs a new ClosureMoveRequest.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.ClosureMoveRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClosureMoveRequest frontDriverDoor. */
        frontDriverDoor: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest frontPassengerDoor. */
        frontPassengerDoor: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest rearDriverDoor. */
        rearDriverDoor: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest rearPassengerDoor. */
        rearPassengerDoor: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest rearTrunk. */
        rearTrunk: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest frontTrunk. */
        frontTrunk: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest chargePort. */
        chargePort: VCSEC.ClosureMoveType_E;

        /** ClosureMoveRequest tonneau. */
        tonneau: VCSEC.ClosureMoveType_E;

        /**
         * Encodes the specified ClosureMoveRequest message. Does not implicitly {@link VCSEC.ClosureMoveRequest.verify|verify} messages.
         * @param m ClosureMoveRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.ClosureMoveRequest.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosureMoveRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.ClosureMoveRequest & VCSEC.ClosureMoveRequest.$Shape} ClosureMoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.ClosureMoveRequest & VCSEC.ClosureMoveRequest.$Shape;

        /**
         * Gets the type url for ClosureMoveRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClosureMoveRequest {

        /** Properties of a ClosureMoveRequest. */
        interface $Properties {

            /** ClosureMoveRequest frontDriverDoor */
            frontDriverDoor?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest frontPassengerDoor */
            frontPassengerDoor?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest rearDriverDoor */
            rearDriverDoor?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest rearPassengerDoor */
            rearPassengerDoor?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest rearTrunk */
            rearTrunk?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest frontTrunk */
            frontTrunk?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest chargePort */
            chargePort?: (VCSEC.ClosureMoveType_E|null);

            /** ClosureMoveRequest tonneau */
            tonneau?: (VCSEC.ClosureMoveType_E|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClosureMoveRequest. */
        type $Shape = VCSEC.ClosureMoveRequest.$Properties;
    }

    /**
     * Properties of a PermissionChange.
     * @deprecated Use VCSEC.PermissionChange.$Properties instead.
     */
    interface IPermissionChange extends VCSEC.PermissionChange.$Properties {
    }

    /** Represents a PermissionChange. */
    class PermissionChange {

        /**
         * Constructs a new PermissionChange.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.PermissionChange.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PermissionChange key. */
        key?: (VCSEC.PublicKey.$Properties|null);

        /** PermissionChange secondsToBeActive. */
        secondsToBeActive: number;

        /** PermissionChange keyRole. */
        keyRole: Keys.Role;

        /**
         * Encodes the specified PermissionChange message. Does not implicitly {@link VCSEC.PermissionChange.verify|verify} messages.
         * @param m PermissionChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.PermissionChange.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PermissionChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.PermissionChange & VCSEC.PermissionChange.$Shape} PermissionChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.PermissionChange & VCSEC.PermissionChange.$Shape;

        /**
         * Gets the type url for PermissionChange
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PermissionChange {

        /** Properties of a PermissionChange. */
        interface $Properties {

            /** PermissionChange key */
            key?: (VCSEC.PublicKey.$Properties|null);

            /** PermissionChange secondsToBeActive */
            secondsToBeActive?: (number|null);

            /** PermissionChange keyRole */
            keyRole?: (Keys.Role|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PermissionChange. */
        type $Shape = VCSEC.PermissionChange.$Properties;
    }

    /**
     * Properties of a ReplaceKey.
     * @deprecated Use VCSEC.ReplaceKey.$Properties instead.
     */
    interface IReplaceKey extends VCSEC.ReplaceKey.$Properties {
    }

    /** Represents a ReplaceKey. */
    class ReplaceKey {

        /**
         * Constructs a new ReplaceKey.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.ReplaceKey.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ReplaceKey publicKeyToReplace. */
        publicKeyToReplace?: (VCSEC.PublicKey.$Properties|null);

        /** ReplaceKey slotToReplace. */
        slotToReplace?: (number|null);

        /** ReplaceKey keyToAdd. */
        keyToAdd?: (VCSEC.PublicKey.$Properties|null);

        /** ReplaceKey keyRole. */
        keyRole: Keys.Role;

        /** ReplaceKey impermanent. */
        impermanent: boolean;

        /** ReplaceKey keyToReplace. */
        keyToReplace?: ("publicKeyToReplace"|"slotToReplace");

        /**
         * Encodes the specified ReplaceKey message. Does not implicitly {@link VCSEC.ReplaceKey.verify|verify} messages.
         * @param m ReplaceKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.ReplaceKey.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplaceKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.ReplaceKey & VCSEC.ReplaceKey.$Shape} ReplaceKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.ReplaceKey & VCSEC.ReplaceKey.$Shape;

        /**
         * Gets the type url for ReplaceKey
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReplaceKey {

        /** Properties of a ReplaceKey. */
        interface $Properties {

            /** ReplaceKey publicKeyToReplace */
            publicKeyToReplace?: (VCSEC.PublicKey.$Properties|null);

            /** ReplaceKey slotToReplace */
            slotToReplace?: (number|null);

            /** ReplaceKey keyToAdd */
            keyToAdd?: (VCSEC.PublicKey.$Properties|null);

            /** ReplaceKey keyRole */
            keyRole?: (Keys.Role|null);

            /** ReplaceKey impermanent */
            impermanent?: (boolean|null);

            /** ReplaceKey keyToReplace */
            keyToReplace?: ("publicKeyToReplace"|"slotToReplace");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ReplaceKey. */
        type $Shape = {
          publicKeyToReplace?: VCSEC.PublicKey.$Shape|null;
          slotToReplace?: number|null;
          keyToAdd?: VCSEC.PublicKey.$Shape|null;
          keyRole?: Keys.Role|null;
          impermanent?: boolean|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ keyToReplace?: undefined; publicKeyToReplace?: null; slotToReplace?: null }|{ keyToReplace?: "publicKeyToReplace"; publicKeyToReplace: VCSEC.PublicKey.$Shape; slotToReplace?: null }|{ keyToReplace?: "slotToReplace"; publicKeyToReplace?: null; slotToReplace: number })
        );
    }

    /**
     * Properties of a WhitelistOperation.
     * @deprecated Use VCSEC.WhitelistOperation.$Properties instead.
     */
    interface IWhitelistOperation extends VCSEC.WhitelistOperation.$Properties {
    }

    /** Represents a WhitelistOperation. */
    class WhitelistOperation {

        /**
         * Constructs a new WhitelistOperation.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.WhitelistOperation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WhitelistOperation addPublicKeyToWhitelist. */
        addPublicKeyToWhitelist?: (VCSEC.PublicKey.$Properties|null);

        /** WhitelistOperation removePublicKeyFromWhitelist. */
        removePublicKeyFromWhitelist?: (VCSEC.PublicKey.$Properties|null);

        /** WhitelistOperation addPermissionsToPublicKey. */
        addPermissionsToPublicKey?: (VCSEC.PermissionChange.$Properties|null);

        /** WhitelistOperation removePermissionsFromPublicKey. */
        removePermissionsFromPublicKey?: (VCSEC.PermissionChange.$Properties|null);

        /** WhitelistOperation addKeyToWhitelistAndAddPermissions. */
        addKeyToWhitelistAndAddPermissions?: (VCSEC.PermissionChange.$Properties|null);

        /** WhitelistOperation updateKeyAndPermissions. */
        updateKeyAndPermissions?: (VCSEC.PermissionChange.$Properties|null);

        /** WhitelistOperation addImpermanentKey. */
        addImpermanentKey?: (VCSEC.PermissionChange.$Properties|null);

        /** WhitelistOperation addImpermanentKeyAndRemoveExisting. */
        addImpermanentKeyAndRemoveExisting?: (VCSEC.PermissionChange.$Properties|null);

        /** WhitelistOperation removeAllImpermanentKeys. */
        removeAllImpermanentKeys?: (boolean|null);

        /** WhitelistOperation replaceKey. */
        replaceKey?: (VCSEC.ReplaceKey.$Properties|null);

        /** WhitelistOperation metadataForKey. */
        metadataForKey?: (VCSEC.KeyMetadata.$Properties|null);

        /** WhitelistOperation sub_message. */
        sub_message?: ("addPublicKeyToWhitelist"|"removePublicKeyFromWhitelist"|"addPermissionsToPublicKey"|"removePermissionsFromPublicKey"|"addKeyToWhitelistAndAddPermissions"|"updateKeyAndPermissions"|"addImpermanentKey"|"addImpermanentKeyAndRemoveExisting"|"removeAllImpermanentKeys"|"replaceKey");

        /**
         * Encodes the specified WhitelistOperation message. Does not implicitly {@link VCSEC.WhitelistOperation.verify|verify} messages.
         * @param m WhitelistOperation message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.WhitelistOperation.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhitelistOperation message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.WhitelistOperation & VCSEC.WhitelistOperation.$Shape} WhitelistOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.WhitelistOperation & VCSEC.WhitelistOperation.$Shape;

        /**
         * Gets the type url for WhitelistOperation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WhitelistOperation {

        /** Properties of a WhitelistOperation. */
        interface $Properties {

            /** WhitelistOperation addPublicKeyToWhitelist */
            addPublicKeyToWhitelist?: (VCSEC.PublicKey.$Properties|null);

            /** WhitelistOperation removePublicKeyFromWhitelist */
            removePublicKeyFromWhitelist?: (VCSEC.PublicKey.$Properties|null);

            /** WhitelistOperation addPermissionsToPublicKey */
            addPermissionsToPublicKey?: (VCSEC.PermissionChange.$Properties|null);

            /** WhitelistOperation removePermissionsFromPublicKey */
            removePermissionsFromPublicKey?: (VCSEC.PermissionChange.$Properties|null);

            /** WhitelistOperation addKeyToWhitelistAndAddPermissions */
            addKeyToWhitelistAndAddPermissions?: (VCSEC.PermissionChange.$Properties|null);

            /** WhitelistOperation updateKeyAndPermissions */
            updateKeyAndPermissions?: (VCSEC.PermissionChange.$Properties|null);

            /** WhitelistOperation addImpermanentKey */
            addImpermanentKey?: (VCSEC.PermissionChange.$Properties|null);

            /** WhitelistOperation addImpermanentKeyAndRemoveExisting */
            addImpermanentKeyAndRemoveExisting?: (VCSEC.PermissionChange.$Properties|null);

            /** WhitelistOperation removeAllImpermanentKeys */
            removeAllImpermanentKeys?: (boolean|null);

            /** WhitelistOperation replaceKey */
            replaceKey?: (VCSEC.ReplaceKey.$Properties|null);

            /** WhitelistOperation metadataForKey */
            metadataForKey?: (VCSEC.KeyMetadata.$Properties|null);

            /** WhitelistOperation sub_message */
            sub_message?: ("addPublicKeyToWhitelist"|"removePublicKeyFromWhitelist"|"addPermissionsToPublicKey"|"removePermissionsFromPublicKey"|"addKeyToWhitelistAndAddPermissions"|"updateKeyAndPermissions"|"addImpermanentKey"|"addImpermanentKeyAndRemoveExisting"|"removeAllImpermanentKeys"|"replaceKey");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a WhitelistOperation. */
        type $Shape = {
          addPublicKeyToWhitelist?: VCSEC.PublicKey.$Shape|null;
          removePublicKeyFromWhitelist?: VCSEC.PublicKey.$Shape|null;
          addPermissionsToPublicKey?: VCSEC.PermissionChange.$Shape|null;
          removePermissionsFromPublicKey?: VCSEC.PermissionChange.$Shape|null;
          addKeyToWhitelistAndAddPermissions?: VCSEC.PermissionChange.$Shape|null;
          updateKeyAndPermissions?: VCSEC.PermissionChange.$Shape|null;
          addImpermanentKey?: VCSEC.PermissionChange.$Shape|null;
          addImpermanentKeyAndRemoveExisting?: VCSEC.PermissionChange.$Shape|null;
          removeAllImpermanentKeys?: boolean|null;
          replaceKey?: VCSEC.ReplaceKey.$Shape|null;
          metadataForKey?: VCSEC.KeyMetadata.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sub_message?: undefined; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "addPublicKeyToWhitelist"; addPublicKeyToWhitelist: VCSEC.PublicKey.$Shape; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "removePublicKeyFromWhitelist"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist: VCSEC.PublicKey.$Shape; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "addPermissionsToPublicKey"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey: VCSEC.PermissionChange.$Shape; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "removePermissionsFromPublicKey"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey: VCSEC.PermissionChange.$Shape; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "addKeyToWhitelistAndAddPermissions"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions: VCSEC.PermissionChange.$Shape; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "updateKeyAndPermissions"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions: VCSEC.PermissionChange.$Shape; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "addImpermanentKey"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey: VCSEC.PermissionChange.$Shape; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "addImpermanentKeyAndRemoveExisting"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting: VCSEC.PermissionChange.$Shape; removeAllImpermanentKeys?: null; replaceKey?: null }|{ sub_message?: "removeAllImpermanentKeys"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys: boolean; replaceKey?: null }|{ sub_message?: "replaceKey"; addPublicKeyToWhitelist?: null; removePublicKeyFromWhitelist?: null; addPermissionsToPublicKey?: null; removePermissionsFromPublicKey?: null; addKeyToWhitelistAndAddPermissions?: null; updateKeyAndPermissions?: null; addImpermanentKey?: null; addImpermanentKeyAndRemoveExisting?: null; removeAllImpermanentKeys?: null; replaceKey: VCSEC.ReplaceKey.$Shape })
        );
    }

    /** OperationStatus_E enum. */
    enum OperationStatus_E {

        /** OPERATIONSTATUS_OK value */
        OPERATIONSTATUS_OK = 0,

        /** OPERATIONSTATUS_WAIT value */
        OPERATIONSTATUS_WAIT = 1,

        /** OPERATIONSTATUS_ERROR value */
        OPERATIONSTATUS_ERROR = 2
    }

    /** SignedMessage_information_E enum. */
    enum SignedMessage_information_E {

        /** SIGNEDMESSAGE_INFORMATION_NONE value */
        SIGNEDMESSAGE_INFORMATION_NONE = 0,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_UNKNOWN value */
        SIGNEDMESSAGE_INFORMATION_FAULT_UNKNOWN = 1,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_NOT_ON_WHITELIST value */
        SIGNEDMESSAGE_INFORMATION_FAULT_NOT_ON_WHITELIST = 2,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_IV_SMALLER_THAN_EXPECTED value */
        SIGNEDMESSAGE_INFORMATION_FAULT_IV_SMALLER_THAN_EXPECTED = 3,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_INVALID_TOKEN value */
        SIGNEDMESSAGE_INFORMATION_FAULT_INVALID_TOKEN = 4,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_TOKEN_AND_COUNTER_INVALID value */
        SIGNEDMESSAGE_INFORMATION_FAULT_TOKEN_AND_COUNTER_INVALID = 5,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_AES_DECRYPT_AUTH value */
        SIGNEDMESSAGE_INFORMATION_FAULT_AES_DECRYPT_AUTH = 6,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_ECDSA_INPUT value */
        SIGNEDMESSAGE_INFORMATION_FAULT_ECDSA_INPUT = 7,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_ECDSA_SIGNATURE value */
        SIGNEDMESSAGE_INFORMATION_FAULT_ECDSA_SIGNATURE = 8,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_LOCAL_ENTITY_START value */
        SIGNEDMESSAGE_INFORMATION_FAULT_LOCAL_ENTITY_START = 9,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_LOCAL_ENTITY_RESULT value */
        SIGNEDMESSAGE_INFORMATION_FAULT_LOCAL_ENTITY_RESULT = 10,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_COULD_NOT_RETRIEVE_KEY value */
        SIGNEDMESSAGE_INFORMATION_FAULT_COULD_NOT_RETRIEVE_KEY = 11,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_COULD_NOT_RETRIEVE_TOKEN value */
        SIGNEDMESSAGE_INFORMATION_FAULT_COULD_NOT_RETRIEVE_TOKEN = 12,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_SIGNATURE_TOO_SHORT value */
        SIGNEDMESSAGE_INFORMATION_FAULT_SIGNATURE_TOO_SHORT = 13,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_TOKEN_IS_INCORRECT_LENGTH value */
        SIGNEDMESSAGE_INFORMATION_FAULT_TOKEN_IS_INCORRECT_LENGTH = 14,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_INCORRECT_EPOCH value */
        SIGNEDMESSAGE_INFORMATION_FAULT_INCORRECT_EPOCH = 15,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_IV_INCORRECT_LENGTH value */
        SIGNEDMESSAGE_INFORMATION_FAULT_IV_INCORRECT_LENGTH = 16,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_TIME_EXPIRED value */
        SIGNEDMESSAGE_INFORMATION_FAULT_TIME_EXPIRED = 17,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_NOT_PROVISIONED_WITH_IDENTITY value */
        SIGNEDMESSAGE_INFORMATION_FAULT_NOT_PROVISIONED_WITH_IDENTITY = 18,

        /** SIGNEDMESSAGE_INFORMATION_FAULT_COULD_NOT_HASH_METADATA value */
        SIGNEDMESSAGE_INFORMATION_FAULT_COULD_NOT_HASH_METADATA = 19
    }

    /** WhitelistOperation_information_E enum. */
    enum WhitelistOperation_information_E {

        /** WHITELISTOPERATION_INFORMATION_NONE value */
        WHITELISTOPERATION_INFORMATION_NONE = 0,

        /** WHITELISTOPERATION_INFORMATION_UNDOCUMENTED_ERROR value */
        WHITELISTOPERATION_INFORMATION_UNDOCUMENTED_ERROR = 1,

        /** WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_REMOVE_ONESELF value */
        WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_REMOVE_ONESELF = 2,

        /** WHITELISTOPERATION_INFORMATION_KEYFOB_SLOTS_FULL value */
        WHITELISTOPERATION_INFORMATION_KEYFOB_SLOTS_FULL = 3,

        /** WHITELISTOPERATION_INFORMATION_WHITELIST_FULL value */
        WHITELISTOPERATION_INFORMATION_WHITELIST_FULL = 4,

        /** WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_ADD value */
        WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_ADD = 5,

        /** WHITELISTOPERATION_INFORMATION_INVALID_PUBLIC_KEY value */
        WHITELISTOPERATION_INFORMATION_INVALID_PUBLIC_KEY = 6,

        /** WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_REMOVE value */
        WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_REMOVE = 7,

        /** WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_CHANGE_PERMISSIONS value */
        WHITELISTOPERATION_INFORMATION_NO_PERMISSION_TO_CHANGE_PERMISSIONS = 8,

        /** WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ELEVATE_OTHER_ABOVE_ONESELF value */
        WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ELEVATE_OTHER_ABOVE_ONESELF = 9,

        /** WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_DEMOTE_SUPERIOR_TO_ONESELF value */
        WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_DEMOTE_SUPERIOR_TO_ONESELF = 10,

        /** WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_REMOVE_OWN_PERMISSIONS value */
        WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_REMOVE_OWN_PERMISSIONS = 11,

        /** WHITELISTOPERATION_INFORMATION_PUBLIC_KEY_NOT_ON_WHITELIST value */
        WHITELISTOPERATION_INFORMATION_PUBLIC_KEY_NOT_ON_WHITELIST = 12,

        /** WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ADD_KEY_THAT_IS_ALREADY_ON_THE_WHITELIST value */
        WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ADD_KEY_THAT_IS_ALREADY_ON_THE_WHITELIST = 13,

        /** WHITELISTOPERATION_INFORMATION_NOT_ALLOWED_TO_ADD_UNLESS_ON_READER value */
        WHITELISTOPERATION_INFORMATION_NOT_ALLOWED_TO_ADD_UNLESS_ON_READER = 14,

        /** WHITELISTOPERATION_INFORMATION_FM_MODIFYING_OUTSIDE_OF_F_MODE value */
        WHITELISTOPERATION_INFORMATION_FM_MODIFYING_OUTSIDE_OF_F_MODE = 15,

        /** WHITELISTOPERATION_INFORMATION_FM_ATTEMPTING_TO_ADD_PERMANENT_KEY value */
        WHITELISTOPERATION_INFORMATION_FM_ATTEMPTING_TO_ADD_PERMANENT_KEY = 16,

        /** WHITELISTOPERATION_INFORMATION_FM_ATTEMPTING_TO_REMOVE_PERMANENT_KEY value */
        WHITELISTOPERATION_INFORMATION_FM_ATTEMPTING_TO_REMOVE_PERMANENT_KEY = 17,

        /** WHITELISTOPERATION_INFORMATION_KEYCHAIN_WHILE_FS_FULL value */
        WHITELISTOPERATION_INFORMATION_KEYCHAIN_WHILE_FS_FULL = 18,

        /** WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ADD_KEY_WITHOUT_ROLE value */
        WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ADD_KEY_WITHOUT_ROLE = 19,

        /** WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ADD_KEY_WITH_SERVICE_ROLE value */
        WHITELISTOPERATION_INFORMATION_ATTEMPTING_TO_ADD_KEY_WITH_SERVICE_ROLE = 20,

        /** WHITELISTOPERATION_INFORMATION_NON_SERVICE_KEY_ATTEMPTING_TO_ADD_SERVICE_TECH value */
        WHITELISTOPERATION_INFORMATION_NON_SERVICE_KEY_ATTEMPTING_TO_ADD_SERVICE_TECH = 21,

        /** WHITELISTOPERATION_INFORMATION_SERVICE_KEY_ATTEMPTING_TO_ADD_SERVICE_TECH_OUTSIDE_SERVICE_MODE value */
        WHITELISTOPERATION_INFORMATION_SERVICE_KEY_ATTEMPTING_TO_ADD_SERVICE_TECH_OUTSIDE_SERVICE_MODE = 22,

        /** WHITELISTOPERATION_INFORMATION_COULD_NOT_START_LOCAL_ENTITY_AUTH value */
        WHITELISTOPERATION_INFORMATION_COULD_NOT_START_LOCAL_ENTITY_AUTH = 23,

        /** WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_UI_DENIED value */
        WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_UI_DENIED = 24,

        /** WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_TIMED_OUT_WAITING_FOR_TAP value */
        WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_TIMED_OUT_WAITING_FOR_TAP = 25,

        /** WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_TIMED_OUT_WAITING_FOR_UI_ACK value */
        WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_TIMED_OUT_WAITING_FOR_UI_ACK = 26,

        /** WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_VALET_MODE value */
        WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_VALET_MODE = 27,

        /** WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_CANCELLED value */
        WHITELISTOPERATION_INFORMATION_LOCAL_ENTITY_AUTH_FAILED_CANCELLED = 28
    }

    /**
     * Properties of a WhitelistOperation_status.
     * @deprecated Use VCSEC.WhitelistOperation_status.$Properties instead.
     */
    interface IWhitelistOperation_status extends VCSEC.WhitelistOperation_status.$Properties {
    }

    /** Represents a WhitelistOperation_status. */
    class WhitelistOperation_status {

        /**
         * Constructs a new WhitelistOperation_status.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.WhitelistOperation_status.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WhitelistOperation_status whitelistOperationInformation. */
        whitelistOperationInformation: VCSEC.WhitelistOperation_information_E;

        /** WhitelistOperation_status signerOfOperation. */
        signerOfOperation?: (VCSEC.KeyIdentifier.$Properties|null);

        /** WhitelistOperation_status operationStatus. */
        operationStatus: VCSEC.OperationStatus_E;

        /**
         * Encodes the specified WhitelistOperation_status message. Does not implicitly {@link VCSEC.WhitelistOperation_status.verify|verify} messages.
         * @param m WhitelistOperation_status message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.WhitelistOperation_status.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhitelistOperation_status message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.WhitelistOperation_status & VCSEC.WhitelistOperation_status.$Shape} WhitelistOperation_status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.WhitelistOperation_status & VCSEC.WhitelistOperation_status.$Shape;

        /**
         * Gets the type url for WhitelistOperation_status
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WhitelistOperation_status {

        /** Properties of a WhitelistOperation_status. */
        interface $Properties {

            /** WhitelistOperation_status whitelistOperationInformation */
            whitelistOperationInformation?: (VCSEC.WhitelistOperation_information_E|null);

            /** WhitelistOperation_status signerOfOperation */
            signerOfOperation?: (VCSEC.KeyIdentifier.$Properties|null);

            /** WhitelistOperation_status operationStatus */
            operationStatus?: (VCSEC.OperationStatus_E|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WhitelistOperation_status. */
        type $Shape = VCSEC.WhitelistOperation_status.$Properties;
    }

    /**
     * Properties of a SignedMessage_status.
     * @deprecated Use VCSEC.SignedMessage_status.$Properties instead.
     */
    interface ISignedMessage_status extends VCSEC.SignedMessage_status.$Properties {
    }

    /** Represents a SignedMessage_status. */
    class SignedMessage_status {

        /**
         * Constructs a new SignedMessage_status.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.SignedMessage_status.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SignedMessage_status counter. */
        counter: number;

        /** SignedMessage_status signedMessageInformation. */
        signedMessageInformation: VCSEC.SignedMessage_information_E;

        /**
         * Encodes the specified SignedMessage_status message. Does not implicitly {@link VCSEC.SignedMessage_status.verify|verify} messages.
         * @param m SignedMessage_status message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.SignedMessage_status.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedMessage_status message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.SignedMessage_status & VCSEC.SignedMessage_status.$Shape} SignedMessage_status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.SignedMessage_status & VCSEC.SignedMessage_status.$Shape;

        /**
         * Gets the type url for SignedMessage_status
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SignedMessage_status {

        /** Properties of a SignedMessage_status. */
        interface $Properties {

            /** SignedMessage_status counter */
            counter?: (number|null);

            /** SignedMessage_status signedMessageInformation */
            signedMessageInformation?: (VCSEC.SignedMessage_information_E|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SignedMessage_status. */
        type $Shape = VCSEC.SignedMessage_status.$Properties;
    }

    /**
     * Properties of a CommandStatus.
     * @deprecated Use VCSEC.CommandStatus.$Properties instead.
     */
    interface ICommandStatus extends VCSEC.CommandStatus.$Properties {
    }

    /** Represents a CommandStatus. */
    class CommandStatus {

        /**
         * Constructs a new CommandStatus.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.CommandStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CommandStatus operationStatus. */
        operationStatus: VCSEC.OperationStatus_E;

        /** CommandStatus signedMessageStatus. */
        signedMessageStatus?: (VCSEC.SignedMessage_status.$Properties|null);

        /** CommandStatus whitelistOperationStatus. */
        whitelistOperationStatus?: (VCSEC.WhitelistOperation_status.$Properties|null);

        /** CommandStatus sub_message. */
        sub_message?: ("signedMessageStatus"|"whitelistOperationStatus");

        /**
         * Encodes the specified CommandStatus message. Does not implicitly {@link VCSEC.CommandStatus.verify|verify} messages.
         * @param m CommandStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.CommandStatus.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.CommandStatus & VCSEC.CommandStatus.$Shape} CommandStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.CommandStatus & VCSEC.CommandStatus.$Shape;

        /**
         * Gets the type url for CommandStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CommandStatus {

        /** Properties of a CommandStatus. */
        interface $Properties {

            /** CommandStatus operationStatus */
            operationStatus?: (VCSEC.OperationStatus_E|null);

            /** CommandStatus signedMessageStatus */
            signedMessageStatus?: (VCSEC.SignedMessage_status.$Properties|null);

            /** CommandStatus whitelistOperationStatus */
            whitelistOperationStatus?: (VCSEC.WhitelistOperation_status.$Properties|null);

            /** CommandStatus sub_message */
            sub_message?: ("signedMessageStatus"|"whitelistOperationStatus");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a CommandStatus. */
        type $Shape = {
          operationStatus?: VCSEC.OperationStatus_E|null;
          signedMessageStatus?: VCSEC.SignedMessage_status.$Shape|null;
          whitelistOperationStatus?: VCSEC.WhitelistOperation_status.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sub_message?: undefined; signedMessageStatus?: null; whitelistOperationStatus?: null }|{ sub_message?: "signedMessageStatus"; signedMessageStatus: VCSEC.SignedMessage_status.$Shape; whitelistOperationStatus?: null }|{ sub_message?: "whitelistOperationStatus"; signedMessageStatus?: null; whitelistOperationStatus: VCSEC.WhitelistOperation_status.$Shape })
        );
    }

    /**
     * Properties of an UnsignedMessage.
     * @deprecated Use VCSEC.UnsignedMessage.$Properties instead.
     */
    interface IUnsignedMessage extends VCSEC.UnsignedMessage.$Properties {
    }

    /** Represents an UnsignedMessage. */
    class UnsignedMessage {

        /**
         * Constructs a new UnsignedMessage.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.UnsignedMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UnsignedMessage InformationRequest. */
        InformationRequest?: (VCSEC.InformationRequest.$Properties|null);

        /** UnsignedMessage RKEAction. */
        RKEAction?: (VCSEC.RKEAction_E|null);

        /** UnsignedMessage closureMoveRequest. */
        closureMoveRequest?: (VCSEC.ClosureMoveRequest.$Properties|null);

        /** UnsignedMessage WhitelistOperation. */
        WhitelistOperation?: (VCSEC.WhitelistOperation.$Properties|null);

        /** UnsignedMessage sub_message. */
        sub_message?: ("InformationRequest"|"RKEAction"|"closureMoveRequest"|"WhitelistOperation");

        /**
         * Encodes the specified UnsignedMessage message. Does not implicitly {@link VCSEC.UnsignedMessage.verify|verify} messages.
         * @param m UnsignedMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.UnsignedMessage.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnsignedMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.UnsignedMessage & VCSEC.UnsignedMessage.$Shape} UnsignedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.UnsignedMessage & VCSEC.UnsignedMessage.$Shape;

        /**
         * Gets the type url for UnsignedMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UnsignedMessage {

        /** Properties of an UnsignedMessage. */
        interface $Properties {

            /** UnsignedMessage InformationRequest */
            InformationRequest?: (VCSEC.InformationRequest.$Properties|null);

            /** UnsignedMessage RKEAction */
            RKEAction?: (VCSEC.RKEAction_E|null);

            /** UnsignedMessage closureMoveRequest */
            closureMoveRequest?: (VCSEC.ClosureMoveRequest.$Properties|null);

            /** UnsignedMessage WhitelistOperation */
            WhitelistOperation?: (VCSEC.WhitelistOperation.$Properties|null);

            /** UnsignedMessage sub_message */
            sub_message?: ("InformationRequest"|"RKEAction"|"closureMoveRequest"|"WhitelistOperation");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an UnsignedMessage. */
        type $Shape = {
          InformationRequest?: VCSEC.InformationRequest.$Shape|null;
          RKEAction?: VCSEC.RKEAction_E|null;
          closureMoveRequest?: VCSEC.ClosureMoveRequest.$Shape|null;
          WhitelistOperation?: VCSEC.WhitelistOperation.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sub_message?: undefined; InformationRequest?: null; RKEAction?: null; closureMoveRequest?: null; WhitelistOperation?: null }|{ sub_message?: "InformationRequest"; InformationRequest: VCSEC.InformationRequest.$Shape; RKEAction?: null; closureMoveRequest?: null; WhitelistOperation?: null }|{ sub_message?: "RKEAction"; InformationRequest?: null; RKEAction: VCSEC.RKEAction_E; closureMoveRequest?: null; WhitelistOperation?: null }|{ sub_message?: "closureMoveRequest"; InformationRequest?: null; RKEAction?: null; closureMoveRequest: VCSEC.ClosureMoveRequest.$Shape; WhitelistOperation?: null }|{ sub_message?: "WhitelistOperation"; InformationRequest?: null; RKEAction?: null; closureMoveRequest?: null; WhitelistOperation: VCSEC.WhitelistOperation.$Shape })
        );
    }

    /** ClosureState_E enum. */
    enum ClosureState_E {

        /** CLOSURESTATE_CLOSED value */
        CLOSURESTATE_CLOSED = 0,

        /** CLOSURESTATE_OPEN value */
        CLOSURESTATE_OPEN = 1,

        /** CLOSURESTATE_AJAR value */
        CLOSURESTATE_AJAR = 2,

        /** CLOSURESTATE_UNKNOWN value */
        CLOSURESTATE_UNKNOWN = 3,

        /** CLOSURESTATE_FAILED_UNLATCH value */
        CLOSURESTATE_FAILED_UNLATCH = 4,

        /** CLOSURESTATE_OPENING value */
        CLOSURESTATE_OPENING = 5,

        /** CLOSURESTATE_CLOSING value */
        CLOSURESTATE_CLOSING = 6
    }

    /** VehicleLockState_E enum. */
    enum VehicleLockState_E {

        /** VEHICLELOCKSTATE_UNLOCKED value */
        VEHICLELOCKSTATE_UNLOCKED = 0,

        /** VEHICLELOCKSTATE_LOCKED value */
        VEHICLELOCKSTATE_LOCKED = 1,

        /** VEHICLELOCKSTATE_INTERNAL_LOCKED value */
        VEHICLELOCKSTATE_INTERNAL_LOCKED = 2,

        /** VEHICLELOCKSTATE_SELECTIVE_UNLOCKED value */
        VEHICLELOCKSTATE_SELECTIVE_UNLOCKED = 3
    }

    /**
     * Properties of a ClosureStatuses.
     * @deprecated Use VCSEC.ClosureStatuses.$Properties instead.
     */
    interface IClosureStatuses extends VCSEC.ClosureStatuses.$Properties {
    }

    /** Represents a ClosureStatuses. */
    class ClosureStatuses {

        /**
         * Constructs a new ClosureStatuses.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.ClosureStatuses.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ClosureStatuses frontDriverDoor. */
        frontDriverDoor: VCSEC.ClosureState_E;

        /** ClosureStatuses frontPassengerDoor. */
        frontPassengerDoor: VCSEC.ClosureState_E;

        /** ClosureStatuses rearDriverDoor. */
        rearDriverDoor: VCSEC.ClosureState_E;

        /** ClosureStatuses rearPassengerDoor. */
        rearPassengerDoor: VCSEC.ClosureState_E;

        /** ClosureStatuses rearTrunk. */
        rearTrunk: VCSEC.ClosureState_E;

        /** ClosureStatuses frontTrunk. */
        frontTrunk: VCSEC.ClosureState_E;

        /** ClosureStatuses chargePort. */
        chargePort: VCSEC.ClosureState_E;

        /** ClosureStatuses tonneau. */
        tonneau: VCSEC.ClosureState_E;

        /**
         * Encodes the specified ClosureStatuses message. Does not implicitly {@link VCSEC.ClosureStatuses.verify|verify} messages.
         * @param m ClosureStatuses message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.ClosureStatuses.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosureStatuses message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.ClosureStatuses & VCSEC.ClosureStatuses.$Shape} ClosureStatuses
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.ClosureStatuses & VCSEC.ClosureStatuses.$Shape;

        /**
         * Gets the type url for ClosureStatuses
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ClosureStatuses {

        /** Properties of a ClosureStatuses. */
        interface $Properties {

            /** ClosureStatuses frontDriverDoor */
            frontDriverDoor?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses frontPassengerDoor */
            frontPassengerDoor?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses rearDriverDoor */
            rearDriverDoor?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses rearPassengerDoor */
            rearPassengerDoor?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses rearTrunk */
            rearTrunk?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses frontTrunk */
            frontTrunk?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses chargePort */
            chargePort?: (VCSEC.ClosureState_E|null);

            /** ClosureStatuses tonneau */
            tonneau?: (VCSEC.ClosureState_E|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ClosureStatuses. */
        type $Shape = VCSEC.ClosureStatuses.$Properties;
    }

    /** VehicleSleepStatus_E enum. */
    enum VehicleSleepStatus_E {

        /** VEHICLE_SLEEP_STATUS_UNKNOWN value */
        VEHICLE_SLEEP_STATUS_UNKNOWN = 0,

        /** VEHICLE_SLEEP_STATUS_AWAKE value */
        VEHICLE_SLEEP_STATUS_AWAKE = 1,

        /** VEHICLE_SLEEP_STATUS_ASLEEP value */
        VEHICLE_SLEEP_STATUS_ASLEEP = 2
    }

    /**
     * Properties of a DetailedClosureStatus.
     * @deprecated Use VCSEC.DetailedClosureStatus.$Properties instead.
     */
    interface IDetailedClosureStatus extends VCSEC.DetailedClosureStatus.$Properties {
    }

    /** Represents a DetailedClosureStatus. */
    class DetailedClosureStatus {

        /**
         * Constructs a new DetailedClosureStatus.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.DetailedClosureStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DetailedClosureStatus tonneauPercentOpen. */
        tonneauPercentOpen: number;

        /**
         * Encodes the specified DetailedClosureStatus message. Does not implicitly {@link VCSEC.DetailedClosureStatus.verify|verify} messages.
         * @param m DetailedClosureStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.DetailedClosureStatus.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DetailedClosureStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.DetailedClosureStatus & VCSEC.DetailedClosureStatus.$Shape} DetailedClosureStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.DetailedClosureStatus & VCSEC.DetailedClosureStatus.$Shape;

        /**
         * Gets the type url for DetailedClosureStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DetailedClosureStatus {

        /** Properties of a DetailedClosureStatus. */
        interface $Properties {

            /** DetailedClosureStatus tonneauPercentOpen */
            tonneauPercentOpen?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DetailedClosureStatus. */
        type $Shape = VCSEC.DetailedClosureStatus.$Properties;
    }

    /** UserPresence_E enum. */
    enum UserPresence_E {

        /** VEHICLE_USER_PRESENCE_UNKNOWN value */
        VEHICLE_USER_PRESENCE_UNKNOWN = 0,

        /** VEHICLE_USER_PRESENCE_NOT_PRESENT value */
        VEHICLE_USER_PRESENCE_NOT_PRESENT = 1,

        /** VEHICLE_USER_PRESENCE_PRESENT value */
        VEHICLE_USER_PRESENCE_PRESENT = 2
    }

    /**
     * Properties of a VehicleStatus.
     * @deprecated Use VCSEC.VehicleStatus.$Properties instead.
     */
    interface IVehicleStatus extends VCSEC.VehicleStatus.$Properties {
    }

    /** Represents a VehicleStatus. */
    class VehicleStatus {

        /**
         * Constructs a new VehicleStatus.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.VehicleStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VehicleStatus closureStatuses. */
        closureStatuses?: (VCSEC.ClosureStatuses.$Properties|null);

        /** VehicleStatus vehicleLockState. */
        vehicleLockState: VCSEC.VehicleLockState_E;

        /** VehicleStatus vehicleSleepStatus. */
        vehicleSleepStatus: VCSEC.VehicleSleepStatus_E;

        /** VehicleStatus userPresence. */
        userPresence: VCSEC.UserPresence_E;

        /** VehicleStatus detailedClosureStatus. */
        detailedClosureStatus?: (VCSEC.DetailedClosureStatus.$Properties|null);

        /**
         * Encodes the specified VehicleStatus message. Does not implicitly {@link VCSEC.VehicleStatus.verify|verify} messages.
         * @param m VehicleStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.VehicleStatus.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.VehicleStatus & VCSEC.VehicleStatus.$Shape} VehicleStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.VehicleStatus & VCSEC.VehicleStatus.$Shape;

        /**
         * Gets the type url for VehicleStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleStatus {

        /** Properties of a VehicleStatus. */
        interface $Properties {

            /** VehicleStatus closureStatuses */
            closureStatuses?: (VCSEC.ClosureStatuses.$Properties|null);

            /** VehicleStatus vehicleLockState */
            vehicleLockState?: (VCSEC.VehicleLockState_E|null);

            /** VehicleStatus vehicleSleepStatus */
            vehicleSleepStatus?: (VCSEC.VehicleSleepStatus_E|null);

            /** VehicleStatus userPresence */
            userPresence?: (VCSEC.UserPresence_E|null);

            /** VehicleStatus detailedClosureStatus */
            detailedClosureStatus?: (VCSEC.DetailedClosureStatus.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VehicleStatus. */
        type $Shape = VCSEC.VehicleStatus.$Properties;
    }

    /**
     * Properties of a FromVCSECMessage.
     * @deprecated Use VCSEC.FromVCSECMessage.$Properties instead.
     */
    interface IFromVCSECMessage extends VCSEC.FromVCSECMessage.$Properties {
    }

    /** Represents a FromVCSECMessage. */
    class FromVCSECMessage {

        /**
         * Constructs a new FromVCSECMessage.
         * @param [p] Properties to set
         */
        constructor(p?: VCSEC.FromVCSECMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** FromVCSECMessage vehicleStatus. */
        vehicleStatus?: (VCSEC.VehicleStatus.$Properties|null);

        /** FromVCSECMessage commandStatus. */
        commandStatus?: (VCSEC.CommandStatus.$Properties|null);

        /** FromVCSECMessage whitelistInfo. */
        whitelistInfo?: (VCSEC.WhitelistInfo.$Properties|null);

        /** FromVCSECMessage whitelistEntryInfo. */
        whitelistEntryInfo?: (VCSEC.WhitelistEntryInfo.$Properties|null);

        /** FromVCSECMessage nominalError. */
        nominalError?: (Errors.NominalError.$Properties|null);

        /** FromVCSECMessage sub_message. */
        sub_message?: ("vehicleStatus"|"commandStatus"|"whitelistInfo"|"whitelistEntryInfo"|"nominalError");

        /**
         * Encodes the specified FromVCSECMessage message. Does not implicitly {@link VCSEC.FromVCSECMessage.verify|verify} messages.
         * @param m FromVCSECMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: VCSEC.FromVCSECMessage.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FromVCSECMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {VCSEC.FromVCSECMessage & VCSEC.FromVCSECMessage.$Shape} FromVCSECMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VCSEC.FromVCSECMessage & VCSEC.FromVCSECMessage.$Shape;

        /**
         * Gets the type url for FromVCSECMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FromVCSECMessage {

        /** Properties of a FromVCSECMessage. */
        interface $Properties {

            /** FromVCSECMessage vehicleStatus */
            vehicleStatus?: (VCSEC.VehicleStatus.$Properties|null);

            /** FromVCSECMessage commandStatus */
            commandStatus?: (VCSEC.CommandStatus.$Properties|null);

            /** FromVCSECMessage whitelistInfo */
            whitelistInfo?: (VCSEC.WhitelistInfo.$Properties|null);

            /** FromVCSECMessage whitelistEntryInfo */
            whitelistEntryInfo?: (VCSEC.WhitelistEntryInfo.$Properties|null);

            /** FromVCSECMessage nominalError */
            nominalError?: (Errors.NominalError.$Properties|null);

            /** FromVCSECMessage sub_message */
            sub_message?: ("vehicleStatus"|"commandStatus"|"whitelistInfo"|"whitelistEntryInfo"|"nominalError");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a FromVCSECMessage. */
        type $Shape = {
          vehicleStatus?: VCSEC.VehicleStatus.$Shape|null;
          commandStatus?: VCSEC.CommandStatus.$Shape|null;
          whitelistInfo?: VCSEC.WhitelistInfo.$Shape|null;
          whitelistEntryInfo?: VCSEC.WhitelistEntryInfo.$Shape|null;
          nominalError?: Errors.NominalError.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ sub_message?: undefined; vehicleStatus?: null; commandStatus?: null; whitelistInfo?: null; whitelistEntryInfo?: null; nominalError?: null }|{ sub_message?: "vehicleStatus"; vehicleStatus: VCSEC.VehicleStatus.$Shape; commandStatus?: null; whitelistInfo?: null; whitelistEntryInfo?: null; nominalError?: null }|{ sub_message?: "commandStatus"; vehicleStatus?: null; commandStatus: VCSEC.CommandStatus.$Shape; whitelistInfo?: null; whitelistEntryInfo?: null; nominalError?: null }|{ sub_message?: "whitelistInfo"; vehicleStatus?: null; commandStatus?: null; whitelistInfo: VCSEC.WhitelistInfo.$Shape; whitelistEntryInfo?: null; nominalError?: null }|{ sub_message?: "whitelistEntryInfo"; vehicleStatus?: null; commandStatus?: null; whitelistInfo?: null; whitelistEntryInfo: VCSEC.WhitelistEntryInfo.$Shape; nominalError?: null }|{ sub_message?: "nominalError"; vehicleStatus?: null; commandStatus?: null; whitelistInfo?: null; whitelistEntryInfo?: null; nominalError: Errors.NominalError.$Shape })
        );
    }
}

/** Namespace Keys. */
export namespace Keys {

    /** Role enum. */
    enum Role {

        /** ROLE_NONE value */
        ROLE_NONE = 0,

        /** ROLE_SERVICE value */
        ROLE_SERVICE = 1,

        /** ROLE_OWNER value */
        ROLE_OWNER = 2,

        /** ROLE_DRIVER value */
        ROLE_DRIVER = 3,

        /** ROLE_FM value */
        ROLE_FM = 4,

        /** ROLE_VEHICLE_MONITOR value */
        ROLE_VEHICLE_MONITOR = 5,

        /** ROLE_CHARGING_MANAGER value */
        ROLE_CHARGING_MANAGER = 6,

        /** ROLE_GUEST value */
        ROLE_GUEST = 8
    }
}

/** Namespace Errors. */
export namespace Errors {

    /** GenericError_E enum. */
    enum GenericError_E {

        /** GENERICERROR_NONE value */
        GENERICERROR_NONE = 0,

        /** GENERICERROR_UNKNOWN value */
        GENERICERROR_UNKNOWN = 1,

        /** GENERICERROR_CLOSURES_OPEN value */
        GENERICERROR_CLOSURES_OPEN = 2,

        /** GENERICERROR_ALREADY_ON value */
        GENERICERROR_ALREADY_ON = 3,

        /** GENERICERROR_DISABLED_FOR_USER_COMMAND value */
        GENERICERROR_DISABLED_FOR_USER_COMMAND = 4,

        /** GENERICERROR_VEHICLE_NOT_IN_PARK value */
        GENERICERROR_VEHICLE_NOT_IN_PARK = 5,

        /** GENERICERROR_UNAUTHORIZED value */
        GENERICERROR_UNAUTHORIZED = 6,

        /** GENERICERROR_NOT_ALLOWED_OVER_TRANSPORT value */
        GENERICERROR_NOT_ALLOWED_OVER_TRANSPORT = 7
    }

    /**
     * Properties of a NominalError.
     * @deprecated Use Errors.NominalError.$Properties instead.
     */
    interface INominalError extends Errors.NominalError.$Properties {
    }

    /** Represents a NominalError. */
    class NominalError {

        /**
         * Constructs a new NominalError.
         * @param [p] Properties to set
         */
        constructor(p?: Errors.NominalError.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** NominalError genericError. */
        genericError: Errors.GenericError_E;

        /**
         * Encodes the specified NominalError message. Does not implicitly {@link Errors.NominalError.verify|verify} messages.
         * @param m NominalError message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        static encode(m: Errors.NominalError.$Properties, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NominalError message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns {Errors.NominalError & Errors.NominalError.$Shape} NominalError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Errors.NominalError & Errors.NominalError.$Shape;

        /**
         * Gets the type url for NominalError
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NominalError {

        /** Properties of a NominalError. */
        interface $Properties {

            /** NominalError genericError */
            genericError?: (Errors.GenericError_E|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NominalError. */
        type $Shape = Errors.NominalError.$Properties;
    }
}

/** Namespace ManagedCharging. */
export namespace ManagedCharging {

    /** ChargeOnSolarNoChargeReason enum. */
    enum ChargeOnSolarNoChargeReason {

        /** CHARGE_ON_SOLAR_NO_CHARGE_REASON_INVALID value */
        CHARGE_ON_SOLAR_NO_CHARGE_REASON_INVALID = 0,

        /** CHARGE_ON_SOLAR_NO_CHARGE_REASON_POWERWALL_CHARGE_PRIORITY value */
        CHARGE_ON_SOLAR_NO_CHARGE_REASON_POWERWALL_CHARGE_PRIORITY = 1,

        /** CHARGE_ON_SOLAR_NO_CHARGE_REASON_INSUFFICIENT_SOLAR value */
        CHARGE_ON_SOLAR_NO_CHARGE_REASON_INSUFFICIENT_SOLAR = 2,

        /** CHARGE_ON_SOLAR_NO_CHARGE_REASON_GRID_EXPORT_PRIORITY value */
        CHARGE_ON_SOLAR_NO_CHARGE_REASON_GRID_EXPORT_PRIORITY = 3,

        /** CHARGE_ON_SOLAR_NO_CHARGE_REASON_ALTERNATE_VEHICLE_CHARGE_PRIORITY value */
        CHARGE_ON_SOLAR_NO_CHARGE_REASON_ALTERNATE_VEHICLE_CHARGE_PRIORITY = 4
    }
}
