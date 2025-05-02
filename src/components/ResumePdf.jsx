// ResumePDF.js
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#333",
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  topHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  hr: {
    borderBottom: "1 solid #ccc",
    marginVertical: 6,
  },
  line: {
    marginBottom: 4,
    textAlign: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bullet: {
    fontWeight: "bold",
    marginRight: 5,
    color:"#000000"
  },
  gray: {
    color: "#6b7280", // Tailwind's gray-500 equivalent
  },
  link: {
    color: "#007BFF", // A blue color for links
    textDecoration: "underline",
  },
});

const ResumePDF = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.topHeading}>{resumeData.personal.name}</Text>
        <Text style={[styles.line, styles.gray]}>{resumeData.personal.role}</Text>
        <Text style={[styles.line, styles.gray]}>
          {resumeData.personal.email} • {resumeData.personal.phone} •{" "}
          {resumeData.personal.website} • {resumeData.personal.address}
        </Text>
      </View>

      {/* Summary */}
      {resumeData.personal.summary && (
        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <View style={styles.hr} />
          <Text style={styles.gray}>{resumeData.personal.summary}</Text>
        </View>
      )}

      {/* Education */}
{resumeData.education.length > 0 && (
  <View style={styles.section}>
    <Text style={styles.heading}>Education</Text>
    <View style={styles.hr} />
    {resumeData.education.map((edu) => (
      <View key={edu.id} style={[styles.rowBetween, { marginBottom: 8 }]}>
        <View>
          <Text>{edu.degree}</Text>
          <Text style={styles.gray}>{edu.institute}</Text>
        </View>
        <Text style={styles.gray}>
          {edu.startYear} - {edu.endYear}
        </Text>
      </View>
    ))}
  </View>
)}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          <View style={styles.hr} />
          {resumeData.experience.map((exp) => (
            <View key={exp.id} style={{ marginBottom: 8 }}>
              <View style={styles.rowBetween}>
                <View>
                  <Text>{exp.role}</Text>
                  <Text style={styles.gray}>{exp.institute}</Text>
                </View>
                <Text style={styles.gray}>
                  {exp.startYear} - {exp.endYear}
                </Text>
              </View>
              <Text style={styles.gray}>{exp.summary}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View style={styles.hr} />
          <Text>
            {resumeData.skills.map((skill, i) => (
              <Text key={i}>
                <Text style={styles.bullet}>•</Text>
                {skill}{" "}
              </Text>
            ))}
          </Text>
        </View>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          <View style={styles.hr} />
          {resumeData.projects.map((proj) => (
            <View key={proj.id} style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: "bold" }}>{proj.name}</Text>
              <Text style={styles.gray}>{proj.description}</Text>
              {proj.liveLink && (
                <Text>
                  Live Link:{" "}
                  <Link src={proj.liveLink} style={styles.link}>
                    {proj.liveLink}
                  </Link>
                </Text>
              )}
              {proj.githubLink && (
                <Text>
                  GitHub:{" "}
                  <Link src={proj.githubLink} style={styles.link}>
                    {proj.githubLink}
                  </Link>
                </Text>
              )}
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);
export default ResumePDF;
