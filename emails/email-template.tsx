import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
  Row,
  Column,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>🚀 New message from {name} — Portfolio Contact</Preview>

      <Tailwind>
        <Body className="bg-[#0e0e12] text-white font-sans">
          <Container className="max-w-2xl mx-auto rounded-xl shadow-xl my-10 border border-[#1f1f24] bg-[#141419] overflow-hidden">
            {/* Header */}
            <Section className="px-8 py-10 text-center bg-gradient-to-r from-[#4f46e5] to-[#9333ea]">
              <Heading className="text-3xl font-bold text-white m-0 tracking-tight">
                Khant Zaw Thein
              </Heading>
              <Text className="text-indigo-200 font-medium text-sm mt-2 m-0">
                Full-Stack Developer
              </Text>
            </Section>

            {/* Intro */}
            <Section className="px-8 py-8">
              <Heading className="text-2xl font-bold text-white m-0 mb-3">
                📩 New Portfolio Message
              </Heading>

              <Text className="text-gray-300 text-base mb-6 leading-normal">
                You've received a new message from your portfolio website.
              </Text>

              {/* Sender Info */}
              <Section className="w-full mb-8">
                {/* Row 1 */}
                <Row>
                  <Column className="bg-[#1a1a20] border border-[#2a2a33] rounded-lg p-4">
                    <Text className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-1 m-0">
                      From
                    </Text>
                    <Text className="text-gray-100 font-medium m-0">
                      {name}
                    </Text>
                  </Column>

                  <Column width="10"></Column>

                  <Column className="bg-[#1a1a20] border border-[#2a2a33] rounded-lg p-4">
                    <Text className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-1 m-0">
                      Email
                    </Text>
                    <Text className="text-gray-100 font-medium m-0">
                      {email}
                    </Text>
                  </Column>
                </Row>

                {/* Spacing */}
                <div style={{ height: "12px" }} />

                {/* Row 2 */}
                <Row>
                  <Column className="bg-[#1a1a20] border border-[#2a2a33] rounded-lg p-4">
                    <Text className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-1 m-0">
                      Subject
                    </Text>
                    <Text className="text-gray-100 font-medium m-0">
                      {subject}
                    </Text>
                  </Column>

                  <Column width="10"></Column>

                  <Column className="bg-[#1a1a20] border border-[#2a2a33] rounded-lg p-4">
                    <Text className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-1 m-0">
                      Received
                    </Text>
                    <Text className="text-gray-100 font-medium m-0">
                      {new Date().toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </Column>
                </Row>
              </Section>

              {/* Message Body */}
              <Section className="bg-[#1a1a20] border border-[#2a2a33] rounded-xl p-6">
                <Text className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-3 m-0">
                  Message
                </Text>
                <Text className="text-gray-200 leading-relaxed whitespace-pre-wrap m-0">
                  {message}
                </Text>
              </Section>

              {/* CTA */}
              <Section className="mt-8 bg-[#111117] border border-[#22222a] rounded-xl p-8 text-center">
                <Heading className="text-lg font-semibold text-white mb-2 m-0">
                  Ready to reply?
                </Heading>
                <Text className="text-gray-400 mb-4 m-0">
                  Click the button below to respond to the sender
                </Text>

                <Link
                  href={`mailto:${email}?subject=Re: ${subject}`}
                  className="inline-block px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#4f46e5] to-[#9333ea] shadow-lg"
                >
                  Reply via Email
                </Link>
              </Section>
            </Section>

            {/* Divider */}
            <Hr className="border-[#2a2a33]" />

            {/* Footer */}
            <Section className="px-8 py-8 text-center bg-[#0e0e12]">
              <Text className="text-gray-500 font-medium text-sm mb-3">
                © {new Date().getFullYear()} Khant Zaw Thein — All rights
                reserved.
              </Text>
              <Text className="text-gray-600 font-medium text-xs">
                This email was generated from your portfolio contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
