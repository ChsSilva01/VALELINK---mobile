namespace Desktop_TCC
{
    partial class tela_feedback
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_mostrar_feedbacks = new System.Windows.Forms.Button();
            this.data_grid_feedbacks = new System.Windows.Forms.DataGridView();
            ((System.ComponentModel.ISupportInitialize)(this.data_grid_feedbacks)).BeginInit();
            this.SuspendLayout();
            // 
            // btn_mostrar_feedbacks
            // 
            this.btn_mostrar_feedbacks.Location = new System.Drawing.Point(522, 59);
            this.btn_mostrar_feedbacks.Name = "btn_mostrar_feedbacks";
            this.btn_mostrar_feedbacks.Size = new System.Drawing.Size(147, 31);
            this.btn_mostrar_feedbacks.TabIndex = 0;
            this.btn_mostrar_feedbacks.Text = "Mostrar FeedBacks";
            this.btn_mostrar_feedbacks.UseVisualStyleBackColor = true;
            // 
            // data_grid_feedbacks
            // 
            this.data_grid_feedbacks.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.data_grid_feedbacks.Location = new System.Drawing.Point(48, 131);
            this.data_grid_feedbacks.Name = "data_grid_feedbacks";
            this.data_grid_feedbacks.Size = new System.Drawing.Size(1119, 500);
            this.data_grid_feedbacks.TabIndex = 1;
            // 
            // tela_feedback
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1221, 692);
            this.Controls.Add(this.data_grid_feedbacks);
            this.Controls.Add(this.btn_mostrar_feedbacks);
            this.Name = "tela_feedback";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "tela_feedback";
            ((System.ComponentModel.ISupportInitialize)(this.data_grid_feedbacks)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button btn_mostrar_feedbacks;
        private System.Windows.Forms.DataGridView data_grid_feedbacks;
    }
}

